import { NextPage } from "next";
import Head from "next/head";
import { AppNavbar } from "../../components/navbar/appNavbar";

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
                <p>Debt page</p>
            </main>
        </div>
    );
};

export default Debt;
