import { useState } from "react";
import ViewModeToggle, { type CalendarViewMode } from "@/Calendario/ViewModeToggle";
import { ComponentPage, Section, Example, PropsTable } from "../../doc";

const CODE = `
import ViewModeToggle from "@/Calendario/ViewModeToggle";

const [mode, setMode] = useState<"ambos" | "ciclo" | "luna">("ambos");
<ViewModeToggle value={mode} onChange={setMode} />
`;

function Demo() {
  const [mode, setMode] = useState<CalendarViewMode>("ambos");
  return <ViewModeToggle value={mode} onChange={setMode} />;
}

export default function ViewModeTogglePage() {
  return (
    <ComponentPage
      title="ViewModeToggle"
      tagline="Segmented control de 3 opciones — controla qué capas muestran MonthGrid y DayDetailPanel. Estado local, sin backend."
      source="Calendario/ViewModeToggle.tsx"
    >
      <Example title="Interactivo" code={CODE}>
        <Demo />
      </Example>

      <Section title="Component API">
        <PropsTable
          rows={[
            { name: "value", type: "'ambos' | 'ciclo' | 'luna'", description: "'ambos' es el default." },
            { name: "onChange", type: "(mode) => void", description: "—" },
          ]}
        />
      </Section>
    </ComponentPage>
  );
}
