import styles from "../../../styles/Balance.module.css";
import { BalanceCard } from "./BalanceCard";

export const BalanceView = () => {
    return (
        <div className={styles.balance_view}>
            <BalanceCard />
            <div className={styles.card}>Income</div>
            <div className={styles.card}>Expense</div>
        </div>
    );
};
