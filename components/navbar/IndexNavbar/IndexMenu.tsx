import styles from "../AppNavbar/AppNavbar.module.css";
import { MenuItem } from "../MenuItem";
import React from "react";

export const IndexMenu = () => {
    return (
        <div className={styles.menu}>
            <MenuItem iconName="Donation" />
            <MenuItem iconName="FAQ" />
            <MenuItem iconName="Login" />
        </div>
    );
};
