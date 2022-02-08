import styles from "../../../../styles/Balance.module.css";
import { Fragment, useState } from "react";
import DownIcon from "../../../../assets/chevron-down.svg";
import UpIcon from "../../../../assets/chevron-up.svg";

export const IncomeCard = () => {
    const [isOpen, setIsOpen] = useState(false);

    return (
        <div className={styles.card}>
            {isOpen && (
                <Fragment>
                    <div
                        className={styles.category_table_header}
                        onClick={() => setIsOpen(!isOpen)}
                    >
                        <div className={styles.card_header}>
                            <p>INCOME</p>
                            <UpIcon className={styles.icon} fill={"#dad7dc"} />
                        </div>
                        <p>PLANNED</p>
                        <p>RECEIVED</p>
                    </div>
                    <div className={styles.category_table_container}>
                        <div className={styles.category_table_row}>
                            <p>Salary</p>
                            <p>500k Ft</p>
                            <p>250k Ft</p>
                        </div>
                        <div className={styles.category_table_row}>
                            <p>Salary</p>
                            <p>500k Ft</p>
                            <p>500k Ft</p>
                        </div>
                        <div className={styles.category_table_summary}>
                            <p>Add income</p>
                            <p>
                                <strong>1M Ft</strong>
                            </p>
                            <p>
                                <strong>750k Ft</strong>
                            </p>
                        </div>
                    </div>
                </Fragment>
            )}
            {!isOpen && (
                <div
                    className={styles.category_table_header}
                    onClick={() => setIsOpen(!isOpen)}
                >
                    <div className={styles.card_header}>
                        <p>INCOME</p>
                        <DownIcon className={styles.icon} fill={"#dad7dc"} />
                    </div>
                    <p>PLANNED: 1M Ft</p>
                    <p>RECEIVED: 750k Ft</p>
                </div>
            )}
        </div>
    );
};
