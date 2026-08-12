# Changesets

Al abrir un PR que cambie algo en `packages/design-system/`, correr `npx changeset` desde la
raíz del repo y seguir el prompt (elegir `@lila-care/design-system`, tipo de bump semver,
resumen del cambio para el changelog). El archivo generado en `.changeset/` se commitea junto
al cambio — es lo que dispara `changeset version` + `npm publish` en CI al mergear a `main`.
