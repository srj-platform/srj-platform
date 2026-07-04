import { seedUsers } from "@/infrastructure/auth/in-memory-user.seed";
import { InMemoryUserRepository } from "@/infrastructure/auth/in-memory-user.repository";

export async function bootstrapAuthentication() {
    const users = await seedUsers();

    return new InMemoryUserRepository(users);
}