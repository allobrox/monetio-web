import { ValidTokenMetadata } from "../../model/dto/valid-token-metadata.dto";
import { get, set } from "../services/redis-cache.service";

export async function getTokenMetadataByUserId(
    userId: string
): Promise<ValidTokenMetadata> {
    return await get<ValidTokenMetadata>(`tokenMeta:${userId}`);
}

export async function putTokenMetadataByUserId(
    tokenMeta: ValidTokenMetadata,
    userId: string
): Promise<void> {
    await set(`tokenMeta:${userId}`, tokenMeta);
}
