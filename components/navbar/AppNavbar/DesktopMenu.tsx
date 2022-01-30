import { MenuItem } from "../MenuItem";
import React from "react";
import styles from "./AppNavbar.module.css";

export const DesktopMenu = () => {
    return (
        <div className={styles.desktop_menu}>
            <div className={styles.desktop_menu_part}>
                <MenuItem iconName="Balance" />
                <MenuItem iconName="Income" />
                <MenuItem iconName="Expense" />
                <MenuItem iconName="Savings" />
                <MenuItem iconName="Debt" />
                <MenuItem iconName="Planning" />
            </div>
            <div className={styles.desktop_menu_part}>
                <MenuItem iconName="Settings" />
                <MenuItem iconName="Log out" />
            </div>
        </div>
    );
};
