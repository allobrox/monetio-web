export enum UserRole {
    ADMIN = 10,
    READ = 1
}

export function getByName(name: string): UserRole {
    switch (name) {
        case "ADMIN":
            return UserRole.ADMIN;

        case "READ":
            return UserRole.READ;

        default:
            return UserRole.READ;
    }
}
