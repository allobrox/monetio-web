import React from "react";
import styles from "../../../../styles/Balance.module.css";
import { CategoryListElement } from "../../../../model/ViewModel/CategoryListElement";

export const CategorySelector = ({ isSpending }: { isSpending: boolean }) => {
    // TODO get list from store
    const incomeCategories: CategoryListElement[] = [
        { id: "i1", name: "Salary" },
        { id: "i2", name: "Dividend" },
        { id: "i3", name: "Gift" }
    ];

    const spendingCategories: CategoryListElement[] = [
        { id: "s1", name: "Rent" },
        { id: "s2", name: "Public transportation" },
        { id: "s3", name: "Food" },
        { id: "s4", name: "Medicine" },
        { id: "s5", name: "Entertainment" }
    ];

    return (
        <div className={styles.category_selector}>
            <input
                list="categories"
                type="text"
                id="category"
                name="category"
                placeholder={"Select a category..."}
            />

            <datalist id="categories">
                {isSpending &&
                    incomeCategories.map(cat => <option value={cat.name} />)}

                {!isSpending &&
                    spendingCategories.map(cat => <option value={cat.name} />)}
            </datalist>
        </div>
    );
};
