import { Accordion, Table } from "react-bootstrap";

export const IncomeAccordion = () => {
    return (
        <Accordion.Item eventKey="0">
            <Accordion.Header>Income - 750k Ft / 1M Ft</Accordion.Header>
            <Accordion.Body>
                <Table striped hover>
                    <thead>
                        <tr>
                            <th>Category</th>
                            <th>Planned</th>
                            <th>Received</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td>Salary</td>
                            <td>500k Ft</td>
                            <td>250k Ft</td>
                        </tr>
                        <tr>
                            <td>Salary</td>
                            <td>500k Ft</td>
                            <td>500k Ft</td>
                        </tr>
                        <tr>
                            <td>
                                <strong>Total</strong>
                            </td>
                            <td>
                                <strong>1M Ft</strong>
                            </td>
                            <td>
                                <strong>750k Ft</strong>
                            </td>
                        </tr>
                    </tbody>
                </Table>
            </Accordion.Body>
        </Accordion.Item>
    );
};
