import { randomUUID } from "crypto";
import type { AuthUser } from "./auth.types";
import type { Session } from "./session.types";

export class SessionService {
    private static readonly SESSION_DURATION_HOURS = 8;

    createSession(user: AuthUser): Session {
        const createdAt = new Date();

        const expiresAt = new Date(
            createdAt.getTime() +
            SessionService.SESSION_DURATION_HOURS * 60 * 60 * 1000
        );

        return {
            sessionId: randomUUID(),
            userId: user.id,
            organizationId: user.organizationId,
            role: user.role,
            createdAt,
            expiresAt,
        };
    }
}