import { QueryConfig } from "pg";
import { User } from "../model/entity/user.entity";

export function createUser(entity: User): QueryConfig {
    return {
        name: "INSERT user",
        text: "INSERT INTO users VALUES ($1,$2,$3,$4,$5,$6,$7);",
        values: [
            entity.id,
            entity.email,
            entity.groupId,
            entity.otp,
            entity.password,
            entity.createdAt,
            entity.modifiedAt
        ]
    };
}

export function setUserVerified(
    userId: string,
    modifiedAt: number
): QueryConfig {
    return {
        name: "UPDATE verified on USER",
        text: "UPDATE users SET verified=true, modified_at=$2 WHERE id=$1;",
        values: [userId, modifiedAt]
    };
}
