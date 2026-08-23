# CLAUDE.md — lila-design-system

## Qué es este repo

Dos cosas viven acá, con propósitos distintos:

1. **`packages/design-system/`** — el paquete publicado `@lila-care/design-system`. Es la
   fuente real de los primitivos de UI (`Table`, `Alert`, `Button`, `Card`, `Select`,
   `Skeleton`, tokens de marca en `tokens.css`). `lila-web` lo consume como dependencia
   normal de npm (no como monorepo/workspace) — hoy vía `"@lila-care/design-system": "^0.1.1"`
   en su `package.json`.
2. **`src/` (raíz del repo)** — el *sketchbook*: una app Vite/React aparte que cataloga en vivo
   los tokens y componentes reales, tanto de `packages/design-system/` como de features
   completos de `lila-web` (`Chat`, `Hoy`, `Calendario`, `Perfil`, `Admin`, etc.). No es
   documentación estática — importa el código fuente real, así que si algo se rompe en
   `lila-web` o en el paquete, se rompe acá también (a propósito: es la señal de que la doc
   quedó desactualizada).

## Stack

React 18 + TypeScript + Vite + Tailwind v4 + wouter. Ver
`agents/standards/frontend-react-vite.md` del sistema de agentes para las convenciones
generales del stack; lo específico de este repo está abajo.

## Comandos

```
npm run dev          # sketchbook → puerto 5180 (strictPort: true, ver por qué abajo)
npm run build         # tsc -b && vite build (build del sketchbook)
npm run type-check    # tsc -b --noEmit
```

`packages/design-system/` tiene su propio ciclo de build/publish (changesets — hay un
`.changeset/` en la raíz). No lo dispares desde acá sin que te lo pidan explícitamente.

## Cómo resuelve imports el sketchbook (`vite.config.ts`)

| Alias | Apunta a | Por qué |
|---|---|---|
| `@` | `../lila-web/src` | Import **en vivo**, no copia — así el catálogo nunca se desincroniza del código real de `lila-web`. Requiere que `lila-web` esté clonado como hermano de este repo. |
| `@sketch` | `./src` | Código propio del sketchbook (páginas, componentes de doc). |
| `@lila-care/design-system` | **no está aliasado** — se resuelve como paquete normal desde `node_modules` (dependencia `file:./packages/design-system` en `package.json`, instalada con `npm install`). | Un alias a `path.resolve(...)` rompe subpath imports como `@lila-care/design-system/tokens.css` — Vite hace *prefix-replace* de string, no resolución de paquete de Node, así que `"@lila-care/design-system"` + `"/tokens.css"` termina apuntando dentro del archivo `index.ts` en vez de al lado del paquete. Si algún día hace falta cambiar esto, mantené el mismo mecanismo que usa `lila-web` (dependencia real, no alias) para no repetir el bug. |

`server.fs.allow` incluye la raíz del workspace (`..`) y `../lila-web` explícitamente, porque
Vite por defecto solo sirve archivos dentro de la raíz del proyecto — sin esto, cualquier
import vía `@` a un archivo fuera de `lila-design-system/` devuelve 404 en `/@fs/...`.

`server.port` está fijo en `5180` con `strictPort: true` — no hay una razón de infra conocida
(OAuth callback, CORS) para que sea justo ese puerto; es simplemente el puerto que se le
asignó para no chocar con los demás proyectos del workspace (`legendary-disco-fe` 5173,
`terra-azul` 5174, etc. — ver `agents/workspace.json`). Si hace falta liberar el puerto, avisá
antes de cambiarlo: otros scripts/documentación pueden referenciarlo hardcodeado.

## Gotcha: el sketchbook importa una foto instantánea de `lila-web`, no una API estable

Como `@` apunta directo al `src/` de `lila-web` en disco, **el checkout de `lila-web` en el
momento de correr `npm run dev` acá determina qué existe**. Concretamente:

- La rama `main` de `lila-web` usa nombres de carpeta en español para los módulos de feature:
  `src/Hoy/`, `src/Calendario/`, `src/Perfil/`. Hay una rama (`feat/subscription-checkout`,
  commit `44c9076 "fix: rename Spanish module/route naming to English"`) que los renombra a
  `Today/`, `Calendar/`, `Profile/` — **todavía no mergeada a `main`**. Los imports del
  sketchbook en `src/sketch/pages/components/{PhaseHeroCard,WeekStrip,MonthGrid,
  ViewModeToggle,DayDetailPanel,CycleCard,SettingsCards}.tsx` tienen que coincidir con lo que
  `lila-web` tenga *actualmente checkouteado* — no con lo que vos creas que es la convención
  final. Si cambiás de rama en `lila-web` (o alguien más lo hace en otra terminal mientras el
  dev server de acá sigue corriendo), estos imports pueden empezar a 404 sin que hayas tocado
  nada de este repo. Diagnóstico: mirá qué carpetas existen realmente en
  `../lila-web/src/` antes de asumir cuál es el nombre correcto.
- Los primitivos de UI (`Table` y compañía) **ya no viven** en `lila-web/src/components/ui/`
  — se migraron a `packages/design-system/` (PR #29 de `lila-web`, `ae082ed`). Cualquier
  página del sketchbook que documente un primitivo de UI tiene que importar de
  `@lila-care/design-system`, nunca de `@/components/ui/...`.

## Convenciones

- Cada página de `src/sketch/pages/components/*.tsx` lleva un prop `source="..."` en
  `<ComponentPage>` que apunta al path real del archivo que está documentando — mantenelo en
  sync con el import real de la misma página cuando algo se mueve.
- Naming en inglés para identificadores de código (regla de todo el workspace); las etiquetas
  de UI del catálogo (títulos de sección, taglines) van en español, igual que el resto de
  `lila-web`.
