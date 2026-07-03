import type { AuthUser } from "./auth.types";
import type { UserRepository } from "./user.repository";

export class AuthService {
    constructor(
        private readonly userRepository: UserRepository
    ) { }

    async login(
        email: string,
        password: string
    ): Promise<AuthUser> {
        throw new Error("Not implemented");
    }
}