// Import en vivo desde el propio paquete publicado (dependencia real, no alias de Vite —
// ver vite.config.ts / CLAUDE.md). Mismo specifier que usa lila-web hoy.
import { Users, Repeat } from "lucide-react";
import { KPICard } from "@lila-care/design-system";
import { ComponentPage, Section, Example, PropsTable } from "../../doc";

const SPARKLINE_DATA = [12, 18, 14, 22, 19, 26, 31];

const BASIC_CODE = `
import { KPICard } from "@lila-care/design-system";
import { Users } from "lucide-react";

<KPICard
  label="Nuevas usuarias"
  value={128}
  icon={Users}
  delta={{ value: "+12% vs. semana anterior", direction: "up" }}
  sparklineData={[12, 18, 14, 22, 19, 26, 31]}
/>
`;

const NO_DELTA_CODE = `
// showDelta=false — caso "Usuarias activas": no hay fila de delta.
<KPICard
  label="Usuarias activas"
  value={342}
  icon={Users}
  showDelta={false}
  sparklineData={[12, 18, 14, 22, 19, 26, 31]}
/>
`;

const NO_SPARKLINE_CODE = `
// showSparkline=false — caso "Retención 30d": el sparkline no se renderiza y NO reserva
// espacio (a diferencia de showDelta=false).
<KPICard
  label="Retención 30d"
  value="74%"
  icon={Repeat}
  delta={{ value: "-3% vs. mes anterior", direction: "down" }}
  showSparkline={false}
/>
`;

export default function KPICardPage() {
  return (
    <ComponentPage
      title="KPICard"
      tagline="Tarjeta de métrica para el dashboard de Admin — valor prominente, delta opcional con dirección, y sparkline opcional. Compone Card variant='neo' + CardIcon del design system."
      source="packages/design-system/src/components/kpi-card.tsx"
    >
      <Example
        title="Con delta y sparkline"
        description="Caso base: label, value, icon, delta con dirección up/down, y sparklineData."
        previewBackground="#e8e6ee"
        code={BASIC_CODE}
      >
        <div className="w-full max-w-xs">
          <KPICard
            label="Nuevas usuarias"
            value={128}
            icon={Users}
            delta={{ value: "+12% vs. semana anterior", direction: "up" }}
            sparklineData={SPARKLINE_DATA}
          />
        </div>
      </Example>

      <Example
        title='showDelta={false} — "Usuarias activas"'
        description="No se renderiza la fila de delta cuando no aplica a la métrica."
        previewBackground="#e8e6ee"
        code={NO_DELTA_CODE}
      >
        <div className="w-full max-w-xs">
          <KPICard
            label="Usuarias activas"
            value={342}
            icon={Users}
            showDelta={false}
            sparklineData={SPARKLINE_DATA}
          />
        </div>
      </Example>

      <Example
        title='showSparkline={false} — "Retención 30d"'
        description="El sparkline no se renderiza y no reserva espacio (contenedor completo ausente, no solo oculto). direction='down' usa el color destructivo existente."
        previewBackground="#e8e6ee"
        code={NO_SPARKLINE_CODE}
      >
        <div className="w-full max-w-xs">
          <KPICard
            label="Retención 30d"
            value="74%"
            icon={Repeat}
            delta={{ value: "-3% vs. mes anterior", direction: "down" }}
            showSparkline={false}
          />
        </div>
      </Example>

      <Section title="Component API">
        <PropsTable
          heading="KPICard"
          rows={[
            {
              name: "label",
              type: "string",
              description: "Etiqueta de la métrica.",
            },
            {
              name: "value",
              type: "string | number",
              description: "Valor prominente de la métrica.",
            },
            {
              name: "icon",
              type: "LucideIcon",
              description:
                "Ícono opcional dentro de un CardIcon (círculo raised).",
            },
            {
              name: "delta",
              type: '{ value: string; direction: "up" | "down" }',
              description:
                'direction="up" usa text-emerald-600 (no existe token semántico de éxito hoy) + ArrowUp; direction="down" usa el token --color-destructive + ArrowDown.',
            },
            {
              name: "showDelta",
              type: "boolean",
              default: "true",
              description: "En false, no se renderiza la fila de delta.",
            },
            {
              name: "sparklineData",
              type: "number[]",
              description:
                "Serie de puntos para el mini gráfico de línea (recharts).",
            },
            {
              name: "showSparkline",
              type: "boolean",
              default: "true",
              description:
                "En false, el sparkline no se renderiza y tampoco reserva su espacio.",
            },
            {
              name: "className",
              type: "string",
              description:
                "Se combina con las clases del Card contenedor vía cn().",
            },
          ]}
        />
      </Section>
    </ComponentPage>
  );
}
