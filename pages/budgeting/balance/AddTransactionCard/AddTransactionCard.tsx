import React, { useState } from "react";
import {
    Button,
    ButtonGroup,
    ButtonToolbar,
    Card,
    FloatingLabel,
    Form
} from "react-bootstrap";
import { SpendingCategories } from "./SpendingCategories";
import { IncomeCategories } from "./IncomeCategories";
import styles from "../../../../styles/Balance.module.css";

export const AddTransactionCard = () => {
    const [isSpending, setIsSpending] = useState(false);

    return (
        <Card className={styles.add_transaction}>
            <Card.Header>
                {isSpending ? "Add spending" : "Add income"}
            </Card.Header>
            <Card.Body>
                <Form>
                    <Form.Group className="mb-3" controlId="formCategorySelect">
                        <Form.Check
                            type="switch"
                            id="custom-switch"
                            checked={isSpending}
                            label={isSpending ? "Spending" : "Income"}
                            onChange={() => setIsSpending(!isSpending)}
                        />
                        <Form.Select aria-label="Default select example">
                            {isSpending ? (
                                <SpendingCategories />
                            ) : (
                                <IncomeCategories />
                            )}
                        </Form.Select>
                    </Form.Group>

                    <Form.Group className="mb-3" controlId="formAmount">
                        <FloatingLabel
                            controlId="floatingInput"
                            label="Amount"
                            className="mb-3"
                        >
                            <Form.Control type="text" placeholder="Amount" />
                        </FloatingLabel>
                        <Form.Group
                            className="mb-3"
                            controlId="formCurrencySelect"
                        >
                            <Form.Select aria-label="Currency">
                                <option>Currency</option>
                                <option value="1">EUR</option>
                                <option value="2">HUF</option>
                                <option value="3">USD</option>
                            </Form.Select>
                        </Form.Group>
                        <FloatingLabel
                            controlId="floatingInput"
                            label="Memo"
                            className="mb-3"
                        >
                            <Form.Control type="text" placeholder="Memo" />
                        </FloatingLabel>
                        <FloatingLabel
                            controlId="floatingInput"
                            label="Day"
                            className="mb-3"
                        >
                            <Form.Control type="text" placeholder="Day" />
                        </FloatingLabel>
                    </Form.Group>
                    <ButtonToolbar
                        aria-label="Toolbar with button groups"
                        className={styles.add_transaction_button_bar}
                    >
                        <ButtonGroup className="me-2" aria-label="First group">
                            <Button variant="danger">Clear</Button>{" "}
                            <Button variant="warning">Split</Button>
                        </ButtonGroup>
                        <ButtonGroup className="me-2" aria-label="Second group">
                            <Button variant="primary">Save</Button>
                        </ButtonGroup>
                    </ButtonToolbar>
                </Form>
            </Card.Body>
        </Card>
    );
};
