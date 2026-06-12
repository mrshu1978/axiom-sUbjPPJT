# Claude Build Instructions

This repository was scaffolded by Axiom Dev Repo.
Every coding provider must read this file before changing the repository.
It is the operational source of truth for the accepted project rules.
Accepted Architecture, Code Discipline and Quality Budgets are versioned under docs/architecture.

# Axiom Repo Contract

Read this before changing the repository.

- Follow docs/architecture/decisions.md.
- Follow docs/architecture/code-rules.md.
- Respect docs/architecture/repo-structure.md for file placement.
- Respect docs/architecture/quality-budgets.md for validation and review.

# Quick Start

Commands derived from the accepted stacks. Run them from the repository root unless noted otherwise.

Backend (dotnet, builder: dotnet):
- `dotnet restore`
- `dotnet build`
- `dotnet test`
- `dotnet run --project backend/src/Api`
- Mark-approved build command: `dotnet build`
Frontend (react, builder: node):
- `cd frontend && npm install`
- `cd frontend && npm run dev`
- `cd frontend && npm run build`
- Mark-approved build command: `npm run build`

# Execution Rules

1. Read docs/architecture/decisions.md, code-rules.md, repo-structure.md and quality-budgets.md before touching code.
2. Respect placement rules. Never create a second parallel structure such as shadow `src/`, `apps/` or `packages/` unless it already exists.
3. Placement rules WIN over task mapping. If a task reference conflicts with the file's technical domain, follow the placement rule and the technical domain.
4. Update tests and documentation in the same change set as the code they cover. Quality budgets in quality-budgets.md are enforced.
5. If runtime services, env vars or external systems are ambiguous, stop and ask before inventing files such as `.env` or `docker-compose.yml`.

# Runtime Services

Runtime dependencies are not auto-provisioned by this scaffold.
If tasks require databases, identity providers, message brokers or external APIs, check docs/architecture/decisions.md and existing config files first.
Do not create new env files or compose definitions unless a task explicitly asks for them.

# Repository Structure

Topology: flat
Tech Stack:
- backend: dotnet (builder: dotnet, build: dotnet build)
- frontend: react (builder: node, build: npm run build)

## backend/src/Api

ASP.NET Core controllers, endpoints, middleware

Placement rules:
- HTTP endpoints, controllers, middleware, request/response mapping and API composition.
- No persistence implementation or domain invariants.

Mapped task references:
- TASK-003: Backend — API setup: autenticazione Keycloak JWT, middleware, Program.cs
- TASK-004: Backend — Controller Linea Produttiva: GET /api/lines, POST /api/lines, PUT /api/lines/{lineId}
- TASK-005: Backend — Controller Tag OPC-UA: CRUD /api/lines/{lineId}/tags
- TASK-006: Backend — Endpoint ingestione time-series: POST /api/lines/{lineId}/timeseries con gap detection
- TASK-010: Backend — Controller KPI results e Export XLSX: GET /kpi-results, GET /export
- TASK-025: Backend — Ingest API: retry automatico lato client edge, reconnect OPC-UA, API key auth

## backend/src/Application

use cases, commands/queries, validators

Placement rules:
- Use cases, commands, queries, validators and task orchestration.
- Keep transport, persistence and visual rendering outside this folder.

Mapped task references:
- TASK-007: Backend — KPI Worker: job Quartz.NET per calcolo batch OEE/OOE/TEEP
- TASK-008: Backend — Rules Engine: valutazione soglie KPI e generazione notifiche
- TASK-009: Backend — Email notification service: invio SMTP con retry esponenziale (MailKit + Polly)
- TASK-021: Backend — Edge Gateway: buffer FIFO 24h, FIFO flush, overflow log e sequence integrity
- TASK-022: Backend — KPI Worker: guard concorrenza job, data completeness check, status INCOMPLETE/PARTIAL
- TASK-023: Backend — Time-series: query storica per KPI, volume warning, GET /gap-log
- TASK-024: Backend — Notifiche: coda concorrente, deduplicazione mono-linea, stato undelivered

## backend/src/Domain

entities, value objects, domain services

Placement rules:
- Domain entities, value objects, invariants and domain services only.
- No framework, database, HTTP or UI dependencies.

Mapped task references:
- TASK-002: Backend — Domain model: entità ProductionLine, OpcUaTag, KpiResult, AlarmRule, Notification

## backend/src/Infrastructure

EF Core, integrations, persistence

Placement rules:
- Persistence, external integrations, repositories, clients and infrastructure adapters.
- No business use case orchestration or UI components.

## frontend/src/app

application shell, routing, layout

Placement rules:
- Application shell, providers, routing, bootstrap and layout wiring.
- No feature internals or low-level infrastructure implementation.

## frontend/src/pages

routed pages and screen composition

Placement rules:
- Routed pages and screen composition.
- Coordinate features/widgets without owning shared primitives.

Mapped task references:
- MIGRATE-000: MIGRATE-000: Estendi soluzione .NET a monorepo con frontend React+Vite+TS
- TASK-012: Frontend — Dashboard KPI: grafici trend OEE/OOE/TEEP, selettore intervallo, banner allarmi
- TASK-013: Frontend — Asset List (Asset Monitor): tabella linee, filtri stato, navigazione al dettaglio
- TASK-014: Frontend — Asset Detail: tab KPI turno/OEE e tabella tag configurati
- TASK-015: Frontend — Tag Config: wizard mapping tag OPC-UA con validazione inline
- TASK-016: Frontend — Rules Engine: lista regole allarmi, form creazione/modifica, limite 20 regole
- TASK-017: Frontend — Notifications Center: log notifiche, badge warning email, Acknowledge All Active
- TASK-018: Frontend — Export Panel: form selezione intervallo e formato, download XLSX/CSV
- TASK-019: Frontend — Settings: configurazione OPC-UA gateway e SMTP notifiche
- TASK-020: Frontend — Easter Egg "W Axiom": animazione footer nascosta al click
- TASK-026: Backend + Frontend — Validazione parametri statici linea e retry salvataggio configurazione

## frontend/src/design-system/organisms

complex reusable UI sections

Placement rules:
- Reusable complex UI sections built from atoms and molecules.
- Receive product data through props or local hooks only.

## frontend/src/state

state management, API clients

Placement rules:
- State management, API clients and data access hooks.
- No visual layout or route composition.

Mapped task references:
- TASK-011: Frontend — App shell: routing, layout, Keycloak auth, API client

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

## frontend/src/design-system/templates

page-level reusable layouts

Placement rules:
- Reusable page-level layouts and composition skeletons.
- No route ownership or business side effects.



