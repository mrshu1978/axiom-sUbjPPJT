# Repository Structure

Topology: flat
Scaffold: dotnet

## backend/src/Api

ASP.NET Core controllers, endpoints, middleware

Placement rules:
- HTTP endpoints, controllers, middleware, request/response mapping and API composition.
- No persistence implementation or domain invariants.

Mapped task references:
- TASK-004: Ingest API — POST /api/timeseries/ingest con idempotency e gap detection
- TASK-005: Lines API — CRUD /api/lines + /api/lines/{lineId}/tags
- TASK-007: Alarm Rules API — CRUD /api/lines/{lineId}/alarm-rules con limite 20 regole attive
- TASK-009: Notifications API — GET/PUT /api/notifications
- TASK-010: KPI Results API — GET /api/lines/{lineId}/kpi-results con filtri temporali
- TASK-011: XLSX Export API — POST /api/export/kpi/xlsx
- TASK-012: Settings API — GET/PUT /api/settings (email Plant Director)
- TASK-013: Health endpoint + Quartz scheduler status
- TASK-023: Time-series query API — GET /api/timeseries con filtri
- TASK-024: Ingest API — OPC-UA data persistence, error handling and auto-reconnect logging
- TASK-025: Tag Config API — validation, save confirmation and network error handling
- TASK-028: Rules Engine API — full lifecycle: create, validate, limit enforcement, deactivate, multi-rule eval, versioning
- TASK-030: XLSX Export API — columns structure, empty interval handling and error logging

## backend/src/Application

use cases, commands/queries, validators

Placement rules:
- Use cases, commands, queries, validators and task orchestration.
- Keep transport, persistence and visual rendering outside this folder.

Mapped task references:
- TASK-002: Backend setup — NuGet packages, Program.cs wiring, appsettings
- TASK-003: Auth — Keycloak JWT middleware + [Authorize] policies
- TASK-006: KPI Batch Job — Quartz.NET scheduler + formula engine OEE/OOE/TEEP
- TASK-008: Notification Service — creazione in-app + email dispatch con retry esponenziale
- TASK-017: Frontend — Asset Monitor: stato linea e connettività gateway
- TASK-018: Frontend — Tag Config: wizard mapping tag OPC-UA + parametri statici linea
- TASK-019: Frontend — Rules Engine: CRUD regole allarme con limite 20
- TASK-020: Frontend — Centro Notifiche: lista alert con dismiss e indicatore undelivered
- TASK-021: Frontend — Export: selezione intervallo + download XLSX
- TASK-022: Frontend — Settings: configurazione email Plant Director
- TASK-032: Notifications FE — Centro Notifiche: undelivered badge, dismiss, chronological order
- TASK-034: Tag Config FE — OPC-UA tag wizard: dropdown mapping, save with retry and static line params validation
- TASK-054: Frontend — Easter Egg "W Axiom" footer trigger con animazione

## backend/src/Domain

entities, value objects, domain services

Placement rules:
- Domain entities, value objects, invariants and domain services only.
- No framework, database, HTTP or UI dependencies.

## backend/src/Infrastructure

EF Core, integrations, persistence

Placement rules:
- Persistence, external integrations, repositories, clients and infrastructure adapters.
- No business use case orchestration or UI components.

Mapped task references:
- TASK-001: DB Schema — EF Core domain entities + PostgreSQL migrations
- TASK-033: Rules Engine FE — create/edit/delete alarm rules with limit enforcement and validation feedback
- TASK-035: DB Schema — migration for ingest_error_log, system_event_log, rule_audit_log and schema constraints

## frontend/src/app

application shell, routing, layout

Placement rules:
- Application shell, providers, routing, bootstrap and layout wiring.
- No feature internals or low-level infrastructure implementation.

Mapped task references:
- TASK-015: Frontend — App shell, routing React Router, layout e navigazione

## frontend/src/design-system/atoms

primitive UI elements

Placement rules:
- Primitive visual components only.
- No feature imports, routing, data fetching or global state.

## frontend/src/design-system/molecules

small composed UI groups

Placement rules:
- Small composed UI groups built from atoms.
- No product use case orchestration or route-level state.

## frontend/src/design-system/organisms

complex reusable UI sections

Placement rules:
- Reusable complex UI sections built from atoms and molecules.
- Receive product data through props or local hooks only.

## frontend/src/design-system/templates

page-level reusable layouts

Placement rules:
- Reusable page-level layouts and composition skeletons.
- No route ownership or business side effects.

## frontend/src/pages

routed pages and screen composition

Placement rules:
- Routed pages and screen composition.
- Coordinate features/widgets without owning shared primitives.

Mapped task references:
- TASK-014: Frontend — React Vite project setup + Keycloak OIDC client
- TASK-016: Frontend — Dashboard: KPI charts storici + alarm banner
- TASK-026: KPI Batch Job — resilience, auth guard, dashboard visibility and non-calculable marking
- TASK-027: Dashboard FE — interval selector (week/month/quarter/year only), KPI aggregation and alarm banner
- TASK-031: Time-series storage — sequence_number continuity, FIFO buffer replay, volume warning and KPI traceability

## frontend/src/state

state management, API clients

Placement rules:
- State management, API clients and data access hooks.
- No visual layout or route composition.

Mapped task references:
- TASK-029: Notification Service — email retry logic, undelivered state, dedup and queue ordering

