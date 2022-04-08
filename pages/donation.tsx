import { NextPage } from "next";
import Head from "next/head";
import { IndexNavbar } from "../components/navbar/IndexNavbar/IndexNavbar";

const Donation: NextPage = () => {
    return (
        <div>
            <Head>
                <title>Donation</title>
                <meta name="description" content="Donation" />
                <link rel="icon" href="/favicon16.jpg" />
            </Head>
            <main>
                <IndexNavbar />
                <p>Donation page</p>
            </main>
        </div>
    );
};

export default Donation;
