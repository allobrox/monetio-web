import styles from "../../../../styles/Balance.module.css";
import { BalanceCard } from "./BalanceCard";
import { IncomeCard } from "../IncomeCard/IncomeCard";

export const BalanceView = () => {
    return (
        <div className={styles.balance_view}>
            <BalanceCard />
            <IncomeCard />
            <div className={styles.card}>Expense</div>
        </div>
    );
};
