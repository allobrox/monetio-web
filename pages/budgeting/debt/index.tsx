import { NextPage } from "next";
import Head from "next/head";
import { AppNavbar } from "../../../components/navbar/AppNavbar/AppNavbar";
import { DebtView } from "./DebtView";

const Debt: NextPage = () => {
    return (
        <div>
            <Head>
                <title>Debt</title>
                <meta name="description" content="Debt" />
                <link rel="icon" href="/favicon16.jpg" />
            </Head>
            <main>
                <AppNavbar />
                <DebtView />
            </main>
        </div>
    );
};

export default Debt;
