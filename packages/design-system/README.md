# @lila-care/design-system

Primitivos UI (`Alert`, `Button`, `Card`, `Select`, `Skeleton`, `Table`) y design tokens de
Lila, extraídos de `lila-web/src/components/ui` y publicados como paquete versionado en
GitHub Packages.

## Instalación

`.npmrc` del consumidor:

```
@lila-care:registry=https://npm.pkg.github.com
```

```bash
npm install @lila-care/design-system
```

## Uso

```tsx
import { Button, Card, CardContent } from "@lila-care/design-system"
```

En el `index.css` de la app consumidora (Tailwind v4), junto al `@import "tailwindcss"`
propio:

```css
@import "tailwindcss";
@import "@lila-care/design-system/tokens.css";
@source "../node_modules/@lila-care/design-system/dist/**/*.js";
```

- `tokens.css` solo trae custom properties (`@theme inline`, `.dark`, `@layer base`) — no
  utilidades Tailwind precompiladas. La app consumidora sigue teniendo un único pipeline de
  Tailwind, no dos hojas de estilo compitiendo.
- El directive `@source` le dice al scanner de Tailwind v4 que también mire dentro del JS
  compilado del paquete, para generar las utilidades (`bg-primary`, `rounded-xl`, etc.) que
  estos componentes usan mediante `className`.

## Publicación

`npm run build` genera `dist/index.js` + `dist/index.d.ts` (vía `tsc`/`vite build`) y copia
`dist/tokens.css`. El versionado y changelog se manejan con
[Changesets](https://github.com/changesets/changesets) — correr `npx changeset` al abrir un PR
que cambie algo en `packages/design-system/`.
