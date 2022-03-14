import {
    Button,
    ButtonGroup,
    ButtonToolbar,
    Card,
    FloatingLabel,
    Form
} from "react-bootstrap";
import styles from "../../../styles/Balance.module.css";
import React from "react";

export const AddSavingsCard = () => {
    return (
        <Card className={styles.add_transaction}>
            <Card.Header>{"Add new saving account"}</Card.Header>
            <Card.Body>
                <Form>
                    <Form.Group className="mb-3" controlId="formAmount">
                        <FloatingLabel
                            controlId="floatingInput"
                            label="Saving account name"
                            className="mb-3"
                        >
                            <Form.Control type="text" placeholder="Name" />
                        </FloatingLabel>
                    </Form.Group>
                    <ButtonToolbar
                        aria-label="Toolbar with button groups"
                        className={styles.add_transaction_button_bar}
                    >
                        <ButtonGroup className="me-2" aria-label="Second group">
                            <Button variant="primary">Add</Button>
                        </ButtonGroup>
                    </ButtonToolbar>
                </Form>
            </Card.Body>
        </Card>
    );
};
