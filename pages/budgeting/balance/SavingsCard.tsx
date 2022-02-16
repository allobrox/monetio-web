import { Fragment, useState } from "react";
import styles from "../../../styles/Balance.module.css";
import UpIcon from "../../../assets/chevron-up.svg";
import DownIcon from "../../../assets/chevron-down.svg";
import AddIcon from "../../../assets/plus.svg";

export const SavingsCard = () => {
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
                            <p>SAVINGS</p>
                            <UpIcon className={styles.icon} fill={"#dad7dc"} />
                        </div>
                        <p>Balance</p>
                        <p>This month</p>
                    </div>
                    <div className={styles.category_table_row}>
                        <div className={styles.category}>
                            <p>New house</p>
                        </div>
                        <p>350k Ft</p>
                        <p>+50k Ft</p>
                    </div>
                    <div className={styles.category_table_row}>
                        <div className={styles.category}>
                            <p>College fund</p>
                        </div>
                        <p>510k Ft</p>
                        <p>+38k Ft</p>
                    </div>
                    <div className={styles.category_table_summary}>
                        <div className={styles.category}>
                            {/*<AddIcon className={styles.icon} fill={"#dad7dc"} />*/}
                            {/*<p>Add spending</p>*/}
                        </div>
                        <p>
                            <strong>860k Ft</strong>
                        </p>
                        <p>
                            <strong>+88k Ft</strong>
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
                        <p>SAVINGS</p>
                        <DownIcon className={styles.icon} fill={"#dad7dc"} />
                    </div>
                    <p>All: 860k Ft</p>
                    <p>This month: +88k Ft</p>
                </div>
            )}
        </div>
    );
};
