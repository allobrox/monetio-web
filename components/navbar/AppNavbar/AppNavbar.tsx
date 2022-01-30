import React, { Fragment, useState } from "react";
import styles from "./AppNavbar.module.css";
import Ham from "../../../assets/bars.svg";
import { DesktopMenu } from "./DesktopMenu";
import { Menu } from "./Menu";

export const AppNavbar = () => {
    const [isOpen, setIsOpen] = useState(false);

    function onTransactionAdd(): void {
        alert("TODO implement");
    }

    return (
        <Fragment>
            <div className={styles.navbar}>
                <button
                    className={styles.navbar_button}
                    onClick={() => onTransactionAdd()}
                >
                    Add transaction
                </button>
                <Ham
                    onClick={() => {
                        setIsOpen(!isOpen);
                    }}
                    className={styles.navbar_icon}
                    fill={"#dad7dc"}
                />
                <DesktopMenu />
                {isOpen && <Menu />}
            </div>
        </Fragment>
    );
};
