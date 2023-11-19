import { Header, Main, Footer } from "../components/index";

export default function Home({ todos, setTodos }: Readonly<{ todos: any, setTodos: any }>) {
  return (
    <section className="todoapp">
      <Header todos={todos} setTodos={setTodos} />
      <Main todos={todos} />
      <Footer todos={todos} />
    </section>
  )
}