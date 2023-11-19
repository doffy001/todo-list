import { Header, Main, Footer } from "../components/index";

export default function Home({ todos, setTodos, isAllCompleted }: Readonly<{ todos: any, setTodos: any, isAllCompleted: boolean }>) {
  return (
    <section className="todoapp">
      <Header todos={todos} setTodos={setTodos} />
      <Main todos={todos} setTodos={setTodos} isAllCompleted={isAllCompleted} />
      <Footer todos={todos} setTodos={setTodos} />
    </section>
  )
}