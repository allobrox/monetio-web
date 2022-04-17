import type { NextPage } from "next";
import Head from "next/head";
import styles from "../styles/Index.module.css";

const Home: NextPage = () => {
    return (
        <div>
            <Head>
                <title>monetio</title>
                <meta name="description" content="Budgeting app" />
                <link rel="icon" href="/favicon16.jpg" />
            </Head>

            <main className={styles.background}>
                <div className={styles.big_illustration_wrapper}>
                    <div className={styles.big_illustration_text_column}>
                        <div className={styles.big_illustration_title}>
                            monetio
                        </div>
                        <h1 className={styles.big_illustration_subtitle}>
                            the free, opensource budgeting app
                        </h1>
                        <h2 className={styles.big_illustration_explanation}>
                            Operating costs payed by donations, source code
                            available at Github
                        </h2>
                    </div>
                    <div className={styles.big_i_wrapper}>
                        <img
                            className={styles.big_illustration}
                            src="/illustration/undraw_stepping_up.svg"
                            alt="Person stepping up"
                        />
                    </div>
                </div>
            </main>
        </div>
    );
};

export default Home;
