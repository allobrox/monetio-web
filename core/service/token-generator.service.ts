import { Claims } from "../../model/dto/claims.dto";
import * as jwt from "jsonwebtoken";

export function generate(claims: Claims): string {
    return jwt.sign(
        {
            exp: claims.expiry,
            dcc: claims.defaultCurrencyCode,
            gid: claims.groupId,
            sub: claims.sub,
            ws: claims.wallets
        },
        String(process.env.JWT_PRIVATE_KEY),
        { algorithm: "HS256" }
    );
}
