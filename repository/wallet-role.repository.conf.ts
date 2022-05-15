import { QueryConfig } from "pg";
import { WalletRole } from "../model/entity/wallet-role.entity";

export function createWalletRole(entity: WalletRole): QueryConfig {
    return {
        name: "INSERT wallet-role",
        text: "INSERT INTO wallet_role VALUES($1,$2,$3,$4)",
        values: [
            entity.id,
            entity.userId,
            entity.walletId,
            entity.userRole.valueOf()
        ]
    };
}
