import { Accordion, Table } from "react-bootstrap";

export const SavingsAccordion = () => {
    return (
        <Accordion.Item eventKey={"0"}>
            <Accordion.Header>Heating renovation - 1.5M</Accordion.Header>
            <Accordion.Body>
                <Table striped hover>
                    <thead>
                        <tr>
                            <th>Date</th>
                            <th>Added</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td>2021.01.12</td>
                            <td>100k</td>
                        </tr>
                        <tr>
                            <td>2021.02.11</td>
                            <td>100k</td>
                        </tr>
                        <tr>
                            <td>2021.03.11</td>
                            <td>100k</td>
                        </tr>
                        <tr>
                            <td>2021.04.12</td>
                            <td>100k</td>
                        </tr>
                        <tr>
                            <td>2021.05.11</td>
                            <td>100k</td>
                        </tr>
                        <tr>
                            <td>2021.06.11</td>
                            <td>100k</td>
                        </tr>
                        <tr>
                            <td>2021.07.11</td>
                            <td>100k</td>
                        </tr>
                        <tr>
                            <td>2021.08.11</td>
                            <td>100k</td>
                        </tr>
                        <tr>
                            <td>2021.09.11</td>
                            <td>100k</td>
                        </tr>
                        <tr>
                            <td>2021.10.11</td>
                            <td>100k</td>
                        </tr>
                        <tr>
                            <td>2021.11.11</td>
                            <td>100k</td>
                        </tr>
                        <tr>
                            <td>2021.12.11</td>
                            <td>100k</td>
                        </tr>
                        <tr>
                            <td>2022.01.11</td>
                            <td>100k</td>
                        </tr>
                        <tr>
                            <td>2022.02.11</td>
                            <td>100k</td>
                        </tr>
                        <tr>
                            <td>2022.03.11</td>
                            <td>100k</td>
                        </tr>
                    </tbody>
                </Table>
            </Accordion.Body>
        </Accordion.Item>
    );
};