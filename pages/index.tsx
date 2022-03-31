import type { NextPage } from "next";
import Head from "next/head";
import styles from "../styles/Index.module.css";

import SteppingUp from "../public/illustration/undraw_stepping_up_g6oo.svg";
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
                <div className={styles.big_illustration_wrapper}>
                    <div className={styles.big_illustration_text_column}>
                        <div className={styles.big_illustration_title}>
                            monetio
                        </div>
                        <div className={styles.big_illustration_subtitle}>
                            the free, opensource budgeting app
                        </div>
                        <div className={styles.big_illustration_explanation}>
                            Operating costs payed by donations, source code
                            available at Github{" "}
                        </div>
                    </div>
                    <div className={styles.big_i_wrapper}>
                        <img
                            className={styles.big_illustration}
                            src="/illustration/undraw_stepping_up_g6oo.svg"
                            alt="An SVG of an eye"
                        />
                        {/*<SteppingUp*/}
                        {/*    className={styles.big_illustration}*/}
                        {/*    fill={"#dad7dc"}*/}
                        {/*/>*/}
                    </div>
                </div>
            </main>
        </div>
    );
};

export default Home;
