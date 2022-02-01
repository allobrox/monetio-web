import { NextPage } from "next";
import Head from "next/head";
import { IndexNavbar } from "../components/navbar/IndexNavbar/IndexNavbar";

const FAQ: NextPage = () => {
    return (
        <div>
            <Head>
                <title>monetio</title>
                <meta name="description" content="Budgeting app" />
                <link rel="icon" href="/favicon16.jpg" />
            </Head>

            <main>
                <IndexNavbar />
                <div>FAQ page</div>
            </main>
        </div>
    );
};

export default FAQ;
