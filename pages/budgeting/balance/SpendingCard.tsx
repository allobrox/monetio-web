import styles from "../../../styles/Balance.module.css";
import { Fragment, useState } from "react";
import DownIcon from "../../../assets/chevron-down.svg";
import UpIcon from "../../../assets/chevron-up.svg";

export const SpendingCard = () => {
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
                            <p>SPENDING</p>
                            <UpIcon className={styles.icon} fill={"#dad7dc"} />
                        </div>
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
                </Fragment>
            )}
            {!isOpen && (
                <div
                    className={styles.category_table_header}
                    onClick={() => setIsOpen(!isOpen)}
                >
                    <div className={styles.card_header}>
                        <p>SPENDING</p>
                        <DownIcon className={styles.icon} fill={"#dad7dc"} />
                    </div>
                    <p>PLANNED: 270k Ft</p>
                    <p>SPENT: 266.65k Ft</p>
                </div>
            )}
        </div>
    );
};
