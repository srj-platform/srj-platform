export type UserRole =
    | "super_admin"
    | "organization_admin"
    | "principal"
    | "teacher"
    | "student"
    | "parent"
    | "accountant"
    | "librarian";

export interface AuthUser {
    id: string;

    organizationId: string;

    name: string;

    email: string;

    role: UserRole;

    isActive: boolean;
}