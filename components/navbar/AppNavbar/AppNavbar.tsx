import React, { useState } from "react";
import { Container, Nav, Navbar } from "react-bootstrap";

export const AppNavbar = () => {
    const [isOpen, setIsOpen] = useState(false);

    function onTransactionAdd(): void {
        alert("TODO implement");
    }

    return (
        <Navbar bg="light" expand="lg">
            <Container>
                <Navbar.Brand href="#home">React-Bootstrap</Navbar.Brand>
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav">
                    <Nav className="me-auto">
                        <Nav.Link href="/budgeting/balance">Balance</Nav.Link>
                        <Nav.Link href="/budgeting/income">Income</Nav.Link>
                        <Nav.Link href="/budgeting/expense">Spending</Nav.Link>
                        <Nav.Link href="/budgeting/savings">Saving</Nav.Link>
                        <Nav.Link href="/budgeting/debt">Debt</Nav.Link>
                        <Nav.Link href="/budgeting/plan">Plan</Nav.Link>
                        <Nav.Link href="/budgeting/settings">Settings</Nav.Link>
                        <Nav.Link href="/budgeting/logout">Log out</Nav.Link>
                    </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    );
};
