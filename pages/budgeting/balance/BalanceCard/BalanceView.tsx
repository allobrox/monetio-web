import styles from "../../../../styles/Balance.module.css";
import { AddTransactionCard } from "../AddTransactionCard/AddTransactionCard";
import { Accordion } from "react-bootstrap";
import { IncomeAccordion } from "../IncomeCard/IncomeAccordion";
import { SpendingAccordion } from "../SpendingAccordion";
import { SavingsAccordion } from "../SavingsAccordion";
import { DebtAccordion } from "../DebtAccordion";
import { MonthSelector } from "../../../../components/MonthSelector";

export const BalanceView = () => {
    return (
        <div className={styles.balance_main}>
            <div className={styles.menu_item}>
                <MonthSelector />
            </div>

            <div className={styles.balance_view}>
                <div className={styles.balance_container}>
                    <Accordion defaultActiveKey="0">
                        <IncomeAccordion />
                        <SpendingAccordion />
                        <SavingsAccordion />
                        <DebtAccordion />
                    </Accordion>
                </div>
                <AddTransactionCard />
            </div>
        </div>
    );
};
