import { Button, Container, Nav, Navbar } from "react-bootstrap";

export function AppNavbar() {
    return (
        <Navbar bg="light" expand="lg">
            <Container>
                <Navbar.Brand>
                    <Button
                        variant="success"
                        onClick={() => alert("TODO implement")}
                    >
                        Add transaction
                    </Button>
                </Navbar.Brand>
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav">
                    <Nav className="me-auto">
                        <Nav.Link href="/budgeting/balance">Balance</Nav.Link>
                        <Nav.Link href="/budgeting/income">Income</Nav.Link>
                        <Nav.Link href="/budgeting/expense">Expense</Nav.Link>
                        <Nav.Link href="/budgeting/savings">Savings</Nav.Link>
                        <Nav.Link href="/budgeting/debt">Debt</Nav.Link>
                        <Nav.Link href="/budgeting/planning">Planning</Nav.Link>
                        <Nav.Link href="/budgeting/settings">Settings</Nav.Link>
                        <Nav.Link onClick={() => alert("TODO implement")}>
                            Log out
                        </Nav.Link>
                    </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    );
}
