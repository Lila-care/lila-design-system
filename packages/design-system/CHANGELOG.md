# @lila-care/design-system

## 0.3.0

### Minor Changes

- 8dfe27e: Add `KPICard` (KAN-44), `CategoryBreakdown` (KAN-45), and an `admin` variant for `DataTable` (KAN-46), the three Admin dashboard components from the analytics breakdown.

  - `KPICard`: metric card composing `Card variant="neo"` + `CardIcon`, with an optional delta row (`showDelta`, up/down direction) and an optional sparkline (`showSparkline`, rendered via `recharts`, reserves no space when hidden).
  - `CategoryBreakdown`: stacked proportional bar + legend for up to 4 categories, colored via the new `--chart-1..4` tokens (arbitrary-value Tailwind syntax, never hardcoded hex in the component). Hiding a category (`show: false`) removes both its legend row and its bar segment, recalculating proportions over the remaining visible categories.
  - `DataTable`: adds `cva`-driven `variant: "default" | "admin"`. `"default"` is byte-for-byte the previous look/behavior (zero regression — this component has no other known consumers in this package or in `lila-web`). `"admin"` swaps the header to `bg-primary`/`text-primary-foreground` and drops the neomorphism shadow/radius from the wrapper.
  - `tokens.css`: adds `--chart-1..4` to `:root` (previously only defined in `.dark`, as an unrelated generic oklch palette). No 1:1 source value existed to copy — `lila-web`'s Admin charts reference `var(--plum-700)`/`var(--coral-600)`/`var(--orchid-600)`/`var(--forest-700)`, but those custom properties aren't defined anywhere in `lila-web`'s own stylesheets. The new values were chosen to stay consistent with this repo's existing brand palette (`--brand-primary`, `--brand-accent`, `--nav-icon-default`).
  - Adds `recharts` as a real (non-peer) dependency, externalized in the package's Vite build like the other deps — consuming apps need it in their own `node_modules`.

## 0.2.0

### Minor Changes

- f499f07: Add namespaced KAN-30 surface/text/brand tokens (`--surface-*`, `--text-*`, `--brand-primary*`, `--nav-*`, `--border-default`) extracted from the Figma "Chat — Web" canvas (empty-state-invitada 27:137, chat-activo-registrada 27:9, empty-state-registrada 27:79).

  Also adds new `Banner`, `Breadcrumbs`, and `DataTable` components, and extends `Card` with `cardVariants`, `CardIcon`, and `CardMetadata`.

  Note: `--nav-icon-default` is currently a placeholder (`#000000`) — the literal value wasn't resolved in the Figma source and needs confirmation from Design before this is treated as final.

## 0.1.1

### Patch Changes

- f85a27c: Agrega los tokens `--color-muted` y `--color-muted-foreground`, que faltaban en `tokens.css`.

  El port original desde `lila-web/src/index.css` los omitió, pero los componentes del propio
  paquete los usan 10 veces (`text-muted-foreground` ×7 en card/alert/select/table, `bg-muted` ×3
  en table). Sin ellos, Tailwind v4 deja de generar `.text-muted-foreground` y `.bg-muted` por
  completo — sin error de build, lint ni type-check. Es el mismo patrón del bug de `--radius`.

  Bloqueante para el consumo del paquete en `lila-web`: ese PR elimina el bloque `@theme inline`
  local que hoy define ambos tokens, así que sin este fix las 10 utilidades quedarían sin CSS.
