import { Accordion, Table } from "react-bootstrap";

export const DebtAccordion = () => {
    return (
        <Accordion.Item eventKey="3">
            <Accordion.Header>Debt - 4.52M Ft -90k Ft</Accordion.Header>
            <Accordion.Body>
                <Table striped hover>
                    <thead>
                        <tr>
                            <th>Category</th>
                            <th>Balance</th>
                            <th>This month</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td>House mortgage</td>
                            <td>4.5M Ft</td>
                            <td>-75k Ft</td>
                        </tr>
                        <tr>
                            <td>Student loan</td>
                            <td>26k Ft</td>
                            <td>-15k Ft</td>
                        </tr>
                        <tr>
                            <td>
                                <strong>Total</strong>
                            </td>
                            <td>
                                <strong>4.52M Ft</strong>
                            </td>
                            <td>
                                <strong>-90k Ft</strong>
                            </td>
                        </tr>
                    </tbody>
                </Table>
            </Accordion.Body>
        </Accordion.Item>
    );
};
