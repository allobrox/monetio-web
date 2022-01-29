import { NextPage } from "next";
import Head from "next/head";
import { AppNavbar } from "../../components/navbar/AppNavbar/AppNavbar";

const Expense: NextPage = () => {
    return (
        <div>
            <Head>
                <title>Expense</title>
                <meta name="description" content="Expense" />
                <link rel="icon" href="/favicon16.jpg" />
            </Head>
            <main>
                <AppNavbar />
                <p>Expense page</p>
            </main>
        </div>
    );
};

export default Expense;
