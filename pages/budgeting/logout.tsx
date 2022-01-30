import { NextPage } from "next";
import Head from "next/head";

const Logout: NextPage = () => {
    return (
        <div>
            <Head>
                <title>Log out</title>
                <meta name="description" content="log out from monetio" />
                <link rel="icon" href="/favicon16.jpg" />
            </Head>
            <main>
                <p>Log out</p>
            </main>
        </div>
    );
};

export default Logout;
