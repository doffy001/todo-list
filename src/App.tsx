import { useState } from 'react';
import './App.css';
import { Home } from "./pages/index";

export default function App() {
  const savedTodos = localStorage.getItem('todos-react')
  const initTodos = savedTodos
    ? JSON.parse(savedTodos).map((todo: any) => {
      return {
        ...todo,
        isEditing: false,
      }
    })
    : []
  const [todos, setTodos] = useState(initTodos);
  const isAllCompleted = !todos.some((todo: any) => !todo.isCompleted);

  const saveToStorage = (): void => {
    localStorage.setItem('todos-react', JSON.stringify(todos));
  }

  return (
    <Home todos={todos} setTodos={setTodos} isAllCompleted={isAllCompleted} saveToStorage={saveToStorage} />
  );
}
