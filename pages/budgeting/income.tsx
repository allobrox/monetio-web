import { NextPage } from "next";
import Head from "next/head";
import { AppNavbar } from "../../components/navbar/appNavbar";

const Income: NextPage = () => {
    return (
        <div>
            <Head>
                <title>Income</title>
                <meta name="description" content="Income" />
                <link rel="icon" href="/favicon16.jpg" />
            </Head>
            <main>
                <AppNavbar />
                <p>Income page</p>
            </main>
        </div>
    );
};

export default Income;
