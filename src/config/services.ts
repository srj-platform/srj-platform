import { AuthService } from "@/core/auth/auth.service";
import { SessionService } from "@/core/auth/session.service";

import { LoginUseCase } from "@/application/auth/login.use-case";
import { GetCurrentSessionUseCase } from "@/application/auth/get-current-session.use-case";
import { LogoutUseCase } from "@/application/auth/logout.use-case";

import { bootstrapAuthentication } from "@/bootstrap/authentication.bootstrap";

import { InMemorySessionRepository } from "@/infrastructure/auth/in-memory-session.repository";

const userRepository = bootstrapAuthentication();

const sessionRepository = new InMemorySessionRepository();

export const authService =
    new AuthService(userRepository);

export const sessionService =
    new SessionService(sessionRepository);

export const loginUseCase =
    new LoginUseCase(
        authService,
        sessionService
    );

export const getCurrentSessionUseCase =
    new GetCurrentSessionUseCase(
        sessionService
    );

export const logoutUseCase =
    new LogoutUseCase(
        sessionService
    );

export {
    userRepository,
    sessionRepository,
};