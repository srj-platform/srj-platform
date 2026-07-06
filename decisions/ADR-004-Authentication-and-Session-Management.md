# ADR-003: Authentication and Session Management Architecture

**Status:** Accepted

**Date:** 06 July 2026

---

## Context

The SRJ Platform requires a secure, maintainable and framework-independent
authentication system.

Authentication must remain independent from UI components,
database implementation and infrastructure.

The platform must support:

- Secure password verification
- Session-based authentication
- HTTP-only cookies
- Future database migration
- Future RBAC (Role Based Access Control)
- Multi-Organization architecture

The authentication system must follow the Clean Architecture principles
adopted by ADR-001.

---

## Decision

The authentication subsystem is divided into four architectural layers.

### Presentation Layer

Responsible for:

- Login page
- API routes
- HTTP requests
- HTTP responses
- Cookie transport

Presentation layer never performs authentication directly.

---

### Application Layer

Responsible for authentication workflows.

Implemented using Use Cases.

Examples:

- LoginUseCase
- GetCurrentSessionUseCase

Application layer coordinates business operations but contains no infrastructure code.

---

### Core Domain Layer

Responsible for business rules.

Contains:

- AuthService
- SessionService
- PasswordService
- Domain types
- Repository interfaces

Core never depends on Next.js,
React,
Supabase,
or any external library.

---

### Infrastructure Layer

Responsible for implementation details.

Examples:

- InMemoryUserRepository
- InMemorySessionRepository

Future implementations may include:

- PostgreSQL
- Supabase
- Redis
- External Identity Providers

without changing Core or Application layers.

---

## Session Strategy

Authentication uses server-side sessions.

Login flow:

User

↓

Password Verification

↓

Session Creation

↓

Session Repository

↓

HTTP-only Cookie

↓

Browser

Each session contains:

- Session ID
- User ID
- Organization ID
- Role
- Created Time
- Expiration Time

---

## Cookie Policy

Authentication cookie:

Name:

```
srj_session
```

Properties:

- HTTP Only
- SameSite=Lax
- Secure in Production
- Root Path (/)

Client-side JavaScript never reads authentication cookies.

---

## Repository Pattern

Authentication never communicates directly with storage.

Repositories abstract persistence.

Current implementation:

- InMemoryUserRepository
- InMemorySessionRepository

Future implementations can replace these without modifying business logic.

---

## Dependency Injection

Services receive dependencies through constructors.

Example:

SessionService

↓

SessionRepository

AuthService

↓

UserRepository

This removes infrastructure coupling.

---

## Authentication Flow

Browser

↓

Login Page

↓

LoginUseCase

↓

AuthService

↓

Password Verification

↓

SessionService

↓

SessionRepository

↓

HTTP Cookie

↓

Browser

↓

Subsequent Requests

↓

Session Cookie

↓

Current User

---

## Consequences

Advantages

- Framework independent business rules
- Testable services
- Repository abstraction
- Infrastructure replacement without domain changes
- Supports future RBAC
- Supports future multi-tenant architecture
- Easy migration to persistent storage

Trade-offs

- More files
- More abstractions
- Higher initial complexity

The long-term maintainability significantly outweighs the additional complexity.

---

## Implementation Status

Current implementation includes:

- Login API
- Browser Login Screen
- Password Verification
- Session Creation
- Session Repository
- HTTP-only Cookie
- Browser Cookie Verification
- Session Retrieval
- GetCurrentSessionUseCase

Authentication flow has been verified through end-to-end browser testing.

---

## Related ADRs

- ADR-001 — Clean Architecture Foundation
- ADR-002 — Bootstrap and Dependency Injection