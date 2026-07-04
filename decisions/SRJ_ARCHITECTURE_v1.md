> **This document defines the engineering constitution of the SRJ Platform.**
>
> Architectural decisions must be documented through ADRs before implementation.
# SRJ Platform Architecture v1.0

**Version:** 1.0  
**Status:** ✅ FROZEN  
**Effective Date:** 04 July 2026  
**Project:** SRJ Platform ERP  
**Owner:** SRJ Technologies

---

# Purpose

This document defines the official software architecture of the SRJ Platform.

It serves as the single source of truth for:

- Project Structure
- Layer Responsibilities
- Dependency Rules
- Naming Conventions
- Development Workflow
- Authentication Architecture
- Future Module Integration

All new development must follow this document.

---

# Design Principles

The SRJ Platform is designed according to the following principles:

1. Domain First
2. Clean Architecture
3. Dependency Injection
4. Separation of Concerns
5. Replaceable Infrastructure
6. Enterprise Scalability
7. Testability
8. Incremental Development

---

# High Level Architecture

```
Presentation (UI)

        ↓

Application Layer (Use Cases)

        ↓

Core Domain

        ↓

Repository Interfaces

        ↓

Infrastructure

        ↓

External Systems
(Database, SMTP, Storage, Cache, etc.)
```

Dependencies always move downward.

Lower layers never depend on upper layers.

---

# Folder Structure

```
src/

application/
core/
config/
infrastructure/
repositories/
shared/
tests/
modules/
```

This structure may evolve as the platform grows.

The architectural principles defined in this document remain stable.

---

# Layer Responsibilities

## Presentation

Contains:

- Next.js Pages
- React Components
- Route Handlers

Responsibilities:

- Receive requests
- Display responses
- No business logic

---

## Application Layer

Contains:

- Use Cases

Examples:

- LoginUseCase
- CreateStudentUseCase
- AdmitStudentUseCase
- PayFeeUseCase

Responsibilities:

- Coordinate workflows
- Call domain services
- Never access the database directly

---

## Core Domain

Contains:

- Entities
- Interfaces
- Domain Services
- Business Rules
- Domain Errors

Core must never depend on Infrastructure.

Golden Rule:

> Core knows nothing about external systems.

---

## Infrastructure

Contains:

- Repository Implementations
- Supabase
- SMTP
- Storage
- Cache
- Logging
- External Integrations

Infrastructure is replaceable.

---

# Repository Pattern

Repository Interfaces belong to Core.

Example

```
core/auth/user.repository.ts
```

Repository Implementations belong to Infrastructure.

Example

```
infrastructure/auth/in-memory-user.repository.ts
```

Future:

```
infrastructure/auth/supabase-user.repository.ts
```

---

# Dependency Injection

Object creation is centralized.

```
config/services.ts
```

No class should instantiate its own dependencies.

Avoid:

```
new Repository()
new AuthService()
```

inside business logic.

---

# Authentication Flow

```
Login Page

↓

API Route

↓

LoginUseCase

↓

AuthService

↓

UserRepository

↓

Repository Implementation

↓

Database
```

---

# API Rules

API routes:

- Receive Request
- Validate Input
- Call Use Case
- Return Response

API routes must never directly communicate with:

- Database
- SMTP
- Storage
- Cache

---

# Naming Conventions

Services

```
auth.service.ts
password.service.ts
```

Use Cases

```
login.use-case.ts
```

Repository Interfaces

```
user.repository.ts
```

Repository Implementations

```
supabase-user.repository.ts
```

Errors

```
auth.errors.ts
```

Types

```
user.types.ts
```

---

# Dependency Rules

Allowed

```
Presentation

↓

Application

↓

Core

↓

Infrastructure

↓

External Services
```

Forbidden

```
Infrastructure

↓

Application
```

or

```
Core

↓

Presentation
```

---

# Git Workflow

Every feature follows:

```
Design

↓

Implementation

↓

Build

↓

Verification

↓

Commit

↓

Push
```

Every push must represent a stable state.

---

# Testing Strategy

Development order:

1. Unit Testing
2. Integration Testing
3. UI Testing

Business logic should be testable independently of the UI.

---

# Future Modules

The following modules will follow this architecture:

- Authentication
- Organization
- Admissions
- Student Management
- Teacher Management
- Human Resources
- Attendance
- Finance
- Payroll
- Library
- Transport
- Hostel
- Learning Management System
- Examination
- Reports
- Analytics

---

# Architecture Evolution Policy

Architectural principles are frozen under Version 1.0.

Future improvements will be introduced through:

- ADR Documents
- Versioned Architecture Updates

Examples:

- Architecture v1.1
- Architecture v2.0

No architectural changes should be made without documentation.

---

# Official Engineering Workflow

```
Requirement

↓

Architecture Validation

↓

Implementation

↓

Green Build

↓

Commit

↓

Push
```

---

# Definition of Done

A feature is considered complete only if:

- Business logic implemented
- Build successful
- No TypeScript errors
- Code follows Architecture v1.0
- Git committed
- Git pushed

---

# Official Declaration

On 04 July 2026, the SRJ Platform team officially adopted and froze
**SRJ Platform Architecture v1.0**.

All future development shall conform to the principles defined in this document.

---

**Document Status:** ACTIVE

**Architecture Version:** 1.0

**Status:** FROZEN

**Maintained By:** SRJ Technologies