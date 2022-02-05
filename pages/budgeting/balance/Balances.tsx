import styles from "../../../styles/Balance.module.css";
import { BalanceElement } from "./BalanceElement";

export const Balances = () => {
    return (
        <div className={styles.balance_card}>
            <BalanceElement
                amount={"500k"}
                className={styles.income_balance}
                currency={"Ft"}
                label={"Income"}
            />
            <BalanceElement
                amount={"450k"}
                className={styles.expense_balance}
                currency={"Ft"}
                label={"Expense"}
            />
            <BalanceElement
                amount={"5.3M"}
                className={styles.debt_balance}
                currency={"Ft"}
                label={"Debt"}
            />
            <BalanceElement
                amount={"531k"}
                className={styles.savings_balance}
                currency={"Ft"}
                label={"Savings"}
            />
        </div>
    );
};
