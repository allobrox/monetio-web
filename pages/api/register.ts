import type { NextApiRequest, NextApiResponse } from "next";
import { SMTPClient } from "emailjs";
import { v4 as uuidv4 } from "uuid";
import { createFinancialGroup } from "../../repository/financial-group.repository.query";
import { FinancialGroup } from "../../model/entity/finalcial-group.entity";
import { getUnixTime } from "date-fns";
import { getClient } from "../../core/db-client";
import { User } from "../../model/entity/user.entity";
import { hashPassword } from "../../core/services/password-hash.service";
import { createUser } from "../../repository/user.repository.query";
import { Wallet } from "../../model/entity/wallet.entity";
import { createWallet } from "../../repository/wallet.repository.query";
import { WalletRole } from "../../model/entity/wallet-role.entity";
import { UserRole } from "../../model/enum/user-role";
import { createWalletRole } from "../../repository/wallet-role.repository.conf";

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
    const userId: string = uuidv4();
    const user: User = {
        createdAt: unixNow,
        email: req.body.email,
        groupId: financialGroupId,
        id: userId,
        modifiedAt: unixNow,
        password: hashPassword(req.body.password)
    };
    const walletId: string = uuidv4();
    const wallet: Wallet = {
        id: walletId,
        createdAt: unixNow,
        groupId: financialGroupId,
        isActive: true,
        issuerId: userId,
        modifiedAt: unixNow,
        name: "Main"
    };
    const walletRole: WalletRole = {
        id: uuidv4(),
        userId: userId,
        userRole: UserRole.ADMIN,
        walletId: walletId
    };
    try {
        await databaseClient.query("BEGIN");
        const financialGroupPromise = databaseClient.query(
            createFinancialGroup(financialGroup)
        );
        const userPromise = databaseClient.query(createUser(user));
        const walletPromise = databaseClient.query(createWallet(wallet));
        const walletRolePromise = databaseClient.query(
            createWalletRole(walletRole)
        );
        await Promise.all([
            financialGroupPromise,
            userPromise,
            walletPromise,
            walletRolePromise
        ]);
        await databaseClient.query("END");
    } catch (e) {
        databaseClient.query("ROLLBACK");
    } finally {
        databaseClient.release();
    }

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
