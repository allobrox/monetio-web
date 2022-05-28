import axios from "axios";
import { NextPage } from "next";
import Head from "next/head";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";
import { Spinner } from "react-bootstrap";

const Verify: NextPage = () => {
    const router = useRouter();
    const routerQuery = router.query;
    const userId: string = String(routerQuery.userId);
    const [loading, setLoading] = useState(true);
    const [success, setSuccess] = useState(false);

    useEffect(() => {
        let componentMounted = true;
        if (routerQuery != null) {
            setLoading(true);
            axios
                .post("http://localhost:3000/api/verify", {
                    userId: userId
                })
                .then(res => {
                    setLoading(false);
                    setSuccess(true);
                });
        }
        return () => {
            componentMounted = false;
        };
    }, [routerQuery]);

    return (
        <div>
            <Head>
                <title>Register</title>
                <meta
                    name="description"
                    content="Register to monetio, the free and reliable budgeting app"
                />
                <link rel="icon" href="/favicon16.jpg" />
            </Head>
            <main>
                {loading && (
                    <Spinner animation="border" role="status">
                        <span className="visually-hidden">Loading...</span>
                    </Spinner>
                )}
                {!loading && success && (
                    <p>Your email is successfully verified!</p>
                )}
            </main>
        </div>
    );
};

export default Verify;
