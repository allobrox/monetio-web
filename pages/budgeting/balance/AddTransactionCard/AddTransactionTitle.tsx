import styles from "../../../../styles/Balance.module.css";
import React from "react";

export const AddTransactionTitle = ({ title }: { title: string }) => {
    return <p className={styles.transaction_title}>{title}</p>;
};
