export default function Header({ todos, setTodos }: Readonly<{ todos: any, setTodos: any }>) {
  const handleKeydown = function(e: any): void {
    if (e.key === 'Enter') {
      const newTodos = [
        ...todos,
        e.target.value.trim(),
      ]
      setTodos(newTodos);
      e.target.value = '';
    }
  }

  return (
    <header className="header">
      <h1>todos</h1>
      <input className="new-todo" placeholder="What needs to be done?" autoFocus onKeyDown={(e) => handleKeydown(e)} />
    </header>
  )
}