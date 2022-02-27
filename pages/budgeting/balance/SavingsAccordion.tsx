import { Accordion, Table } from "react-bootstrap";

export const SavingsAccordion = () => {
    return (
        <Accordion.Item eventKey="2">
            <Accordion.Header>Savings - 860k Ft +88k Ft</Accordion.Header>
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
                            <td>New house</td>
                            <td>350k Ft</td>
                            <td>+50k Ft</td>
                        </tr>
                        <tr>
                            <td>College fund</td>
                            <td>510k Ft</td>
                            <td>+38k Ft</td>
                        </tr>
                        <tr>
                            <td>
                                <strong>Total</strong>
                            </td>
                            <td>
                                <strong>860k Ft</strong>
                            </td>
                            <td>
                                <strong>+88k Ft</strong>
                            </td>
                        </tr>
                    </tbody>
                </Table>
            </Accordion.Body>
        </Accordion.Item>
    );
};
