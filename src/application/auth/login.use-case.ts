import type { AuthUser } from "@/core/auth/auth.types";
import { AuthService } from "@/core/auth/auth.service";

export class LoginUseCase {
    constructor(
        private readonly authService: AuthService
    ) { }

    async execute(
        email: string,
        password: string
    ): Promise<AuthUser> {
        return this.authService.login(email, password);
    }
}