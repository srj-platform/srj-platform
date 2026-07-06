import { SessionService } from "@/core/auth/session.service";

export class LogoutUseCase {
    constructor(
        private readonly sessionService: SessionService
    ) { }

    async execute(
        sessionId: string
    ): Promise<void> {
        await this.sessionService.deleteSession(
            sessionId
        );
    }
}