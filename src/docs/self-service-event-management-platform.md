# Enterprise Event Management Platform

> A self-service event management platform designed to streamline event creation, registration, attendee management, and communications for professional education programs.

---

## Project Summary

**Role:** Lead Full-Stack Developer

**Project Type:** Professional (Internal Enterprise Application)

**Status:** Pre-release

**Technology**

- Laravel
- Vue 3
- Quasar
- SQL Server
- REST APIs

---

# Project Overview

The Enterprise Event Management Platform was created to replace a developer-driven process for creating and managing educational events.

Previously, nearly every aspect of launching a new event required assistance from the development team. Developers were responsible for creating new event sites, copying and modifying legacy code, removing unnecessary functionality, updating content based on stakeholder requests, sending repeated test emails, and manually triggering invitation emails for each batch of attendees. Even small content revisions often resulted in multiple development iterations before an event could be launched.

Beyond consuming valuable development time, this process also created a dependency on developers for work that was fundamentally administrative. Event coordinators were unable to independently manage their own events and relied on engineering resources for routine updates.

Recognizing this opportunity, I proposed building a self-service platform that would allow administrators to manage the entire event lifecycle without requiring ongoing developer involvement. The goal was to eliminate repetitive maintenance work, streamline event administration, and enable non-technical users to confidently create and manage events on their own.

Although currently in its pre-release phase, the platform is designed for event coordinators, administrators, and education staff responsible for organizing professional education programs.

---

# My Role

I contributed throughout the entire software development lifecycle, from identifying the business problem through solution design, implementation, testing, and release preparation.

## Requirements & Discovery

- Identified repetitive developer-driven workflows that could be automated through a self-service application.
- Gathered requirements from stakeholders.
- Worked closely with management and stakeholders throughout development to refine workflows and prioritize enhancements.
- Continuously incorporated stakeholder feedback into the evolving product.

## Product & Workflow Design

- Designed application workflows focused on enabling non-technical administrators to independently manage events.
- Simplified complex administrative processes into guided user experiences.
- Designed reusable workflows to support future feature expansion.

> TODO: Mention any particularly challenging workflow that required multiple iterations.

## Solution & System Design

- Designed the relational database schema.
- Designed application architecture.
- Planned reusable API endpoints and frontend components.
- Structured the application to support future growth and maintainability.

## Full-Stack Development

- Developed REST APIs using Laravel.
- Built the frontend using Vue 3 and Quasar.
- Implemented business logic across the application.
- Integrated frontend and backend workflows.

## Testing & Release Preparation

- Performed end-to-end testing across the platform.
- Fixed issues discovered through testing and stakeholder feedback.
- Prepared the application for organizational release.

---

# The Challenge

The previous process required developers to perform work that was repetitive, time-consuming, and unrelated to ongoing product development.

Launching a new event typically involved:

- Creating new event sites.
- Copying and modifying legacy code.
- Removing unused functionality.
- Updating event content.
- Sending repeated test emails.
- Scheduling and triggering invitation emails.
- Making numerous revisions as stakeholder feedback evolved.

As a result, developers became a bottleneck for routine administrative tasks while event coordinators remained dependent on engineering resources for day-to-day event management.

---

# The Solution

The Enterprise Event Management Platform centralizes the entire event management workflow into a single self-service application.

Rather than relying on developers, administrators can independently:

- Create and configure events.
- Manage registrations.
- Configure recurring events.
- Build and manage email templates.
- Import attendees.
- Schedule invitations.
- Monitor registrations.
- Manage supporting documentation.

This significantly reduces developer involvement while providing administrators with greater flexibility and ownership over the event lifecycle.

---

# Feature Highlights

## Event Dashboard

A centralized dashboard providing administrators with visibility into registrations, invitations, communications, and event status.

**Screenshot**

TODO

---

## Event Configuration

Flexible event configuration supporting registration settings, recurring events, and administrative workflows.

**Screenshot**

TODO

---

## Attendee Management

Tools for importing attendees, managing invitations, tracking registrations, and monitoring participation.

**Screenshot**

TODO

---

## Email Management

Built-in email template management supporting invitation, registration, confirmation, and reminder emails while allowing administrators to preview and manage communications without developer assistance.

**Screenshot**

TODO

---

## Recurring Events

Configurable recurring event engine allowing administrators to create and manage repeating event schedules through an intuitive interface.

**Screenshot**

TODO

---

# Technical Challenges

Several areas of the application required careful planning to balance flexibility with ease of use.

Examples include:

- Designing a flexible relational database schema capable of supporting complex event relationships.
- Building configurable workflows that accommodate multiple event types.
- Managing recurring event logic.
- Designing reusable APIs and frontend components.
- Creating a user experience suitable for non-technical administrators.

> TODO: Add additional technical challenges that demonstrate interesting engineering decisions.

---

# Outcomes

Although the platform is currently preparing for organizational release, it has already achieved its primary design objectives.

- Eliminates repetitive developer maintenance for routine event management.
- Shifts ownership of event administration to non-technical users.
- Centralizes previously disconnected workflows into a single application.
- Reduces dependence on developers for content updates and communications.
- Establishes a scalable foundation for future enhancements.

---

# Lessons Learned

This project reinforced the importance of understanding business workflows before designing technical solutions.

Rather than simply automating existing processes, I focused on identifying which responsibilities truly required developer involvement and which could be delegated to administrators through thoughtful application design.

It also strengthened my experience gathering requirements, designing scalable application architecture, balancing stakeholder feedback with technical constraints, and building software that improves operational efficiency rather than simply adding new functionality.

---

# Screenshots Needed

- Hero Screenshot
- Event Dashboard
- Event Overview
- Attendee Management
- Email Management
- Recurring Events
- Import Wizard
- Registration Configuration

---

# Notes

Portfolio version only.

- Replace organization branding.
- Replace organization colors.
- Use test data only.
- Remove organization names where appropriate.
- Do not include proprietary code or implementation details.
