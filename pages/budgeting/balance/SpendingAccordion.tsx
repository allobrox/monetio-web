import { Accordion, Table } from "react-bootstrap";

export const SpendingAccordion = () => {
    return (
        <Accordion.Item eventKey="1">
            <Accordion.Header>Spending - 266.65k Ft / 270k Ft</Accordion.Header>
            <Accordion.Body>
                <Table striped hover>
                    <thead>
                        <tr>
                            <th>Category</th>
                            <th>Planned</th>
                            <th>Spent</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td>Rent</td>
                            <td>160k Ft</td>
                            <td>160k Ft</td>
                        </tr>
                        <tr>
                            <td>Public transportation</td>
                            <td>15k Ft</td>
                            <td>16.43k Ft</td>
                        </tr>
                        <tr>
                            <td>Food</td>
                            <td>85k Ft</td>
                            <td>82.92k Ft</td>
                        </tr>
                        <tr>
                            <td>Medicine</td>
                            <td>10k Ft</td>
                            <td>7.3k Ft</td>
                        </tr>
                        <tr>
                            <td>
                                <strong>Total</strong>
                            </td>
                            <td>
                                <strong>270k Ft</strong>
                            </td>
                            <td>
                                <strong>266.65k Ft</strong>
                            </td>
                        </tr>
                    </tbody>
                </Table>
            </Accordion.Body>
        </Accordion.Item>
    );
};
