import styles from "../../../../styles/Balance.module.css";
import { PieChart } from "./PieChart";

export const IncomeCard = () => {
    return (
        <div className={styles.card}>
            <PieChart />
        </div>
    );
};
