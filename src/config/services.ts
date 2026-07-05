import { AuthService } from "@/core/auth/auth.service";
import { LoginUseCase } from "@/application/auth/login.use-case";
import { bootstrapAuthentication } from "@/bootstrap/authentication.bootstrap";
import { SessionService } from "@/core/auth/session.service";
import { InMemorySessionRepository } from "@/infrastructure/auth/in-memory-session.repository";

const userRepository = bootstrapAuthentication();

export const authService = new AuthService(userRepository);
const sessionRepository = new InMemorySessionRepository();

export const sessionService = new SessionService(sessionRepository);

export const loginUseCase = new LoginUseCase(
    authService,
    sessionService
);

export { userRepository };