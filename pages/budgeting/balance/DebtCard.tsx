import { Fragment, useState } from "react";
import styles from "../../../styles/Balance.module.css";
import UpIcon from "../../../assets/chevron-up.svg";
import DownIcon from "../../../assets/chevron-down.svg";

export const DebtCard = () => {
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
                            <p>DEBT</p>
                            <UpIcon className={styles.icon} fill={"#dad7dc"} />
                        </div>
                        <p>Balance</p>
                        <p>This month</p>
                    </div>
                    <div className={styles.category_table_row}>
                        <div className={styles.category}>
                            <p>House mortgage</p>
                        </div>
                        <p>4.5M Ft</p>
                        <p>-75k Ft</p>
                    </div>
                    <div className={styles.category_table_row}>
                        <div className={styles.category}>
                            <p>Student loan</p>
                        </div>
                        <p>26k Ft</p>
                        <p>-15k Ft</p>
                    </div>
                    <div className={styles.category_table_summary}>
                        <div className={styles.category}></div>
                        <p>
                            <strong>4.52M Ft</strong>
                        </p>
                        <p>
                            <strong>-90k Ft</strong>
                        </p>
                    </div>
                </Fragment>
            )}
            {!isOpen && (
                <div
                    className={styles.category_table_header}
                    onClick={() => setIsOpen(!isOpen)}
                >
                    <div className={styles.card_header}>
                        <p>DEBT</p>
                        <DownIcon className={styles.icon} fill={"#dad7dc"} />
                    </div>
                    <p>All: 4.52M Ft</p>
                    <p>This month: -90k Ft</p>
                </div>
            )}
        </div>
    );
};
