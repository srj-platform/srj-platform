import type { Session } from "./session.types";

export interface SessionRepository {

    findById(sessionId: string): Promise<Session | null>;

    create(session: Session): Promise<Session>;

    delete(sessionId: string): Promise<void>;

}