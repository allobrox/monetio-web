import { NextPage } from "next";
import Head from "next/head";

const Reset: NextPage = () => {
    return (
        <div>
            <Head>
                <title>Password reset</title>
                <meta name="description" content="Password reset" />
                <link rel="icon" href="/favicon16.jpg" />
            </Head>
            <main>
                <p>Password reset page</p>
            </main>
        </div>
    );
};

export default Reset;
