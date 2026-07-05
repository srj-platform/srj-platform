import type { AuthUser } from "@/core/auth/auth.types";
import type { Session } from "@/core/auth/session.types";

export interface LoginResult {
    user: AuthUser;
    session: Session;
}