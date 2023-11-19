import { useState } from 'react';
import './App.css';
import { Home } from "./pages/index";

export default function App() {
  const [todos, setTodos] = useState([]);
  return (
    <Home todos={todos} />
  );
}
