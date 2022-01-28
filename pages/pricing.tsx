import { NextPage } from "next";
import Head from "next/head";
import { IndexNavbar } from "../components/navbar/indexNavbar";

const Pricing: NextPage = () => {
    return (
        <div>
            <Head>
                <title>Pricing</title>
                <meta name="description" content="Pricing" />
                <link rel="icon" href="/favicon16.jpg" />
            </Head>
            <main>
                <IndexNavbar />
                <p>Pricing page</p>
            </main>
        </div>
    );
};

export default Pricing;
