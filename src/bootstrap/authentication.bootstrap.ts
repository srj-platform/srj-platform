import { seedUsers } from "@/infrastructure/auth/in-memory-user.seed";
import { InMemoryUserRepository } from "@/infrastructure/auth/in-memory-user.repository";

export function bootstrapAuthentication() {
    const users = seedUsers();

    return new InMemoryUserRepository(users);
}