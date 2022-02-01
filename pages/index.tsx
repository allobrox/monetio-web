import type { NextPage } from "next";
import Head from "next/head";
import { IndexNavbar } from "../components/navbar/IndexNavbar/IndexNavbar";

const Home: NextPage = () => {
    return (
        <div>
            <Head>
                <title>monetio</title>
                <meta name="description" content="Budgeting app" />
                <link rel="icon" href="/favicon16.jpg" />
            </Head>

            <main>
                <IndexNavbar />
                <div>Index page</div>
            </main>
        </div>
    );
};

export default Home;
