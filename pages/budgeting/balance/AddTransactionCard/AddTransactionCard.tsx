import React, { useState } from "react";
import navStyles from "../../../../components/navbar/AppNavbar/AppNavbar.module.css";
import styles from "../../../../styles/Balance.module.css";
import { AddTransactionTitle } from "./AddTransactionTitle";

export const AddTransactionCard = () => {
    const [isOpen, setIsOpen] = useState(false);
    const [isSpending, setIsSpending] = useState(false);

    return (
        <div className={styles.transaction_container}>
            <div>
                <AddTransactionTitle
                    title={`Add ${isSpending ? "spending" : "income"}`}
                />
                <p>Category selector</p>
                <p>Amount</p>
                <p>Currency</p>
                <p>Memo</p>
                <p>Day</p>
            </div>
            <div className={styles.transaction_button_container}>
                <button
                    className={navStyles.navbar_button}
                    onClick={() => alert("TODO implement!")}
                >
                    Clear
                </button>
                <button
                    className={navStyles.navbar_button}
                    onClick={() => alert("TODO implement!")}
                >
                    Split
                </button>
                <button
                    className={navStyles.navbar_button}
                    onClick={() => alert("TODO implement!")}
                >
                    Save
                </button>
            </div>
        </div>
    );
};