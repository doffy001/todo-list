import { Header, Main, Footer } from "../components/index";

export default function Home({ todos, setTodos, isAllCompleted, saveToStorage }: Readonly<{ todos: any, setTodos: any, isAllCompleted: boolean, saveToStorage: (todos?: any) => void }>) {
  return (
    <section className="todoapp">
      <Header todos={todos} setTodos={setTodos} saveToStorage={saveToStorage} />
      <Main todos={todos} setTodos={setTodos} isAllCompleted={isAllCompleted} saveToStorage={saveToStorage} />
      <Footer todos={todos} setTodos={setTodos} saveToStorage={saveToStorage} />
    </section>
  );
};