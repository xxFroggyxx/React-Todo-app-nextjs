import Head from "next/head";
import styles from "../styles/Home.module.css";
import Title from "./components/AppTitle/Title";
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
      </Layout>
    </div>
  );
}
