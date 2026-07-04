# ADR-003: Authentication and Identity Strategy

**Status:** Accepted

**Date:** 04 July 2026

**Decision Makers:** SRJ Platform Engineering Team

---

# Context

Authentication is the entry point of the SRJ Platform.

Every module including:

- Organization
- Admissions
- Student
- Teacher
- HR
- Finance
- Library
- LMS

depends upon a secure and consistent identity model.

The platform therefore adopts a centralized Authentication Strategy.

---

# Problem Statement

Without a common authentication architecture:

- Every module could implement its own login.
- Identity becomes inconsistent.
- Authorization becomes difficult.
- Session management becomes fragmented.
- Future MFA integration becomes complicated.

A unified Identity Engine is therefore required.

---

# Decision

SRJ Platform shall use a centralized Authentication Engine.

Authentication logic shall exist only inside the Authentication Module.

No other module shall implement login logic.

---

# Authentication Flow

```
Login Page

↓

POST /api/auth/login

↓

LoginUseCase

↓

AuthService

↓

UserRepository Interface

↓

Repository Implementation

↓

Database
```

---

# Responsibilities

## LoginUseCase

Responsible for:

- Login workflow
- Input coordination
- Calling AuthService

Does NOT perform business validation.

---

## AuthService

Responsible for:

- User authentication
- Password verification
- Identity creation

AuthService never communicates directly with the database.

---

## UserRepository

Responsible for:

- Finding users
- Creating users
- Updating users

Business rules remain outside the repository.

---

## PasswordService

Responsible for:

- Password hashing
- Password verification

No other component may hash passwords directly.

---

# Identity Model

Each authenticated identity contains:

- User ID
- Organization ID
- Name
- Email
- Role
- Active Status

No sensitive information shall be exposed.

Password hashes are never returned.

---

# Session Strategy

Authentication creates a session.

Session implementation shall use:

- HTTP Only Cookies

Future versions may support:

- Refresh Tokens
- Session Rotation
- Remember Me

JWT is not mandatory for Version 1.0.

---

# Authorization Strategy

Authentication answers:

> Who are you?

Authorization answers:

> What are you allowed to do?

Authentication and Authorization remain separate concerns.

---

# Multi-Tenant Design

Every authenticated identity belongs to one Organization.

Organization isolation shall exist throughout the platform.

Organization ID is part of the authenticated identity.

---

# Security Principles

Passwords:

- Never stored in plain text.
- Always hashed.
- Verified through PasswordService only.

Login failures:

Return generic authentication errors.

The system shall not reveal whether:

- Email exists
- Password is incorrect

This prevents user enumeration attacks.

---

# Dependency Rules

Authentication depends on:

- Core
- Repository Interface

Authentication never depends directly on:

- Supabase
- Database
- SMTP
- Cache

---

# Future Roadmap

Version 1.1 may include:

- Multi-Factor Authentication
- Password Reset
- Email Verification
- Device Trust
- Login History
- Account Lockout

These features shall extend the Authentication Engine without changing its architecture.

---

# Benefits

This strategy provides:

- Single Identity Model
- Reusable Authentication
- Better Security
- Easier Testing
- Infrastructure Independence
- Enterprise Scalability

---

# Alternatives Considered

## Authentication inside every module

Rejected.

Reason:

Creates duplicated logic.

---

## Direct database access inside AuthService

Rejected.

Reason:

Violates Clean Architecture.

---

## Password verification inside Repository

Rejected.

Reason:

Repositories are responsible only for persistence.

---

# Related Documents

- SRJ_ARCHITECTURE_v1.md
- ADR-001
- ADR-002

---

# Status

**ACCEPTED**

This Authentication Strategy becomes the official Identity Architecture of the SRJ Platform beginning 04 July 2026.