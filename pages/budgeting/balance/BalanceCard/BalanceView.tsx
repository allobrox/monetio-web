import styles from "../../../../styles/Balance.module.css";
import { AddTransactionCard } from "../AddTransactionCard/AddTransactionCard";
import { Accordion } from "react-bootstrap";
import { IncomeAccordion } from "../IncomeCard/IncomeAccordion";
import { SpendingAccordion } from "../SpendingAccordion";
import { BalanceSavingsAccordion } from "../BalanceSavingsAccordion";
import { BalanceDebtAccordion } from "../BalanceDebtAccordion";
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
                        <BalanceSavingsAccordion />
                        <BalanceDebtAccordion />
                    </Accordion>
                </div>
                <AddTransactionCard />
            </div>
        </div>
    );
};
