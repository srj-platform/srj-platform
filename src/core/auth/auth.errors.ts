export class InvalidCredentialsError extends Error {
    constructor() {
        super("Invalid email or password.");
        this.name = "InvalidCredentialsError";
    }
}

export class InactiveUserError extends Error {
    constructor() {
        super("User account is inactive.");
        this.name = "InactiveUserError";
    }
}

export class UserNotFoundError extends Error {
    constructor() {
        super("User not found.");
        this.name = "UserNotFoundError";
    }
}