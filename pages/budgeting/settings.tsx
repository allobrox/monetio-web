import { NextPage } from "next";
import Head from "next/head";
import { AppNavbar } from "../../components/navbar/AppNavbar/AppNavbar";

const Settings: NextPage = () => {
    return (
        <div>
            <Head>
                <title>Settings</title>
                <meta name="description" content="Settings" />
                <link rel="icon" href="/favicon16.jpg" />
            </Head>
            <main>
                <AppNavbar />
                <p>Settings page</p>
            </main>
        </div>
    );
};

export default Settings;
