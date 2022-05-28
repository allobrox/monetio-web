import { getUnixTime } from "date-fns";
import { NextApiRequest, NextApiResponse } from "next";
import { getClient } from "../../core/db-client";
import { setUserVerified } from "../../repository/user.repository.query";

export default async function handler(
    req: NextApiRequest,
    res: NextApiResponse
) {
    const userId: string = req.body.userId;
    const databaseClient = await getClient();
    const unixNow = getUnixTime(new Date());

    try {
        await databaseClient.query("BEGIN");
        await databaseClient.query(setUserVerified(userId, unixNow));
        await databaseClient.query("END");
    } catch (e) {
        console.log(e);
        databaseClient.query("ROLLBACK");
    } finally {
        databaseClient.release();
    }

    res.status(200).json({});
}
