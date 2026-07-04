import type { User } from "@/core/auth/user.types";
import type { UserRepository } from "@/core/auth/user.repository";

export class InMemoryUserRepository implements UserRepository {
    private users: User[] = [];

    async findById(id: string): Promise<User | null> {
        return this.users.find((user) => user.id === id) ?? null;
    }

    async findByEmail(email: string): Promise<User | null> {
        return (
            this.users.find(
                (user) => user.email.toLowerCase() === email.toLowerCase()
            ) ?? null
        );
    }

    async create(user: User): Promise<User> {
        this.users.push(user);
        return user;
    }

    async update(user: User): Promise<User> {
        const index = this.users.findIndex((u) => u.id === user.id);

        if (index === -1) {
            throw new Error("User not found.");
        }

        this.users[index] = user;

        return user;
    }
}