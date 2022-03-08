import { useState } from "react";
import { Form } from "react-bootstrap";
import styles from "../../../styles/Plan.module.css";
import { CategorySlider } from "./CategorySlider";

export const PlanView = () => {
    const [incomeValue, setIncomeValue] = useState(0.0);
    const [incomeStringValue, setIncomeStringValue] = useState("0");

    function countInstances(string: string, word: string) {
        return string.split(word).length - 1;
    }

    function setIncome(newValue: string): void {
        if (newValue.endsWith(".")) {
            console.log(countInstances(newValue, "."));
            if (countInstances(newValue, ".") > 1) {
                const newString = newValue.slice(0, -1);
                console.log(`New string: ${newString}`);
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
        <div className={styles.plan_container}>
            <Form>
                <Form.Control
                    className={styles.plan_income_input}
                    value={incomeStringValue}
                    size={"sm"}
                    onChange={e => setIncome(e.target.value)}
                />
                <CategorySlider
                    min={0}
                    max={1000000}
                    categoryId={"catId"}
                    categoryName={"Groceries"}
                />
            </Form>
        </div>
    );
};
