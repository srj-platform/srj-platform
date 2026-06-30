# ADR-001 — Project Architecture

## Status

Accepted

---

## Context

The SRJ Platform is designed as a long-term enterprise platform rather than a single school ERP application.

The platform must support:

- Multi-organization
- Multi-campus
- Modular architecture
- Cloud-native deployment
- AI-ready services
- Long-term scalability

---

## Decision

The project will follow a Hybrid Enterprise Architecture.

Project layers:

Core

Shared

Infrastructure

Modules

Configuration

The application will use a Feature-Based Module structure while sharing common platform services through the Core layer.

---

## Consequences

Benefits

- Highly scalable

- Easy maintenance

- Low coupling

- High reusability

- Independent module development

Trade-offs

- Slightly higher initial complexity

- Requires strict engineering standards

---

## Folder Strategy

src/

core/

shared/

modules/

infrastructure/

config/

---

## Engineering Rules

Architecture first.

Database before UI.

Business logic never inside components.

Validation before persistence.

Single source of truth for configuration.

---

## Approved

Sprint 21

Date: 2026