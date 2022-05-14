export interface User {
    id?: string;
    accountType?: string;
    createdAt?: number;
    email?: string;
    groupId?: string;
    modifiedAt?: number;
    otp?: string;
    password?: string;
    verificationSent?: boolean;
    verified?: boolean;
}

export interface DatabaseUser {
    id: string;
    account_type: string;
    created_at: number;
    email: string;
    group_id: string;
    modified_at: number;
    otp: string;
    password: string;
    v_sent: boolean;
    verified: boolean;
}

export function convertUser(dbEntity: DatabaseUser): User {
    return {
        id: dbEntity.id,
        accountType: dbEntity.account_type,
        createdAt: dbEntity.created_at,
        email: dbEntity.email,
        groupId: dbEntity.group_id,
        modifiedAt: dbEntity.modified_at,
        otp: dbEntity.otp,
        password: dbEntity.password,
        verificationSent: dbEntity.v_sent,
        verified: dbEntity.verified
    };
}
