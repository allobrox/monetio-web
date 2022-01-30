import React from "react";
import { MenuItem } from "../MenuItem";
import styles from "./AppNavbar.module.css";

export const Menu = () => {
    return (
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
    );
};
