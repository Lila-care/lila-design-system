# Lila — Design System

Sketchbook que cataloga en vivo los tokens y componentes reales de
[`lila-web`](https://github.com/Lila-care/lila-web) — no son copias: se importan directo
desde el código fuente de `lila-web`, así el catálogo nunca se desincroniza.

## Requisito: clonar junto a `lila-web`

Por el punto anterior, este repo necesita que `lila-web` esté clonado como carpeta
**hermana** (mismo directorio padre):

```
algún-directorio/
├── lila-web/
└── lila-design-system/
```

```bash
git clone git@github.com:Lila-care/lila-web.git
git clone git@github.com:Lila-care/lila-design-system.git
cd lila-design-system
npm install
npm run dev
```

Abre `http://localhost:5180`.

## Cómo funciona

`vite.config.ts` define el alias `@` apuntando a `../lila-web/src` (en vez de al propio
`src/` de esta app), así que cualquier `import ... from "@/..."` en este proyecto resuelve
contra el código fuente real de `lila-web`. El alias `@sketch` apunta al `src/` propio de
este sketchbook.

- **Fundamentos** — color, tipografía, forma e iconografía (tokens de `lila-web/src/index.css`).
- **Componentes** — `Table` y `EmptyState` reales, renderizados en vivo.
- **Patrones** — `Sidebar` y `AccountBanner` reales, envueltos en el `AuthProvider` real
  (en modo guest, sin requests de red).

`MobileNav` no se puede previsualizar en un marco de tamaño fijo porque usa breakpoints
reales de viewport (`md:hidden`) — para verlo, corre `lila-web` y achica la ventana a
menos de 768px.
