import { Pool, PoolClient, types } from "pg";

export const pool = new Pool({
    connectionString: process.env.DB_CONNECTION_STRING
});

types.setTypeParser(1700, function (val) {
    return parseFloat(val);
});

types.setTypeParser(20, function (val) {
    return parseInt(val);
});

export async function getClient(): Promise<PoolClient> {
    return pool.connect();
}
