import { NextPage } from "next";
import Head from "next/head";
import { AppNavbar } from "../../components/navbar/AppNavbar/AppNavbar";

const Plan: NextPage = () => {
    return (
        <div>
            <Head>
                <title>Plan</title>
                <meta name="description" content="Plan" />
                <link rel="icon" href="/favicon16.jpg" />
            </Head>
            <main>
                <AppNavbar />
                <p>Plan page</p>
            </main>
        </div>
    );
};

export default Plan;
