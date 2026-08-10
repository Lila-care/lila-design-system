# Lila — Design System

Catálogo en vivo de tokens, componentes y patrones reales de
[`lila-web`](https://github.com/Lila-care/lila-web) — no son copias: se importan directo
desde el código fuente de `lila-web`, así el catálogo nunca se desincroniza. Formato
inspirado en [Catalyst](https://catalyst.tailwindui.com/docs/avatar): cada pieza tiene su
propia página con preview en vivo, bloque de código y tabla de props.

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

Abre `http://localhost:5180`. Para las páginas de **Patrones** (composiciones de página
completa como Hoy, Chat, Calendario, Admin), corre también `lila-web` en paralelo
(`npm run dev` en `lila-web/`, puerto 5173) — se embeben vía `<iframe>` al dev server real
en vez de reconstruirse con mocks, para que siempre reflejen el estado verdadero (incluyendo
loading/error genuinos) y nunca se desactualicen.

## Cómo funciona

`vite.config.ts` define el alias `@` apuntando a `../lila-web/src` (en vez de al propio
`src/` de esta app), así que cualquier `import ... from "@/..."` en este proyecto resuelve
contra el código fuente real de `lila-web`. El alias `@sketch` apunta al `src/` propio de
este sketchbook.

**Gotcha de Tailwind v4 resuelto:** por defecto, Tailwind v4 solo escanea clases dentro de
la carpeta del proyecto — nunca llega a `../lila-web/src` aunque Vite sí lo resuelva y
renderice. Eso hacía que clases usadas *solo* en componentes importados (ej. `w-7 h-7` en el
avatar del chat) nunca generaran su regla CSS. Se resuelve con una directiva `@source` en
`src/index.css` apuntando a `../../lila-web/src`. Si algo se ve "sin estilos" al importar un
componente nuevo, esta es la primera sospecha.

### Estructura de navegación

Cada entrada de `src/sketch/registry.ts` es una página independiente con su propia ruta
(`wouter`), agrupada en el sidebar por categoría:

- **Fundamentos** (`src/sketch/pages/foundations/`) — Color, Tipografía, Forma, Espaciado,
  Elevación, Iconografía, Breakpoints. La mayoría son valores hex transcritos a mano (no hay
  un archivo central de tokens en `lila-web`); los colores de fase del ciclo sí se importan
  en vivo desde `lib/phaseInfo.ts`.
- **Componentes** (`src/sketch/pages/components/`) — piezas presentacionales sin fetch
  propio, montadas en vivo con props mock. Cubre Chat, Hoy, Calendario, Perfil y Admin.
- **Patrones** (`src/sketch/pages/patterns/`) — `Sidebar`/`AccountBanner` se montan en vivo
  (sin red, con `AuthProvider` en modo guest); `MobileNav` y las páginas completas
  (Hoy/Chat/Calendario/Aprende/Perfil/Privacidad/Admin) se embeben vía `<iframe>` al dev
  server real de `lila-web`, porque dependen de breakpoints de viewport reales o de hooks
  con fetch real a `ms-lila` que no vale la pena remockear.

El scaffolding compartido (`src/sketch/doc/`) provee `ComponentPage`, `Section`, `Example`
(preview + código con syntax highlighting vía `prism-react-renderer`), `PropsTable` y
`LiveFrame` (el wrapper de iframe para Patrones).

### Hallazgos documentados, no solo catalogados

Donde el código real tiene inconsistencias o bugs, esta página los señala en vez de
esconderlos: dos morados "primary" en competencia (`#9B72C8` vs. el token `#7e3565`), el
prop `upgradePromptLimit` que nunca se usa, el ícono de fase lunar faltante en
`DayDetailPanel` (mismo patrón que se corrigió en `PhaseHeroCard`), etc. Si encuentras algo
así al agregar una página nueva, anótalo en vez de omitirlo — ese es el punto del catálogo.
