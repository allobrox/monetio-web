import * as redis from "redis";
import { promisify } from "util";

export async function get<T>(key: string): Promise<T> {
    const client = redis.createClient({
        url: `redis://:${process.env.REDIS_PASSWORD}@${process.env.REDIS_HOST}:${process.env.REDIS_PORT}`
    });
    client.connect();
    const getAsync = promisify(client.get).bind(client);
    const async = await getAsync(key);
    return JSON.parse(async);
}

export async function set(key: string, value: any) {
    const client = redis.createClient({
        url: `redis://:${process.env.REDIS_PASSWORD}@${process.env.REDIS_HOST}:${process.env.REDIS_PORT}`
    });
    client.connect();
    client.set(key, JSON.stringify(value));
}
