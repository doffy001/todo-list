import { Header, Main, Footer } from "../components/index";

export default function Home({ todos }: Readonly<{ todos: string[] | never[] }>) {
  return (
    <section className="todoapp">
      <Header todos={todos} />
      <Main todos={todos} />
      <Footer todos={todos} />
    </section>
  )
}