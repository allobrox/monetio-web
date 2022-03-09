import styles from "../../../styles/Plan.module.css";
import { Form } from "react-bootstrap";
import { useState } from "react";

export const PlannedIncome = () => {
    const [incomeValue, setIncomeValue] = useState(0.0);
    const [incomeStringValue, setIncomeStringValue] = useState("0");

    function countInstances(string: string, word: string) {
        return string.split(word).length - 1;
    }

    function setIncome(newValue: string): void {
        if (newValue.endsWith(".")) {
            if (countInstances(newValue, ".") > 1) {
                const newString = newValue.slice(0, -1);
                setIncomeStringValue(newString);
                setIncomeValue(Number(newString));
            } else {
                setIncomeStringValue(newValue);
                setIncomeValue(Number(newValue.slice(0, -1)));
            }
        } else {
            let numValue = Number(newValue);
            setIncomeValue(numValue);

            // TODO implement 1k for 1000 value displaying
            setIncomeStringValue(numValue.toString());
        }
    }

    return (
        <Form.Group className={styles.planned_income_group}>
            <Form.Label>Planned income</Form.Label>
            <Form.Control
                className={styles.plan_income_input}
                value={incomeStringValue}
                size={"sm"}
                onChange={e => setIncome(e.target.value)}
            />
        </Form.Group>
    );
};
