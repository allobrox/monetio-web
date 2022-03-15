import styles from "../../../styles/Balance.module.css";
import { Accordion } from "react-bootstrap";
import { DebtAccordion } from "./DebtAccordion";
import { AddDebtCard } from "./AddDebtCard";

export const DebtView = () => {
    return (
        <div className={styles.balance_main}>
            <div className={styles.balance_view}>
                <div className={styles.balance_container}>
                    <Accordion defaultActiveKey="0">
                        <DebtAccordion />
                    </Accordion>
                </div>
                <AddDebtCard />
            </div>
        </div>
    );
};
