import { Form } from "react-bootstrap";
import styles from "../../../styles/Plan.module.css";
import { CategorySlider } from "./CategorySlider";
import { PlannedIncome } from "./PlannedIncome";

export const PlanView = () => {
    return (
        <div className={styles.plan_container}>
            <Form>
                <PlannedIncome />
                <div className={styles.sliders}>
                    <CategorySlider
                        min={0}
                        max={1000000}
                        categoryId={"catId"}
                        categoryName={"Groceries"}
                    />
                    <CategorySlider
                        min={0}
                        max={1000000}
                        categoryId={"catId"}
                        categoryName={"Public transportation"}
                    />
                    <CategorySlider
                        min={0}
                        max={1000000}
                        categoryId={"catId"}
                        categoryName={"Rent"}
                    />
                    <CategorySlider
                        min={0}
                        max={1000000}
                        categoryId={"catId"}
                        categoryName={"Utilities"}
                    />
                    <CategorySlider
                        min={0}
                        max={1000000}
                        categoryId={"catId"}
                        categoryName={"Car"}
                    />
                    <CategorySlider
                        min={0}
                        max={1000000}
                        categoryId={"catId"}
                        categoryName={"Medicine"}
                    />
                </div>
            </Form>
        </div>
    );
};
