// Import en vivo desde el propio paquete publicado (dependencia real, no alias de Vite —
// ver vite.config.ts / CLAUDE.md). Mismo specifier que usa lila-web hoy.
import { CategoryBreakdown } from "@lila-care/design-system";
import { ComponentPage, Section, Example, PropsTable } from "../../doc";

const BASIC_CODE = `
import { CategoryBreakdown } from "@lila-care/design-system";

<CategoryBreakdown
  categories={[
    { label: "Premium mensual", value: 320 },
    { label: "Premium anual", value: 180 },
    { label: "Trial", value: 96 },
    { label: "Free", value: 542 },
  ]}
/>
`;

const HIDDEN_CODE = `
// show: false — caso "Suscripciones por plan": solo 2 de 4 categorías visibles. La fila Y su
// segmento en la barra desaparecen; las proporciones se recalculan sobre las visibles.
<CategoryBreakdown
  categories={[
    { label: "Premium mensual", value: 320 },
    { label: "Premium anual", value: 180, show: false },
    { label: "Trial", value: 96, show: false },
    { label: "Free", value: 542 },
  ]}
/>
`;

export default function CategoryBreakdownPage() {
  return (
    <ComponentPage
      title="CategoryBreakdown"
      tagline="Barra apilada + leyenda para mostrar la distribución proporcional de hasta 4 categorías (ej. suscripciones por plan)."
      source="packages/design-system/src/components/category-breakdown.tsx"
    >
      <Example
        title="4 categorías"
        description="Cada categoría toma un color fijo por posición: --chart-1..4."
        code={BASIC_CODE}
      >
        <div className="w-full max-w-md">
          <CategoryBreakdown
            categories={[
              { label: "Premium mensual", value: 320 },
              { label: "Premium anual", value: 180 },
              { label: "Trial", value: 96 },
              { label: "Free", value: 542 },
            ]}
          />
        </div>
      </Example>

      <Example
        title='show=false — "Suscripciones por plan"'
        description="Ocultar una categoría quita su fila de la leyenda y su segmento de la barra; el resto recalcula proporciones solo entre las visibles. El color de cada categoría se mantiene estable por posición original, no se reasigna."
        code={HIDDEN_CODE}
      >
        <div className="w-full max-w-md">
          <CategoryBreakdown
            categories={[
              { label: "Premium mensual", value: 320 },
              { label: "Premium anual", value: 180, show: false },
              { label: "Trial", value: 96, show: false },
              { label: "Free", value: 542 },
            ]}
          />
        </div>
      </Example>

      <Section title="Component API">
        <PropsTable
          heading="CategoryBreakdown"
          rows={[
            {
              name: "categories",
              type: "Array<{ label: string; value: number; show?: boolean }>",
              description:
                "Máximo 4 categorías (solo las 4 primeras posiciones reciben color de --chart-1..4). show por defecto true.",
            },
            {
              name: "className",
              type: "string",
              description: "Se combina con las clases del contenedor vía cn().",
            },
          ]}
        />
      </Section>
    </ComponentPage>
  );
}
