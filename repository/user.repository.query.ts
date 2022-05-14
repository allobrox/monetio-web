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
