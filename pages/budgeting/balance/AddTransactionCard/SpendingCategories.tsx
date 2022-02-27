import React, { Fragment } from "react";

export const SpendingCategories = () => {
    return (
        <Fragment>
            <option>Select spending</option>
            <option value="1">Rent</option>
            <option value="2">Medicine</option>
            <option value="3">Public transportation</option>
            <option value="4">Cats</option>
        </Fragment>
    );
};
