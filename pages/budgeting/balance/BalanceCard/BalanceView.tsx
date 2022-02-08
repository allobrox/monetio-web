import styles from "../../../../styles/Balance.module.css";
import { IncomeCard } from "../IncomeCard/IncomeCard";
import { SpendingCard } from "../SpendingCard";

export const BalanceView = () => {
    return (
        <div className={styles.balance_view}>
            <div className={styles.balance_container}>
                <IncomeCard />
                <SpendingCard />
            </div>
            <div className={styles.transaction_container}></div>
        </div>
    );
};
