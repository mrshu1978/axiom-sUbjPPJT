# Architecture Decisions

## Telemetry-boundary

Adopt telemetry-boundary as repository design guideline

Id: playbook:iiot-data-platform:architecture:telemetry-boundary
Scope: always
Severity: should
Source: playbook
Rationale: Separazione netta tra pipeline ingest (TASK-004) e API di dominio, coerente con i nodi ingest-api e backend-api distinti nel blueprint Mark. Impedisce contaminazione logica sequence_number/gap nei controller CRUD.

## Data-adapter

Adopt data-adapter as repository design guideline

Id: playbook:iiot-data-platform:architecture:data-adapter
Scope: always
Severity: should
Source: playbook
Rationale: Data-adapter isola l'infrastruttura di persistenza TimescaleDB/PostgreSQL e l'integrazione edge-gateway dietro interfacce di dominio. Per TASK-001 (DB Schema EF Core) e TASK-004 (Ingest API) significa repository separati dalla logica applicativa, permettendo test senza database reale e swap futuro del provider dati.

## Rules-boundary

Adopt rules-boundary as repository design guideline

Id: playbook:iiot-data-platform:architecture:rules-boundary
Scope: always
Severity: should
Source: playbook
Rationale: Regole di allarme e valutazione KPI necessitano un boundary dedicato per isolare la logica di soglie, attivazione notifiche e limite 20 regole attive (TASK-007, TASK-008).

## Frontend component architecture

Adopt Atomic Design for the frontend design system while keeping Mark's frontend stack unchanged.

Id: user:architecture:frontend-atomic-design
Scope: frontend
Severity: must
Source: user
Rationale: Applied by repository structure pattern.

## SOLID + Dependency Inversion sul backend .NET

Il backend .NET in Clean Architecture deve rispettare SOLID, con particolare attenzione a Single Responsibility (ogni classe ha un solo motivo per cambiare) e Dependency Inversion (le astrazioni stanno in Application/Domain, le implementazioni in Infrastructure, wiring tramite DI container).

Id: user:architecture:solid-backend
Scope: backend
Severity: must
Source: alex
Rationale: L'utente conferma le tre decisioni già discusse e in stato proposed: SOLID backend, max 100 righe/file, copertura 60% backend.

