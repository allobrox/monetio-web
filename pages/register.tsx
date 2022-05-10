import axios from "axios";
import { NextPage } from "next";
import Head from "next/head";
import { useState } from "react";
import { Button, Card, Form } from "react-bootstrap";
import styles from "../styles/Register.module.css";

const Register: NextPage = () => {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [password2, setPassword2] = useState("");
    const [tcAccepted, setTcAccepted] = useState(false);

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
                                    long, contain letters, capital letters,
                                    numbers and special characters.
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
                        {email.length > 0 &&
                        password.length > 0 &&
                        password === password2 &&
                        tcAccepted ? (
                            <Button
                                className={styles.register_button}
                                variant="primary"
                                //TODO add validation to onClick
                                onClick={() =>
                                    axios
                                        .post(
                                            "http://localhost:3000/api/register",
                                            {
                                                email: email,
                                                password: password
                                            }
                                        )
                                        .then(res => alert(res.status))
                                }
                            >
                                Register
                            </Button>
                        ) : (
                            <Button
                                className={styles.register_button}
                                variant="secondary"
                                disabled
                            >
                                Register
                            </Button>
                        )}
                    </Card.Body>
                </Card>
            </main>
        </div>
    );
};

export default Register;
