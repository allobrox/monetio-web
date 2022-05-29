import { User } from "../../model/entity/user.entity";
import { get, set } from "../service/redis-cache.service";
import { Tedis } from "tedis";
import { redisClientOptions } from "../redis-client-options";

export async function getUserByEmail(email: string): Promise<User> {
    const client = new Tedis(redisClientOptions);
    const userString = await client.get(`user:${email}`);
    const user: User = JSON.parse(String(userString));
    client.close();
    return user;
}

export async function putUserByEmail(user: User, email: string): Promise<void> {
    await set(`user:${email}`, user);
}
