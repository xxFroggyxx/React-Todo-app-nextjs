import { useState } from "react";
import Head from "next/head";
import styles from "../styles/Home.module.css";
import Menu from "./components/AppMenu/Menu";
import Title from "./components/AppTitle/Title";
import Add from "./components/AppTodoAdd/Add";
import List from "./components/AppTodoList/List";
import Layout from "./components/Layout";

export default function Home({ defaultTodos }) {
  const [todos, setTodos] = useState(defaultTodos);
  return (
    <div className={styles.wrapper}>
      <Head>
        <title>Todo App | {Home.name}</title>
        <meta name="description" content="Todo App" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Layout>
        <Title />
        <Menu />
        <Add />
        <List todos={todos} />
      </Layout>
    </div>
  );
}

export async function getServerSideProps() {
  const res = await fetch("https://jsonplaceholder.typicode.com/todos");
  const temp = await res.json();
  const defaultTodos = temp.slice(0, 10);

  return { props: { defaultTodos } };
}
