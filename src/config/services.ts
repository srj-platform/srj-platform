import { AuthService } from "@/core/auth/auth.service";
import { InMemoryUserRepository } from "@/infrastructure/auth/in-memory-user.repository";
import { seedUsers } from "@/infrastructure/auth/in-memory-user.seed";

const users = await seedUsers();

const userRepository = new InMemoryUserRepository(users);

export const authService = new AuthService(userRepository);

export { userRepository };