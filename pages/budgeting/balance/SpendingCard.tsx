import styles from "../../../styles/Balance.module.css";
import { Fragment, useState } from "react";
import DownIcon from "../../../assets/chevron-down.svg";
import UpIcon from "../../../assets/chevron-up.svg";
import HousingIcon from "../../../assets/house.svg";
import TransportationIcon from "../../../assets/car-bus.svg";
import FoodIcon from "../../../assets/utensils.svg";
import MedicineIcon from "../../../assets/prescription-bottle.svg";
import AddIcon from "../../../assets/plus.svg";

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
                        <div className={styles.category}>
                            <HousingIcon
                                className={styles.icon}
                                fill={"#dad7dc"}
                            />
                            <p>Rent</p>
                        </div>
                        <p>160k Ft</p>
                        <p>160k Ft</p>
                    </div>
                    <div className={styles.category_table_row}>
                        <div className={styles.category}>
                            <TransportationIcon
                                className={styles.icon}
                                fill={"#dad7dc"}
                            />
                            <p>Public transportation</p>
                        </div>
                        <p>15k Ft</p>
                        <p>16.43k Ft</p>
                    </div>
                    <div className={styles.category_table_row}>
                        <div className={styles.category}>
                            <FoodIcon
                                className={styles.icon}
                                fill={"#dad7dc"}
                            />
                            <p>Food</p>
                        </div>
                        <p>85k Ft</p>
                        <p>82.92k Ft</p>
                    </div>
                    <div className={styles.category_table_row}>
                        <div className={styles.category}>
                            <MedicineIcon
                                className={styles.icon}
                                fill={"#dad7dc"}
                            />
                            <p>Medicine</p>
                        </div>
                        <p>10k Ft</p>
                        <p>7.3k Ft</p>
                    </div>
                    <div className={styles.category_table_summary}>
                        <div className={styles.category}>
                            <AddIcon className={styles.icon} fill={"#dad7dc"} />
                            <p>Add spending</p>
                        </div>
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
                    <p>PLANNED: 270.00k Ft</p>
                    <p>SPENT: 266.65k Ft</p>
                </div>
            )}
        </div>
    );
};
