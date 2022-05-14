export interface FinancialGroup {
    id?: string;
    defaultCurrency?: string;
    lastModified?: number;
}

export interface DatabaseFinancialGroup {
    id?: string;
    dcc?: string;
    modified_at?: number;
}

export function convertFinancialGroup(
    dbEntity: DatabaseFinancialGroup
): FinancialGroup {
    return {
        id: dbEntity.id,
        defaultCurrency: dbEntity.dcc,
        lastModified: dbEntity.modified_at
    };
}
