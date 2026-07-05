import type { Session } from "@/core/auth/session.types";
import type { SessionRepository } from "@/core/auth/session.repository";

export class InMemorySessionRepository implements SessionRepository {
    private sessions: Session[];

    constructor(initialSessions: Session[] = []) {
        this.sessions = [...initialSessions];
    }

    async findById(sessionId: string): Promise<Session | null> {
        return (
            this.sessions.find(
                (session) => session.sessionId === sessionId
            ) ?? null
        );
    }

    async create(session: Session): Promise<Session> {
        this.sessions.push(session);

        console.log(
            "[SessionRepository] Session stored:",
            session.sessionId
        );

        return session;
    }

    async delete(sessionId: string): Promise<void> {
        this.sessions = this.sessions.filter(
            (session) => session.sessionId !== sessionId
        );
    }
}