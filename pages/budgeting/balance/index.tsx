import { NextPage } from "next";
import Head from "next/head";
import { AppNavbar } from "../../../components/navbar/AppNavbar/AppNavbar";

const Index: NextPage = () => {
    return (
        <div>
            <Head>
                <title>Balance</title>
                <meta name="description" content="Monthly balance" />
                <link rel="icon" href="/favicon16.jpg" />
            </Head>
            <main>
                <AppNavbar />
                <p>Balance page</p>
            </main>
        </div>
    );
};

export default Index;
