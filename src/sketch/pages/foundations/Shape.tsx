import { ComponentPage, Section, Example, PropsTable } from "../../doc";

const THEME_RADIUS = [
  { name: "rounded-sm", px: "4px", formula: "calc(var(--radius) - 4px)" },
  { name: "rounded-md", px: "6px", formula: "calc(var(--radius) - 2px)" },
  { name: "rounded-lg", px: "8px", formula: "var(--radius)" },
  { name: "rounded-xl", px: "12px", formula: "calc(var(--radius) + 4px)" },
];

const AD_HOC_RADIUS = [
  { name: "rounded-2xl", px: "16px", usage: "×16 — chips, day cells, modales" },
  { name: "rounded-3xl", px: "24px", usage: "×19 — el radio de \"card\" dominante en toda la app" },
  { name: "rounded-full", px: "9999px", usage: "×25 — avatares, dots, switches, pills, spinner" },
  { name: "rounded-[10px] / [16px] / [26px] / [32px]…", px: "arbitrario", usage: "One-offs por componente (chat bubble tails, composer pill, DayDetailPanel)" },
];

const BASIC_CODE = `
:root {
  --radius: 0.5rem; /* faltaba por completo — sm/md/lg/xl resolvían a 0 en toda la app */
}
`;

const BUG_CODE = `
// Antes del fix: --radius nunca definido -> calc(var(--radius) + 4px) es inválido
// -> el navegador descarta la declaración -> border-radius vuelve a su valor inicial: 0.
.rounded-xl { border-radius: var(--radius-xl); } /* renderizaba en 0px, esquinas cuadradas */
`;

export default function ShapePage() {
  return (
    <ComponentPage
      title="Forma"
      tagline='Bug real corregido en esta ronda: --radius nunca estaba definido, así que rounded-sm/md/lg/xl renderizaban con 0px en TODA la app (ej. los ítems del Sidebar).'
      source="index.css (@theme inline)"
    >
      <Example
        title="El fix"
        description="Una línea agregada a :root — sin esto, la escala completa de radios del tema quedaba rota."
        code={BASIC_CODE}
      >
        <div className="flex flex-wrap items-center gap-4">
          {THEME_RADIUS.map((r) => (
            <div key={r.name} className="flex flex-col items-center gap-2">
              <div
                className="flex h-16 w-16 items-center justify-center text-[11px] font-medium"
                style={{ background: "#F8EAFE", color: "#4A2D6E", borderRadius: r.px }}
              >
                {r.px}
              </div>
              <code className="text-[11px]" style={{ color: "#8A8194" }}>{r.name}</code>
            </div>
          ))}
        </div>
      </Example>

      <Section title="Antes del fix (referencia)">
        <PropsTable
          heading="Cómo se rompía"
          rows={[{ name: "calc(var(--radius) + 4px)", description: "Con --radius indefinida, calc() produce un valor inválido — el navegador lo descarta y vuelve al valor inicial de border-radius: 0." }]}
        />
        <div className="mt-3">
          <Example code={BUG_CODE}>
            <div className="flex items-center gap-3">
              <div className="flex h-16 w-16 items-center justify-center text-[11px]" style={{ background: "#F8EAFE", color: "#4A2D6E", borderRadius: 0 }}>
                0px (bug)
              </div>
              <span style={{ color: "#A79FB2" }}>→</span>
              <div className="flex h-16 w-16 items-center justify-center text-[11px]" style={{ background: "#F8EAFE", color: "#4A2D6E", borderRadius: 12 }}>
                12px (fix)
              </div>
            </div>
          </Example>
        </div>
      </Section>

      <Section title="Radios ad-hoc (fuera de la escala del tema)">
        <PropsTable
          heading="Estos NO dependen de --radius — son valores fijos de Tailwind, nunca se rompieron"
          rows={AD_HOC_RADIUS.map((r) => ({ name: `${r.name} (${r.px})`, description: r.usage }))}
        />
      </Section>
    </ComponentPage>
  );
}
