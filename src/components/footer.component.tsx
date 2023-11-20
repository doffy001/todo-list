export default function Footer({ todos, setTodos }: Readonly<{ todos: any, setTodos: any }>) {
  const countTodoLeft: number = todos.reduce((acc: number, todo: any) => {
    acc += (todo.isCompleted ? 0 : 1);
    return acc;
  }, 0)

  const handleClearCompleted = (): void => {
    setTodos(todos.map((todo: any) => ({
      ...todo,
      isCompleted: false,
    })))
  }

  return !todos.length
    ? <></>
    : (
      <>
        { /* This footer should hidden by default and shown when there are todos */ }
        <footer className="footer">
          { /* This should be `0 items left` by default */ }
          <span className="todo-count"><strong>{countTodoLeft}</strong> items left</span>
          { /* Remove this if you don't implement routing */ }
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
          { /* Hidden if no completed items are left ↓ */ }
          <button
            className="clear-completed"
            onClick={handleClearCompleted}
          >
            Clear completed
          </button>
        </footer>
      </>
    )
}