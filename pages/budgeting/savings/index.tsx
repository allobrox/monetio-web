import { NextPage } from "next";
import Head from "next/head";
import { AppNavbar } from "../../../components/navbar/AppNavbar/AppNavbar";
import { SavingsView } from "./SavingsView";

const Savings: NextPage = () => {
    return (
        <div>
            <Head>
                <title>Savings</title>
                <meta name="description" content="Savings" />
                <link rel="icon" href="/favicon16.jpg" />
            </Head>
            <main>
                <AppNavbar />
                <SavingsView />
            </main>
        </div>
    );
};

export default Savings;
