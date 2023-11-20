import { useEffect } from 'react';
import { v4 as uuidv4 } from 'uuid';

export default function Header({ todos, setTodos, saveToStorage }: Readonly<{ todos: any, setTodos: any, saveToStorage: () => void }>) {
  const todoLength = todos.length;
  const handleKeydown = (e: any): void => {
    if (e.key === 'Enter') {
      const newTodos = [
        ...todos,
        {
          id: uuidv4(),
          value: e.target.value.trim(),
          isCompleted: false,
          isEditing: false,
        },
      ]
      setTodos(newTodos);
      e.target.value = '';
    }
  }

  useEffect(() => {
    saveToStorage();
  }, [todoLength])

  return (
    <header className="header">
      <h1>todos</h1>
      <input className="new-todo" placeholder="What needs to be done?" autoFocus onKeyDown={(e) => handleKeydown(e)} />
    </header>
  )
}