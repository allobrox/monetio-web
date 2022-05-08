import type { NextApiRequest, NextApiResponse } from "next";
import { SMTPClient } from "emailjs";
import { v4 as uuidv4 } from "uuid";

export default async function handler(
    req: NextApiRequest,
    res: NextApiResponse
) {
    const userId: string = uuidv4();
    //TODO save user

    const client = new SMTPClient({
        user: process.env.EMAIL_USER,
        password: process.env.EMAIL_PASSWORD,
        host: process.env.EMAIL_HOST,
        ssl: true
    });

    try {
        const message = await client.sendAsync({
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
