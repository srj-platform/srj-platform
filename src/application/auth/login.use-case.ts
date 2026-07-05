import { AuthService } from "@/core/auth/auth.service";
import { SessionService } from "@/core/auth/session.service";
import type { LoginResult } from "./login-result.types";

export class LoginUseCase {
    constructor(
        private readonly authService: AuthService,
        private readonly sessionService: SessionService
    ) { }

    async execute(
        email: string,
        password: string
    ): Promise<LoginResult> {

        const user = await this.authService.login(
            email,
            password
        );

        const session =
            this.sessionService.createSession(user);

        return {
            user,
            session,
        };
    }
}