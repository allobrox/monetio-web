import * as crypto from "crypto-js";

export function hashPassword(password: string): string {
    const hash = crypto
        .HmacSHA256(password, String(process.env.SALT))
        .toString();

    return hash;
}
