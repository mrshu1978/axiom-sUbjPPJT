# Code Discipline Rules

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

## Divieto commenti nel codice

Non inserire commenti nel codice di produzione (//, /* */, region, summary se non su API pubblica). Il codice deve auto-documentarsi tramite nomi di classi, metodi e variabili espliciti. Eccezione: solo XML doc comment sulle firme dei controller e delle API pubbliche esposte.

Id: user:code:no-comments
Scope: always
Severity: must
Source: alex
Rationale: User ha approvato tutte e tre le code rule pending: no-comments, no-comments-in-production, xml-doc-only.

## Vieta commenti superflui nel production code

Rimuovere commenti che spiegano il 'come' — il codice deve essere auto-esplicativo. Mantenere solo doc XML public API .NET e TODO con referenza.

Id: user:code:no-comments-in-production
Scope: always
Severity: should
Source: alex
Rationale: User ha approvato tutte e tre le code rule pending: no-comments, no-comments-in-production, xml-doc-only.

## Solo XML doc nei file .cs production

Produzione: solo XML doc su API pubbliche. Vietato commenti inline/TODO.

Id: user:code:xml-doc-only
Scope: backend
Severity: must
Source: alex
Rationale: User ha approvato tutte e tre le code rule pending: no-comments, no-comments-in-production, xml-doc-only.

