import type { User } from "@/core/auth/user.types";
import { PasswordService } from "@/core/auth/password.service";

export async function seedUsers(): Promise<User[]> {
    const passwordHash = await PasswordService.hash("Admin@123");

    return [
        {
            id: "admin-001",
            organizationId: "srj-demo",
            name: "System Administrator",
            email: "admin@srj.local",
            passwordHash,
            role: "super_admin",
            isActive: true,
            createdAt: new Date(),
            updatedAt: new Date(),
        },
    ];
}