import { NextPage } from "next";
import Head from "next/head";
import { AppNavbar } from "../../components/navbar/appNavbar";

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
                <p>Savings page</p>
            </main>
        </div>
    );
};

export default Savings;
