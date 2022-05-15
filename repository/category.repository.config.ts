import { QueryConfig } from "pg";
import { Category } from "../model/entity/category.entity";

export function createCategories(categories: Category[]): QueryConfig {
    let queryText = "INSERT INTO category VALUES";
    const values = [];
    for (let i = 0; i < categories.length; i++) {
        const objectCount = i * 7;
        queryText = queryText.concat(
            `($${objectCount + 1},$${objectCount + 2},$${objectCount + 3},
                $${objectCount + 4},$${objectCount + 5},$${objectCount + 6},$${
                objectCount + 7}),`
        );
        const category = categories[i];
        values.push(
            category.id,
            category.name,
            category.type,
            category.groupId,
            category.walletId,
            category.createdAt,
            category.modifiedAt
        );
    }
    queryText = queryText.slice(0, -1);
    queryText = queryText.concat(";");

    return { name: "INSERT categories", text: queryText, values: values };
}
