import Head from "next/head";
import styles from "../styles/Home.module.css";
import Menu from "./components/AppMenu/Menu";
import Title from "./components/AppTitle/Title";
import Add from "./components/AppTodoAdd/Add";
import Layout from "./components/Layout";

export default function Home() {
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
      </Layout>
    </div>
  );
}
