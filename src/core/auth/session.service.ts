import { randomUUID } from "crypto";
import type { AuthUser } from "./auth.types";
import type { Session } from "./session.types";
import type { SessionRepository } from "./session.repository";

export class SessionService {

    constructor(
        private readonly sessionRepository: SessionRepository
    ) { }

    private static readonly SESSION_DURATION_HOURS = 8;

    async createSession(user: AuthUser): Promise<Session> {
        const createdAt = new Date();

        const expiresAt = new Date(
            createdAt.getTime() +
            SessionService.SESSION_DURATION_HOURS * 60 * 60 * 1000
        );

        const session = {
            sessionId: randomUUID(),
            userId: user.id,
            organizationId: user.organizationId,
            role: user.role,
            createdAt,
            expiresAt,
        };

        await this.sessionRepository.create(session);
        return session;
    }
    async getSession(
        sessionId: string
    ): Promise<Session | null> {
        return this.sessionRepository.findById(sessionId);
    };
    async deleteSession(
        sessionId: string
    ): Promise<void> {
        await this.sessionRepository.delete(sessionId);
    }
}
