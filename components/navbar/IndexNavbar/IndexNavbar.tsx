import React, { Fragment, useState } from "react";
import styles from "../AppNavbar/AppNavbar.module.css";
import Ham from "../../../assets/bars.svg";
import { IndexMenu } from "./IndexMenu";
import { IndexDesktopMenu } from "./IndexDesktopMenu";

export function IndexNavbar() {
    const [isOpen, setIsOpen] = useState(false);

    return (
        <Fragment>
            <div className={styles.navbar}>
                <Ham
                    onClick={() => {
                        setIsOpen(!isOpen);
                    }}
                    className={styles.navbar_icon}
                    fill={"#dad7dc"}
                />
                <IndexDesktopMenu />
                {isOpen && <IndexMenu />}
            </div>
        </Fragment>
    );
}
