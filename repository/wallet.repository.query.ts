import { QueryConfig } from "pg";
import { Wallet } from "../model/entity/wallet.entity";

export function createWallet(entity: Wallet): QueryConfig {
    return {
        name: "INSERT wallet",
        text: "INSERT INTO wallet VALUES($1,$2,$3,$4,$5,$6,$7)",
        values: [
            entity.id,
            entity.name,
            entity.groupId,
            entity.isActive,
            entity.issuerId,
            entity.createdAt,
            entity.modifiedAt
        ]
    };
}
