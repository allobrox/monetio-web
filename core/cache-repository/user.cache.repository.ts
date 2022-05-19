import { User } from "../../model/entity/user.entity";
import { get, set } from "../service/redis-cache.service";

export async function getUserByEmail(email: string): Promise<User> {
    return await get(`user:${email}`);
}

export async function putUserByEmail(user: User, email: string): Promise<void> {
    await set(`user:${email}`, user);
}
