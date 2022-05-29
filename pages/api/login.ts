import { NextApiRequest, NextApiResponse } from "next";
import { getClaimsByUserId } from "../../core/cache-repository/claims.cache-repository";
import { getUserByEmail } from "../../core/cache-repository/user.cache.repository";
import { getClient } from "../../core/db-client";
import { hashPassword } from "../../core/service/password-hash.service";
import { generateToken } from "../../core/service/token-generator.service";
import { HttpCodes } from "../../model/constant/http-codes";
import { LoginUser } from "../../model/dto/login-user.dto";
import { User } from "../../model/entity/user.entity";

export default async function handler(
    req: NextApiRequest,
    res: NextApiResponse
) {
    const loginUser: LoginUser = {
        email: req.body.email,
        password: req.body.password
    };
    const user: User = await getUserByEmail(loginUser.email);
    const loginHashedPassword = hashPassword(loginUser.password);
    if (user.password === loginHashedPassword) {
        const claims = await getClaimsByUserId(String(user.id));
        claims.expiry = Math.floor(Date.now() / 1000) + 3600 * 24 * 30;
        const token = generateToken(claims);

        res.setHeader("Access-Control-Expose-Headers", "token");
        res.setHeader("token", token);
        res.status(HttpCodes.SUCCESS).json({});
    } else {
        res.status(HttpCodes.UNAUTHORIZED).json({});
    }
}
