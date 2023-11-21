import cn from 'classnames';

export default function Main({ todos, setTodos, isAllCompleted, saveToStorage }: Readonly<{ todos: any, setTodos: any, isAllCompleted: boolean, saveToStorage: (todos?: any) => void }>) {
  const handleToggleAll = (): void => {
    const newTodos = todos.map((todo: any): any => {
      return {
        ...todo,
        isCompleted: !isAllCompleted,
      }
    });
    setTodos(newTodos);
    saveToStorage(newTodos);
  }

  const handleToggleTodoItem = (i: number): void => {
    const newTodos = todos.map((todo: any, j: number): any => {
      return {
        ...todo,
        isCompleted: (i === j ? !todo.isCompleted : todo.isCompleted),
      }
    });
    setTodos(newTodos);
    saveToStorage(newTodos);
  }

  const handleDbClickTodoItem = (e: any, i: number): void => {
    setTimeout(() => {
      e.target.closest('li').querySelector('.edit').focus();
    }, 0);
    setTodos(todos.map((todo: any, j: number): any => ({
      ...todo,
      isEditing: (i === j ? !todo.isEditing : todo.isEditing),
    })))
  }

  const handleSaveValue = (e: any, i: number): void => {
    if (e.type !== 'blur' && e.key !== 'Enter' && e.key !== 'Escape') return;
    let isEscape: boolean = false;
    if (e.type === 'blur' || e.key === 'Enter') {
      if (!isEscape) {
        const newValue = e.target?.value.trim();
        const newTodos = todos.map((todo: any, j: number): any => {
          return i === j
          ? {
            ...todo,
            value: newValue || todo.value,
            isEditing: false,
          }
          : {
            ...todo
          }
        });
        setTodos(newTodos);
        e.target.value = newValue;
        saveToStorage(newTodos);
      };
    } else if (e.key === 'Escape') {
      isEscape = true;
      const newValue = '';
      const newTodos = todos.map((todo: any, j: number): any => {
        if (i === j) e.target.value = todo.value;
        return i === j
        ? {
          ...todo,
          value: newValue || todo.value,
          isEditing: false,
        }
        : {
          ...todo
        }
      });
      setTodos(newTodos);
      saveToStorage(newTodos);
    }
  }

  const handleRemoveItem = (i: number): void => {
    const newTodos = [...todos];
    newTodos.splice(i, 1);
    setTodos(newTodos);
    saveToStorage(newTodos);
  }

  return !todos.length
    ? <></>
    : (
      <section className="main">
        <input
          id="toggle-all"
          className="toggle-all"
          type="checkbox"
          onChange={handleToggleAll}
          checked={isAllCompleted}
        />
        <label htmlFor="toggle-all">Mark all as complete</label>
        <ul className="todo-list">
          {
            todos.map((todo: any, i: number) => (
              <li
                key={todo.id}
                className={cn({
                  'completed': todo.isCompleted,
                  'editing': todo.isEditing,
                })}
              >
                <div className="view">
                  <input
                    className="toggle"
                    type="checkbox"
                    checked={todo.isCompleted}
                    onChange={() => {handleToggleTodoItem(i)}}
                  />
                  <label onDoubleClick={(e) => {handleDbClickTodoItem(e, i)}}>{todo.value}</label>
                  <button
                    className="destroy"
                    onClick={(): void => {handleRemoveItem(i)}}
                  ></button>
                </div>
                <input
                  className="edit"
                  onBlur={(e) => {handleSaveValue(e, i)}}
                  onKeyDown={(e) => {handleSaveValue(e, i)}}
                  defaultValue={todo.value}
                />
              </li>
            ))
          }
        </ul>
      </section>
    )
}