# Quality Budgets

## max_file_lines

Threshold: 150 lines
Enforcement: advisory

Id: core:quality:max-file-lines
Scope: always
Severity: should
Source: playbook
Rationale: Soglia baseline Axiom: file sopra 150 righe vanno splittati per SRP.

## no_eval

Threshold: 0 occurrences
Enforcement: advisory

Id: core:quality:no-eval
Scope: always
Severity: must
Source: playbook
Rationale: Security baseline: niente eval() o equivalenti in nessun layer.

## max_file_lines

Threshold: 100 lines
Enforcement: advisory

Id: core:quality:max-file-lines-v2
Scope: always
Severity: should
Source: alex
Rationale: L'utente conferma le tre decisioni già discusse e in stato proposed: SOLID backend, max 100 righe/file, copertura 60% backend.

## line_coverage

Threshold: 60 percent
Enforcement: build_gate

Id: user:quality:unit-test-coverage
Scope: backend
Severity: should
Source: alex
Rationale: L'utente conferma le tre decisioni già discusse e in stato proposed: SOLID backend, max 100 righe/file, copertura 60% backend.

