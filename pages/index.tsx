import type { NextPage } from "next";
import Head from "next/head";
import styles from "../styles/Index.module.css";

import { IndexNavbar } from "../components/navbar/IndexNavbar/IndexNavbar";

const Home: NextPage = () => {
    return (
        <div>
            <Head>
                <title>monetio</title>
                <meta name="description" content="Budgeting app" />
                <link rel="icon" href="/favicon16.jpg" />
            </Head>

            <main className={styles.background}>
                <IndexNavbar />
                <div className={styles.text}>Index page</div>
            </main>
        </div>
    );
};

export default Home;
