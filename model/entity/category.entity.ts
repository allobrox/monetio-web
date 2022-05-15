export interface Category {
    id?: string;
    createdAt: number;
    groupId: string;
    modifiedAt: number;
    name: string;
    type: string;
    walletId: string;
}

export interface DatabaseCategory {
    id?: string;
    created_at: number;
    group_id: string;
    modified_at: number;
    name: string;
    type: string;
    wallet_id: string;
}

export function convertCategory(dbEntity: DatabaseCategory): Category {
    return {
        id: dbEntity.id,
        createdAt: dbEntity.created_at,
        groupId: dbEntity.group_id,
        modifiedAt: dbEntity.modified_at,
        name: dbEntity.name,
        type: dbEntity.type,
        walletId: dbEntity.wallet_id
    };
}
