import { NextPage } from "next";
import Head from "next/head";

const Login: NextPage = () => {
    return (
        <div>
            <Head>
                <title>Login - monetio</title>
                <meta
                    name="description"
                    content="Login to monetio, the free and reliable budgeting app."
                />
                <link rel="icon" href="/favicon16.jpg" />
            </Head>
            <main>
                <p>Login page</p>
            </main>
        </div>
    );
};

export default Login;
