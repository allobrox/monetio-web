import { MenuItem } from "../MenuItem";
import React from "react";
import styles from "../AppNavbar/AppNavbar.module.css";

export const IndexDesktopMenu = () => {
    return (
        <div className={styles.desktop_menu}>
            {/*TODO might require reorder*/}
            <div className={styles.desktop_menu_part}>
                <MenuItem iconName="Donation" />
                <MenuItem iconName="FAQ" />
            </div>
            <div className={styles.desktop_menu_part}>
                <MenuItem iconName="Login" />
            </div>
        </div>
    );
};
