import React, { Fragment, useState } from "react";
import styles from "./AppNavbar.module.css";
import Ham from "../../../assets/bars.svg";
import { MenuItem } from "../MenuItem";

export const AppNavbar = () => {
    const [isOpen, setIsOpen] = useState(false);

    return (
        <Fragment>
            <div className={styles.navbar}>
                <button className={styles.navbar_button}>
                    Add transaction
                </button>
                <Ham
                    onClick={() => {
                        setIsOpen(!isOpen);
                    }}
                    className={styles.navbar_icon}
                    fill={"#dad7dc"}
                />
                {isOpen && (
                    <div className={styles.menu}>
                        <MenuItem iconName="Balance" />
                        <MenuItem iconName="Income" />
                        <MenuItem iconName="Expense" />
                        <MenuItem iconName="Savings" />
                        <MenuItem iconName="Debt" />
                        <MenuItem iconName="Planning" />
                        <MenuItem iconName="Settings" />
                        <MenuItem iconName="Log out" />
                    </div>
                )}
            </div>
        </Fragment>
    );
};
