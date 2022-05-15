import { getByName, UserRole } from "../enum/user-role";

export interface WalletRole {
    id?: string;
    userId?: string;
    userRole: UserRole;
    walletId?: string;
}

export interface DatabaseWalletRole {
    id?: string;
    user_id?: string;
    user_role: number;
    wallet_id?: string;
}

export function convertWalletRole(dbEntity: DatabaseWalletRole): WalletRole {
    return {
        id: dbEntity.id,
        userId: dbEntity.id,
        userRole: getByName(UserRole[dbEntity.user_role]),
        walletId: dbEntity.wallet_id
    };
}
