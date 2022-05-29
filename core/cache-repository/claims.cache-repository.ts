import { Claims } from "../../model/dto/claims.dto";
import { get, set } from "../service/redis-cache.service";
import { Tedis } from "tedis";
import { redisClientOptions } from "../redis-client-options";

export async function getClaimsByEmail(email: string): Promise<Claims> {
    return await get(`claims:${email}`);
}

export async function getClaimsByUserId(userId: string): Promise<Claims> {
    const client = new Tedis(redisClientOptions);
    const claimsString = await client.get(`claims:${userId}`);
    client.close();
    return JSON.parse(String(claimsString));
}

export async function putClaimsByEmail(
    claims: Claims,
    email: string
): Promise<void> {
    await set(`claims:${email}`, claims);
}

export async function putClaimsByUserId(
    claims: Claims,
    userId: string
): Promise<void> {
    await set(`claims:${userId}`, claims);
}
