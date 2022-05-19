import { User } from "../entity/user.entity";
import { WalletRole } from "../entity/wallet-role.entity";
import { Claims } from "./claims.dto";

export interface ValidTokenMetadata {
    claims?: Claims;
    groupId: string;
    token?: string;
    user: User;
    validWalletIds: string[];
    walletRoles: WalletRole[];
}
