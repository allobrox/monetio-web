import styles from "../../../styles/Balance.module.css";
import { Accordion } from "react-bootstrap";
import { SavingsAccordion } from "./SavingsAccordion";
import { AddSavingsCard } from "./AddSavingsCard";

export const SavingsView = () => {
    return (
        <div className={styles.balance_main}>
            <div className={styles.balance_view}>
                <div className={styles.balance_container}>
                    <Accordion defaultActiveKey="0">
                        <SavingsAccordion />
                    </Accordion>
                </div>
                <AddSavingsCard />
            </div>
        </div>
    );
};
