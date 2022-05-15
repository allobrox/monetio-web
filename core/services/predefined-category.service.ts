import { v4 as uuidv4 } from "uuid";
import { Category } from "../../model/entity/category.entity";

export function createPredefinedCategories(
    creation: number,
    groupId: string,
    walletId: string
): Category[] {
    const pdCat: Category[] = [];

    // expense
    pdCat.push({
        id: uuidv4(),
        createdAt: creation,
        groupId: groupId,
        modifiedAt: creation,
        name: "No category",
        type: "EXPENSE",
        walletId: walletId
    });
    pdCat.push({
        id: uuidv4(),
        createdAt: creation,
        groupId: groupId,
        modifiedAt: creation,
        name: "Food",
        type: "EXPENSE",
        walletId: walletId
    });
    pdCat.push({
        id: uuidv4(),
        createdAt: creation,
        groupId: groupId,
        modifiedAt: creation,
        name: "Bills",
        type: "EXPENSE",
        walletId: walletId
    });
    pdCat.push({
        id: uuidv4(),
        createdAt: creation,
        groupId: groupId,
        modifiedAt: creation,
        name: "Transportation",
        type: "EXPENSE",
        walletId: walletId
    });
    pdCat.push({
        id: uuidv4(),
        createdAt: creation,
        groupId: groupId,
        modifiedAt: creation,
        name: "Home deco",
        type: "EXPENSE",
        walletId: walletId
    });
    pdCat.push({
        id: uuidv4(),
        createdAt: creation,
        groupId: groupId,
        modifiedAt: creation,
        name: "Entertainment",
        type: "EXPENSE",
        walletId: walletId
    });
    pdCat.push({
        id: uuidv4(),
        createdAt: creation,
        groupId: groupId,
        modifiedAt: creation,
        name: "Shopping",
        type: "EXPENSE",
        walletId: walletId
    });
    pdCat.push({
        id: uuidv4(),
        createdAt: creation,
        groupId: groupId,
        modifiedAt: creation,
        name: "Clothing",
        type: "EXPENSE",
        walletId: walletId
    });
    pdCat.push({
        id: uuidv4(),
        createdAt: creation,
        groupId: groupId,
        modifiedAt: creation,
        name: "Insurance",
        type: "EXPENSE",
        walletId: walletId
    });
    pdCat.push({
        id: uuidv4(),
        createdAt: creation,
        groupId: groupId,
        modifiedAt: creation,
        name: "Tax",
        type: "EXPENSE",
        walletId: walletId
    });
    pdCat.push({
        id: uuidv4(),
        createdAt: creation,
        groupId: groupId,
        modifiedAt: creation,
        name: "Telephone",
        type: "EXPENSE",
        walletId: walletId
    });
    pdCat.push({
        id: uuidv4(),
        createdAt: creation,
        groupId: groupId,
        modifiedAt: creation,
        name: "Health",
        type: "EXPENSE",
        walletId: walletId
    });
    pdCat.push({
        id: uuidv4(),
        createdAt: creation,
        groupId: groupId,
        modifiedAt: creation,
        name: "Sport",
        type: "EXPENSE",
        walletId: walletId
    });
    pdCat.push({
        id: uuidv4(),
        createdAt: creation,
        groupId: groupId,
        modifiedAt: creation,
        name: "Baby",
        type: "EXPENSE",
        walletId: walletId
    });
    pdCat.push({
        id: uuidv4(),
        createdAt: creation,
        groupId: groupId,
        modifiedAt: creation,
        name: "Pet",
        type: "EXPENSE",
        walletId: walletId
    });
    pdCat.push({
        id: uuidv4(),
        createdAt: creation,
        groupId: groupId,
        modifiedAt: creation,
        name: "Beauty",
        type: "EXPENSE",
        walletId: walletId
    });
    pdCat.push({
        id: uuidv4(),
        createdAt: creation,
        groupId: groupId,
        modifiedAt: creation,
        name: "Electronics",
        type: "EXPENSE",
        walletId: walletId
    });
    pdCat.push({
        id: uuidv4(),
        createdAt: creation,
        groupId: groupId,
        modifiedAt: creation,
        name: "Gift",
        type: "EXPENSE",
        walletId: walletId
    });
    pdCat.push({
        id: uuidv4(),
        createdAt: creation,
        groupId: groupId,
        modifiedAt: creation,
        name: "Social",
        type: "EXPENSE",
        walletId: walletId
    });
    pdCat.push({
        id: uuidv4(),
        createdAt: creation,
        groupId: groupId,
        modifiedAt: creation,
        name: "Travel",
        type: "EXPENSE",
        walletId: walletId
    });
    pdCat.push({
        id: uuidv4(),
        createdAt: creation,
        groupId: groupId,
        modifiedAt: creation,
        name: "Education",
        type: "EXPENSE",
        walletId: walletId
    });
    pdCat.push({
        id: uuidv4(),
        createdAt: creation,
        groupId: groupId,
        modifiedAt: creation,
        name: "Book",
        type: "EXPENSE",
        walletId: walletId
    });
    pdCat.push({
        id: uuidv4(),
        createdAt: creation,
        groupId: groupId,
        modifiedAt: creation,
        name: "Office",
        type: "EXPENSE",
        walletId: walletId
    });
    pdCat.push({
        id: uuidv4(),
        createdAt: creation,
        groupId: groupId,
        modifiedAt: creation,
        name: "Medicine",
        type: "EXPENSE",
        walletId: walletId
    });
    pdCat.push({
        id: uuidv4(),
        createdAt: creation,
        groupId: groupId,
        modifiedAt: creation,
        name: "Banking",
        type: "EXPENSE",
        walletId: walletId
    });
    pdCat.push({
        id: uuidv4(),
        createdAt: creation,
        groupId: groupId,
        modifiedAt: creation,
        name: "Holiday",
        type: "EXPENSE",
        walletId: walletId
    });
    pdCat.push({
        id: uuidv4(),
        createdAt: creation,
        groupId: groupId,
        modifiedAt: creation,
        name: "Hairdresser",
        type: "EXPENSE",
        walletId: walletId
    });
    pdCat.push({
        id: uuidv4(),
        createdAt: creation,
        groupId: groupId,
        modifiedAt: creation,
        name: "Savings",
        type: "EXPENSE",
        walletId: walletId
    });
    pdCat.push({
        id: uuidv4(),
        createdAt: creation,
        groupId: groupId,
        modifiedAt: creation,
        name: "Savings",
        type: "EXPENSE",
        walletId: walletId
    });
    pdCat.push({
        id: uuidv4(),
        createdAt: creation,
        groupId: groupId,
        modifiedAt: creation,
        name: "Credit card",
        type: "EXPENSE",
        walletId: walletId
    });

    //income
    pdCat.push({
        id: uuidv4(),
        createdAt: creation,
        groupId: groupId,
        modifiedAt: creation,
        name: "No category",
        type: "INCOME",
        walletId: walletId
    });
    pdCat.push({
        id: uuidv4(),
        createdAt: creation,
        groupId: groupId,
        modifiedAt: creation,
        name: "Salary",
        type: "INCOME",
        walletId: walletId
    });
    pdCat.push({
        id: uuidv4(),
        createdAt: creation,
        groupId: groupId,
        modifiedAt: creation,
        name: "Dividends",
        type: "INCOME",
        walletId: walletId
    });
    pdCat.push({
        id: uuidv4(),
        createdAt: creation,
        groupId: groupId,
        modifiedAt: creation,
        name: "Investments",
        type: "INCOME",
        walletId: walletId
    });
    pdCat.push({
        id: uuidv4(),
        createdAt: creation,
        groupId: groupId,
        modifiedAt: creation,
        name: "Gift",
        type: "INCOME",
        walletId: walletId
    });
    pdCat.push({
        id: uuidv4(),
        createdAt: creation,
        groupId: groupId,
        modifiedAt: creation,
        name: "Gamble",
        type: "INCOME",
        walletId: walletId
    });
    return pdCat;
}
