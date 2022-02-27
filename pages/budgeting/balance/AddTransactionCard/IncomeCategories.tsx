import React, { Fragment } from "react";

export const IncomeCategories = () => {
    return (
        <Fragment>
            <option>Select income</option>
            <option value="1">Salary</option>
            <option value="2">Dividend</option>
            <option value="3">Gift</option>
            <option value="4">Gambling</option>
        </Fragment>
    );
};
