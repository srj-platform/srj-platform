import type { AuthUser } from "./auth.types";
import { InvalidCredentialsError } from "./auth.errors";
import { PasswordService } from "./password.service";
import type { UserRepository } from "./user.repository";

export class AuthService {
    constructor(
        private readonly userRepository: UserRepository
    ) { }

    async login(
        email: string,
        password: string
    ): Promise<AuthUser> {

        const user = await this.userRepository.findByEmail(email);

        if (!user) {
            throw new InvalidCredentialsError();
        }

        const valid = await PasswordService.verify(
            password,
            user.passwordHash
        );

        if (!valid) {
            throw new InvalidCredentialsError();
        }

        return {
            id: user.id,
            organizationId: user.organizationId,
            name: user.name,
            email: user.email,
            role: user.role,
            isActive: user.isActive,
        };
    }
}