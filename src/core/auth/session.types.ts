export interface Session {
    sessionId: string;
    userId: string;
    organizationId: string;
    role: string;
    createdAt: Date;
    expiresAt: Date;
}