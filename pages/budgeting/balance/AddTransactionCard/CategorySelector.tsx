import React from "react";
import styles from "../../../../styles/Balance.module.css";

export const CategorySelector = () => {
    return (
        <div className={styles.category_selector}>
            <input
                list="browsers"
                type="text"
                id="category"
                name="category"
                placeholder={"Select a category..."}
            />

            <datalist id="browsers">
                <option value={"Salary"} />
                <option value="Firefox" />
                <option value="Chrome" />
                <option value="Opera" />
                <option value="Safari" />
            </datalist>
        </div>
    );
};
