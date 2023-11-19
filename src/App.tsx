import { useState } from 'react';
import './App.css';
import { Home } from "./pages/index";

export default function App() {
  const [todos, setTodos] = useState([]);
  const isAllCompleted = !todos.some((todo: any) => !todo.isCompleted);

  return (
    <Home todos={todos} setTodos={setTodos} isAllCompleted={isAllCompleted} />
  );
}
