# @lila-care/design-system

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
