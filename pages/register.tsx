import { NextPage } from "next";
import Head from "next/head";
import { Button, Card, Form } from "react-bootstrap";
import styles from "../styles/Register.module.css";

const Register: NextPage = () => {
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
                        <Form>
                            <Form.Group
                                className="mb-3"
                                controlId="exampleForm.ControlInput1"
                            >
                                <Form.Label>Email address</Form.Label>
                                <Form.Control
                                    type="email"
                                    placeholder="name@example.com"
                                />
                            </Form.Group>
                            <Form.Group>
                                <Form.Label htmlFor="inputPassword5">
                                    Password
                                </Form.Label>
                                <Form.Control
                                    type="password"
                                    id="inputPassword5"
                                    aria-describedby="passwordHelpBlock"
                                />
                                <Form.Text id="passwordHelpBlock" muted>
                                    Your password must be min. 8 characters
                                    long, contain letters, capital letters,
                                    numbers and special characters.
                                </Form.Text>
                            </Form.Group>
                        </Form>

                        <Button variant="primary">Register</Button>
                    </Card.Body>
                </Card>
            </main>
        </div>
    );
};

export default Register;
