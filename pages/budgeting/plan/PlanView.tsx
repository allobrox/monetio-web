import { useState } from "react";
import { Form } from "react-bootstrap";
import styles from "../../../styles/Plan.module.css";
import { CategorySlider } from "./CategorySlider";

export const PlanView = () => {
    const [value, setValue] = useState(0);

    return (
        <div className={styles.plan_container}>
            <Form>
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
