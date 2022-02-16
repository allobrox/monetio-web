import styles from "../../../../styles/Balance.module.css";
import { IncomeCard } from "../IncomeCard/IncomeCard";
import { SpendingCard } from "../SpendingCard";
import { SavingsCard } from "../SavingsCard";
import { DebtCard } from "../DebtCard";
import { AddTransactionCard } from "../AddTransactionCard";

export const BalanceView = () => {
    return (
        <div className={styles.balance_view}>
            <div className={styles.balance_container}>
                <IncomeCard />
                <SpendingCard />
                <SavingsCard />
                <DebtCard />
            </div>
            <AddTransactionCard />
        </div>
    );
};
