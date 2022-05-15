export interface Wallet {
    id?: string;
    createdAt?: number;
    groupId?: string;
    isActive?: boolean;
    issuerId?: string;
    modifiedAt?: number;
    name?: string;
}

export interface DatabaseWallet {
    id?: string;
    created_at?: number;
    group_id?: string;
    is_active?: boolean;
    issuer?: string;
    modified_at?: number;
    name?: string;
}

export function convertWallet(dbEntity: DatabaseWallet): Wallet {
    return {
        id: dbEntity.id,
        createdAt: dbEntity.created_at,
        groupId: dbEntity.group_id,
        isActive: dbEntity.is_active,
        issuerId: dbEntity.issuer,
        modifiedAt: dbEntity.modified_at,
        name: dbEntity.name
    };
}
