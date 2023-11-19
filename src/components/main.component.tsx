export default function Main({ todos, setTodos, isAllCompleted }: Readonly<{ todos: any, setTodos: any, isAllCompleted: boolean }>) {
  const handleToggleAll = (): void => {
    setTodos(todos.map((todo: any) => ({
      ...todo,
      isCompleted: !isAllCompleted,
    })))
  }

  const handleToggleTodoItem = (i: number): void => {
    setTodos(todos.map((todo: any, j: number) => ({
      ...todo,
      isCompleted: (i === j ? !todo.isCompleted : todo.isCompleted),
    })))
  }

  return !todos.length
    ? <></>
    : (
      <>
        { /* This section should be hidden by default and shown when there are todos */ }
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
            { /* These are here just to show the structure of the list items */ }
            { /* List items should get the className `editing` when editing and `completed` when marked as completed */ }
            {
              todos.map((todo: any, i: number) => (
                <li
                  key={todo.id}
                  className={todo.isCompleted ? 'completed' : ''}
                >
                  <div className="view">
                    <input
                      className="toggle"
                      type="checkbox"
                      checked={todo.isCompleted}
                      onChange={() => {handleToggleTodoItem(i)}}
                    />
                    <label>{todo.value}</label>
                    <button className="destroy"></button>
                  </div>
                  <input className="edit"/>
                </li>
              ))
            }
            {/* <li className="completed">
              <div className="view">
                <input className="toggle" type="checkbox" />
                <label>Taste JavaScript</label>
                <button className="destroy"></button>
              </div>
              <input className="edit" />
            </li>
            <li>
              <div className="view">
                <input className="toggle" type="checkbox" />
                <label>Buy a unicorn</label>
                <button className="destroy"></button>
              </div>
              <input className="edit" />
            </li> */}
          </ul>
        </section>
      </>
    )
}