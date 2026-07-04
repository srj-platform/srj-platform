# ADR-002: Application Bootstrap Strategy

**Status:** Accepted

**Date:** 04 July 2026

**Decision Makers:** SRJ Platform Engineering Team

---

# Context

As the SRJ Platform architecture evolved, it became necessary to define a
consistent application startup process.

Initially, repositories and services were instantiated directly inside
configuration files.

As the platform grows to include multiple modules such as:

- Authentication
- Organization
- Admissions
- Student Management
- Teacher Management
- Finance
- Human Resources
- Learning Management System

application startup responsibilities must remain organized and predictable.

A dedicated Bootstrap Layer is therefore introduced.

---

# Problem Statement

Without a defined bootstrap strategy:

- Initialization logic becomes scattered.
- Services begin creating their own dependencies.
- Repository seeding becomes inconsistent.
- Startup logic mixes with runtime business logic.
- Testing becomes more difficult.
- Infrastructure initialization becomes harder to maintain.

The platform requires a centralized startup lifecycle.

---

# Decision

SRJ Platform shall introduce a dedicated Bootstrap Layer.

Bootstrap is responsible only for application initialization.

Bootstrap is **NOT** part of runtime request processing.

---

# Responsibilities of Bootstrap

Bootstrap SHALL perform:

- Repository initialization
- Development seed data
- Default organization initialization
- Default role initialization
- Permission initialization
- Infrastructure startup
- Service dependency preparation

Bootstrap SHALL NOT perform:

- Authentication
- Authorization
- Business validation
- Request processing
- API handling
- UI rendering

---

# Startup Lifecycle

```
Application Start

        │

        ▼

Bootstrap

        │

        ▼

Repository Initialization

        │

        ▼

Dependency Injection

        │

        ▼

Application Ready
```

Bootstrap executes once during application startup.

---

# Runtime Lifecycle

After startup completes:

```
Browser

↓

API Route

↓

Use Case

↓

Domain Service

↓

Repository

↓

Database
```

Bootstrap does not participate in runtime requests.

---

# Folder Structure

Bootstrap components shall be placed inside:

```
src/bootstrap/
```

Examples:

```
authentication.bootstrap.ts

organization.bootstrap.ts

permissions.bootstrap.ts

application.bootstrap.ts
```

---

# Dependency Rules

Bootstrap may depend on:

- Infrastructure
- Repository Implementations
- Configuration

Bootstrap may create:

- Repository instances
- Service instances

Bootstrap must never contain business rules.

---

# Design Principles

Bootstrap follows:

- Single Responsibility Principle
- Separation of Concerns
- Dependency Injection
- Explicit Startup Lifecycle

---

# Benefits

This strategy provides:

- Predictable startup
- Centralized initialization
- Easier testing
- Replaceable infrastructure
- Cleaner service wiring
- Better scalability

---

# Alternatives Considered

## Option 1

Initialize repositories inside services.

Rejected.

Reason:

Services should contain business logic only.

---

## Option 2

Initialize repositories inside API routes.

Rejected.

Reason:

Initialization would occur repeatedly.

---

## Option 3

Use top-level initialization inside configuration files.

Rejected.

Reason:

Configuration should wire dependencies, not execute application startup logic.

---

# Consequences

Positive:

- Clean architecture
- Consistent initialization
- Easier module expansion
- Better dependency management
- Improved maintainability

Trade-off:

An additional Bootstrap Layer increases the number of project files.

This trade-off is accepted because it significantly improves long-term maintainability.

---

# Compliance

All future modules shall use the Bootstrap Layer for startup initialization.

Examples include:

- Authentication
- Organization
- Student
- Teacher
- Finance
- Attendance
- HR
- Library
- LMS

---

# Related Documents

- SRJ_ARCHITECTURE_v1.md
- ADR-001

---

# Status

**ACCEPTED**

This decision becomes part of the official SRJ Platform Architecture beginning
04 July 2026.