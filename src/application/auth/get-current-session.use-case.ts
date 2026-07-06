import type { Session } from "@/core/auth/session.types";
import { SessionService } from "@/core/auth/session.service";

export class GetCurrentSessionUseCase {
    constructor(
        private readonly sessionService: SessionService
    ) { }

    async execute(
        sessionId: string
    ): Promise<Session | null> {
        return this.sessionService.getSession(sessionId);
    }
}