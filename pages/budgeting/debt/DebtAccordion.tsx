import { Accordion, Table } from "react-bootstrap";

export const DebtAccordion = () => {
    return (
        <Accordion.Item eventKey={"0"}>
            <Accordion.Header>
                House mortgage - 6.55M - 115k paid
            </Accordion.Header>
            <Accordion.Body>
                <Table striped hover>
                    <thead>
                        <tr>
                            <th>Date</th>
                            <th>Paid</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td>2022.04.12</td>
                            <td>115k</td>
                        </tr>
                    </tbody>
                </Table>
            </Accordion.Body>
        </Accordion.Item>
    );
};
