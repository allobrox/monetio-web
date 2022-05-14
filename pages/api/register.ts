import type { NextApiRequest, NextApiResponse } from "next";
import { SMTPClient } from "emailjs";
import { v4 as uuidv4 } from "uuid";
import { createFinancialGroup } from "../../repository/financial-group.repository.query";
import { FinancialGroup } from "../../model/entity/finalcial-group.entity";
import { getUnixTime } from "date-fns";
import { getClient } from "../../core/db-client";

export default async function handler(
    req: NextApiRequest,
    res: NextApiResponse
) {
    const databaseClient = await getClient();
    const financialGroupId: string = uuidv4();
    const unixNow = getUnixTime(new Date());
    const financialGroup: FinancialGroup = {
        id: financialGroupId,
        defaultCurrency: "EUR",
        lastModified: unixNow
    };
    console.log("Financial group created");
    try {
        await databaseClient.query("BEGIN");
        const financialGroupPromise = databaseClient.query(
            createFinancialGroup(financialGroup)
        );
        console.log("Financial group query created");
        await Promise.all([financialGroupPromise]);
        console.log("Financial group query executed");
        await databaseClient.query("END");
        console.log("Success");
    } catch (e) {
        databaseClient.query("ROLLBACK");
        console.log("Rollback");
    } finally {
        databaseClient.release();
        console.log("Releasing client");
    }

    const userId: string = uuidv4();
    //TODO save user

    const mailClient = new SMTPClient({
        user: process.env.EMAIL_USER,
        password: process.env.EMAIL_PASSWORD,
        host: process.env.EMAIL_HOST,
        ssl: true
    });

    try {
        const message = await mailClient.sendAsync({
            text: "Welcome",
            from: "monetio <info@monetio.app>",
            to: `<${req.body.email}>`,
            subject: "Welcome to monetio",
            attachment: [
                {
                    //TODO create verify API
                    data: `<html><p>Thanks for registering to monetio!</p><br><p>Please verify your email address!</p><p>Thank you!</p><br><br><a href="http://localhost:3000/api/verify/${userId}" target="_blank">Verify Email Now</a></html>`,
                    alternative: true
                }
            ]
        });
        console.log(`Welcome mail sent to ${req.body.email}`);
    } catch (err) {
        console.error(err);
    }

    res.status(200).json({});
}
