import { AuthService } from "@/core/auth/auth.service";
import { LoginUseCase } from "@/application/auth/login.use-case";
import { bootstrapAuthentication } from "@/bootstrap/authentication.bootstrap";
import { SessionService } from "@/core/auth/session.service";

const userRepository = bootstrapAuthentication();

export const authService = new AuthService(userRepository);

export const sessionService = new SessionService();

export const loginUseCase = new LoginUseCase(
    authService,
    sessionService
);

export { userRepository };