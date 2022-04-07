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
                            alt="Person stepping up"
                        />
                    </div>
                </div>
                <div className={styles.small_illustrations}>
                    <div className={styles.small_illustration_container}>
                        <img
                            className={styles.big_illustration}
                            src="/illustration/spreadsheet.svg"
                            alt="Men viewing a spreadsheet"
                        />
                        <p>If spreadsheets...</p>
                    </div>
                    <div className={styles.small_illustration_container}>
                        <img
                            className={styles.big_illustration}
                            src="/illustration/personal_finance.svg"
                            alt="Men managing his finances"
                        />
                        <p>...or other money tracker apps don't work</p>
                    </div>
                    <h2>Manage finances with monetio!</h2>
                    <div className={styles.small_illustration_container}>
                        <img
                            className={styles.big_illustration}
                            src="/illustration/plan_budget.svg"
                            alt="Women planning monthly budget"
                        />
                        <p>Plan budget</p>
                    </div>
                    <div className={styles.small_illustration_container}>
                        <img
                            className={styles.big_illustration}
                            src="/illustration/online_groceries.svg"
                            alt="Women viewing her mobile phone"
                        />
                        <p>Go shopping</p>
                    </div>
                    <div className={styles.small_illustration_container}>
                        <img
                            className={styles.big_illustration}
                            src="/illustration/collaborating.svg"
                            alt="Man recording expenses on mobile phone"
                        />
                        <p>Record expenses</p>
                    </div>
                    <div className={styles.small_illustration_container}>
                        <img
                            className={styles.big_illustration}
                            src="/illustration/savings.svg"
                            alt="Men sitting next his piggy bank"
                        />
                        <p>Create saving accounts</p>
                    </div>
                    <div className={styles.small_illustration_container}>
                        <img
                            className={styles.big_illustration}
                            src="/illustration/growth_curve.svg"
                            alt="Men sitting next his piggy bank"
                        />
                        <p>Get out of debt</p>
                    </div>
                    <div className={styles.small_illustration_container}>
                        <img
                            className={styles.big_illustration}
                            src="/illustration/data.svg"
                            alt="Man organizing statistics"
                        />
                        <p>View statistics</p>
                    </div>
                    <div className={styles.small_illustration_container}>
                        <img
                            className={styles.big_illustration}
                            src="/illustration/make_it_rain.svg"
                            alt="Men spending his saved money"
                        />
                        <p>Spend the saved money on your dreams</p>
                    </div>
                </div>
            </main>
        </div>
    );
};

export default Home;
