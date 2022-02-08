import styles from "../../../../styles/Balance.module.css";
import { IncomeCard } from "../IncomeCard/IncomeCard";

export const BalanceView = () => {
    return (
        <div className={styles.balance_view}>
            <div className={styles.balance_container}>
                <IncomeCard />

                <div className={styles.card}>
                    <div className={styles.category_table_container}>
                        <div className={styles.category_table_header}>
                            <p>EXPENSE</p>
                            <p>PLANNED</p>
                            <p>SPENT</p>
                        </div>

                        <div className={styles.category_table_row}>
                            <p>Rent</p>
                            <p>160k Ft</p>
                            <p>160k Ft</p>
                        </div>
                        <div className={styles.category_table_row}>
                            <p>Public transportation</p>
                            <p>15k Ft</p>
                            <p>16.43k Ft</p>
                        </div>
                        <div className={styles.category_table_row}>
                            <p>Food</p>
                            <p>85k Ft</p>
                            <p>82.92k Ft</p>
                        </div>
                        <div className={styles.category_table_row}>
                            <p>Medicine</p>
                            <p>10k Ft</p>
                            <p>7.3k Ft</p>
                        </div>
                        <div className={styles.category_table_summary}>
                            <p>Add spending</p>
                            <p>
                                <strong>270k Ft</strong>
                            </p>
                            <p>
                                <strong>266.65k Ft</strong>
                            </p>
                        </div>
                    </div>
                </div>
            </div>
            <div className={styles.transaction_container}></div>
        </div>
    );
};
