import { NextPage } from "next";
import Head from "next/head";
import { AppNavbar } from "../../../components/navbar/AppNavbar/AppNavbar";
import { BalanceView } from "./BalanceCard/BalanceView";
import styles from "../../../styles/Balance.module.css";

const Index: NextPage = () => {
    return (
        <div>
            <Head>
                <title>Balance</title>
                <meta name="description" content="Monthly balance" />
                <link rel="icon" href="/favicon16.jpg" />
            </Head>
            <main className={styles.balance}>
                <AppNavbar />
                <BalanceView />
            </main>
        </div>
    );
};

export default Index;
