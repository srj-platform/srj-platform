# User Domain

## Purpose

The User entity represents a digital identity within the SRJ Platform.

A User is not a Student, Teacher, Parent or Employee.

A User only represents a person who can authenticate into the platform.

Business roles are assigned separately.

---

## Responsibilities

- Authenticate into the platform
- Own one profile
- Hold one or more roles
- Belong to one or more organizations
- Access modules according to assigned permissions

---

## Business Rules

A User:

- must have a unique email
- may have a unique mobile number
- may belong to multiple organizations
- may have multiple roles
- may authenticate using different providers in the future

---

## Not Responsible For

Student Information

Teacher Information

Employee Information

Admissions

Academics