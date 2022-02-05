import styles from "../../../styles/Balance.module.css";
import { Balances } from "./Balances";

export const BalanceCard = () => {
    return (
        <div className={styles.card}>
            <Balances />
            <div className={styles.to_wrapper}>
                <div className={styles.to}>To savings: 50k Ft</div>
                <div className={styles.to}>To decrease debt: 75k Ft</div>
            </div>
        </div>
    );
};
