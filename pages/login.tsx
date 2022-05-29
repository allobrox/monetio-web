import { NextPage } from "next";
import Head from "next/head";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";
import { Button, Card, Form } from "react-bootstrap";
import axios from "axios";
import passwordValidator from "password-validator";
import styles from "../styles/Register.module.css";
import Link from "next/link";

const Login: NextPage = () => {
    const [email, setEmail] = useState("");
    const [loading, setLoading] = useState(false);
    const [password, setPassword] = useState("");
    const router = useRouter();

    useEffect(() => {}, [loading]);

    function validateEmail(): boolean {
        const regexp = new RegExp(
            /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
        );
        return regexp.test(email);
    }

    function validatePassword(): boolean {
        const schema = new passwordValidator();

        schema
            .is()
            .min(8) // Minimum length 8
            .is()
            .max(100) // Maximum length 100
            .has()
            .uppercase() // Must have uppercase letters
            .has()
            .lowercase() // Must have lowercase letters
            .has()
            .digits(1)
            .has()
            .symbols()
            .has()
            .not()
            .spaces();

        return Boolean(schema.validate(password));
    }

    function login(): void {
        setLoading(true);
        axios
            .post("http://localhost:3000/api/login", {
                email: email,
                password: password
            })
            .then(res => {
                setLoading(false);
                if (typeof window !== "undefined") {
                    router.push("/budgeting/balance");
                }
            });
    }

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
            <main className={styles.main_page}>
                <Card className={styles.register_card}>
                    <Card.Body>
                        <Card.Title>Login</Card.Title>
                        <Form className={styles.register_form}>
                            <Form.Group
                                className="mb-3"
                                controlId="exampleForm.ControlInput1"
                            >
                                <Form.Label>Email</Form.Label>
                                <Form.Control
                                    type="email"
                                    placeholder="name@example.com"
                                    onChange={e => setEmail(e.target.value)}
                                />
                            </Form.Group>
                            <Form.Group>
                                <Form.Label htmlFor="inputPassword">
                                    Password
                                </Form.Label>
                                <Form.Control
                                    type="password"
                                    id="inputPassword"
                                    aria-describedby="passwordHelpBlock"
                                    onChange={e => setPassword(e.target.value)}
                                />
                                <Form.Text id="passwordHelpBlock" muted>
                                    Your password must be min. 8 characters
                                    long, contain a letter, capital letter,
                                    number and a special character.
                                </Form.Text>
                            </Form.Group>
                           <Link href='/auth/reset'>Forgot password?</Link>
                        </Form>

                        <Button
                            className={styles.register_button}
                            disabled={
                                email.length == 0 ||
                                !validateEmail() ||
                                password.length == 0 ||
                                !validatePassword() ||
                                loading
                            }
                            variant="primary"
                            onClick={login}
                        >
                            {loading ? "Loading..." : "Login"}
                        </Button>
                    </Card.Body>
                </Card>
            </main>
        </div>
    );
};

export default Login;
