import styles from "../../../../styles/Balance.module.css";
import { IncomeCard } from "../IncomeCard/IncomeCard";
import { SpendingCard } from "../SpendingCard";
import { SavingsCard } from "../SavingsCard";

export const BalanceView = () => {
    return (
        <div className={styles.balance_view}>
            <div className={styles.balance_container}>
                <IncomeCard />
                <SpendingCard />
                <SavingsCard />
            </div>
            <div className={styles.transaction_container}></div>
        </div>
    );
};
