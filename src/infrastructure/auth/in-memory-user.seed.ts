import type { User } from "@/core/auth/user.types";

const ADMIN_PASSWORD_HASH =
    "$2b$12$7l8TAndfsgZtGTgRRlhD9uhu6Kizq1Ff3iV2D5/TzqEUylwxz6mly";

export function seedUsers(): User[] {
    return [
        {
            id: "admin-001",
            organizationId: "srj-demo",
            name: "System Administrator",
            email: "admin@srj.local",
            passwordHash: ADMIN_PASSWORD_HASH,
            role: "super_admin",
            isActive: true,
            createdAt: new Date(),
            updatedAt: new Date(),
        },
    ];
}