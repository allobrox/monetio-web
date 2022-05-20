import axios from "axios";
import { NextPage } from "next";
import Head from "next/head";
import { useEffect, useState } from "react";
import { Button, Card, Form } from "react-bootstrap";
import styles from "../styles/Register.module.css";
import passwordValidator from "password-validator";
import { useRouter } from "next/router";

const Register: NextPage = () => {
    const [email, setEmail] = useState("");
    const [loading, setLoading] = useState(false);
    const [password, setPassword] = useState("");
    const [password2, setPassword2] = useState("");
    const [tcAccepted, setTcAccepted] = useState(false);
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

    function register(): void {
        setLoading(true);
        axios
            .post("http://localhost:3000/api/register", {
                email: email,
                password: password
            })
            .then(res => {
                setLoading(false);
            });
        if (typeof window !== "undefined") {
            router.push("/budgeting/balance");
        }
    }

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
            <main className={styles.main_page}>
                <Card className={styles.register_card}>
                    <Card.Body>
                        <Card.Title>Registration</Card.Title>
                        <Form className={styles.register_form}>
                            <Form.Group
                                className="mb-3"
                                controlId="exampleForm.ControlInput1"
                            >
                                <Form.Label>Email address</Form.Label>
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
                            </Form.Group>
                            <Form.Group>
                                <Form.Label htmlFor="inputPassword2">
                                    Re-enter password
                                </Form.Label>
                                <Form.Control
                                    type="password"
                                    id="inputPassword2"
                                    aria-describedby="passwordHelpBlock"
                                    onChange={e => setPassword2(e.target.value)}
                                />
                                <Form.Text id="passwordHelpBlock" muted>
                                    Your password must be min. 8 characters
                                    long, contain a letter, capital letter,
                                    number and a special character.
                                </Form.Text>
                            </Form.Group>
                            <Form.Check
                                type={"checkbox"}
                                id={"default-checkbox"}
                                label={
                                    <p>
                                        I accept&nbsp;
                                        <a href="/tc" target="blank">
                                            T&amp;C
                                        </a>
                                    </p>
                                }
                                checked={tcAccepted}
                                onChange={() => setTcAccepted(!tcAccepted)}
                            />
                        </Form>

                        <Button
                            className={styles.register_button}
                            disabled={
                                email.length == 0 ||
                                !validateEmail() ||
                                password.length == 0 ||
                                password !== password2 ||
                                !validatePassword() ||
                                !tcAccepted ||
                                loading
                            }
                            variant="primary"
                            onClick={register}
                        >
                            {loading ? "Loading..." : "Register"}
                        </Button>
                    </Card.Body>
                </Card>
            </main>
        </div>
    );
};

export default Register;
