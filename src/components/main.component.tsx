export default function Main({ todos }: Readonly<{ todos: string[] | never[] }>) {
  return !todos.length
    ? <></>
    : (
      <>
        { /* This section should be hidden by default and shown when there are todos */ }
        <section className="main">
          <input id="toggle-all" className="toggle-all" type="checkbox" />
          <label htmlFor="toggle-all">Mark all as complete</label>
          <ul className="todo-list">
            { /* These are here just to show the structure of the list items */ }
            { /* List items should get the className `editing` when editing and `completed` when marked as completed */ }
            {
              todos.map((todo, i) => (
                <li key={i}>
                  <div className="view">
                    <input className="toggle" type="checkbox" />
                    <label>{todo}</label>
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