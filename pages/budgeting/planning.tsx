import { NextPage } from "next";
import Head from "next/head";
import { AppNavbar } from "../../components/navbar/appNavbar";

const Planning: NextPage = () => {
    return (
        <div>
            <Head>
                <title>Planning</title>
                <meta name="description" content="Planning" />
                <link rel="icon" href="/favicon16.jpg" />
            </Head>
            <main>
                <AppNavbar />
                <p>Planning page</p>
            </main>
        </div>
    );
};

export default Planning;
