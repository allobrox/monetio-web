import React, { useState } from "react";
import navStyles from "../../../../components/navbar/AppNavbar/AppNavbar.module.css";
import styles from "../../../../styles/Balance.module.css";
import { AddTransactionTitle } from "./AddTransactionTitle";
import { CategorySelector } from "./CategorySelector";

export const AddTransactionCard = () => {
    const [isOpen, setIsOpen] = useState(false);
    const [isSpending, setIsSpending] = useState(false);

    return (
        <div className={styles.transaction_container}>
            <div>
                <AddTransactionTitle
                    title={`Add ${isSpending ? "spending" : "income"}`}
                />
                <CategorySelector isSpending={isSpending} />
                <label htmlFor="amount">Amount</label>
                <input
                    className={styles.input_field}
                    type="number"
                    id="amount"
                    name="amount"
                    onKeyPress={event => {
                        if (!/\d*\.?\d*/.test(event.key)) {
                            event.preventDefault();
                        }
                        // TODO add logic to prevent 2nd dot and allow only 2 digits after dot
                    }}
                />
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
