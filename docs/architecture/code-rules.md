# Code Discipline Rules

## Vieta raw-payload-leakage

Avoid raw-payload-leakage; split/refactor when encountered.

Id: playbook:iiot-data-platform:code:raw-payload-leakage
Scope: always
Severity: must
Source: playbook
Rationale: Anti-pattern dichiarato dal playbook.

## Vieta duplicated-alert-rules

Avoid duplicated-alert-rules; split/refactor when encountered.

Id: playbook:iiot-data-platform:code:duplicated-alert-rules
Scope: always
Severity: must
Source: playbook
Rationale: Anti-pattern dichiarato dal playbook.

## Complexity policy

treat telemetry, alerting and device registry as independent boundaries

Id: playbook:iiot-data-platform:code:complexity-policy
Scope: always
Severity: should
Source: playbook
Rationale: Policy di complessita derivata dal playbook.

## Make time, units and thresholds explicit

make time, units and thresholds explicit

Id: playbook:iiot-data-platform:code:make-time-units-and-thresholds-explicit
Scope: always
Severity: should
Source: playbook
Rationale: Quality focus dichiarato dal playbook.

## Keep telemetry rendering performant and bounded

keep telemetry rendering performant and bounded

Id: playbook:iiot-data-platform:code:keep-telemetry-rendering-performant-and-bounded
Scope: always
Severity: should
Source: playbook
Rationale: Quality focus dichiarato dal playbook.

## Atoms boundary

Atoms contain primitive UI only: no feature imports, data fetching, routing or global state.

Id: user:code:atomic-atoms-boundary
Scope: frontend
Severity: must
Source: user
Rationale: Applied by repository structure pattern.

## Atomic composition boundary

Molecules compose atoms; organisms compose atoms/molecules and receive data through props or dedicated hooks.

Id: user:code:atomic-composition-boundary
Scope: frontend
Severity: must
Source: user
Rationale: Applied by repository structure pattern.

## Pages and features boundary

Pages/features orchestrate routing, use cases and state; design-system folders must stay reusable.

Id: user:code:atomic-pages-boundary
Scope: frontend
Severity: must
Source: user
Rationale: Applied by repository structure pattern.

