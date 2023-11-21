export default function Footer({ todos, setTodos, saveToStorage }: Readonly<{ todos: any, setTodos: any, saveToStorage: (todos?: any) => void }>) {
  const countTodoLeft: number = todos.reduce((acc: number, todo: any) => {
    acc += (todo.isCompleted ? 0 : 1);
    return acc;
  }, 0);

  const handleClearCompleted = (): void => {
    const newTodos = todos.map((todo: any) => ({
      ...todo,
      isCompleted: false,
    }));
    setTodos(newTodos);
    saveToStorage(newTodos);
  };

  return !todos.length
    ? <></>
    : (
      <footer className="footer">
        <span className="todo-count"><strong>{countTodoLeft}</strong> items left</span>
        <ul className="filters">
          <li>
            <a className="selected" href="#/">All</a>
          </li>
          <li>
            <a href="#/active">Active</a>
          </li>
          <li>
            <a href="#/completed">Completed</a>
          </li>
        </ul>
        <button
          className="clear-completed"
          onClick={handleClearCompleted}
        >
          Clear completed
        </button>
      </footer>
    );
};