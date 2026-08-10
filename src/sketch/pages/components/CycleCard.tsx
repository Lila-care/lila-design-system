import { useState } from "react";
import CycleCard from "@/Perfil/CycleCard";
import { ComponentPage, Section, Example, PropsTable } from "../../doc";

const SUMMARY = {
  cycle: { averageLength: 28 },
  lastPeriod: { start: "2026-08-06", length: 5 },
};

const CODE = `
import CycleCard from "@/Perfil/CycleCard";

<CycleCard
  summary={summary}
  saving={false}
  saveError={null}
  saveSuccess={false}
  onSave={(values) => api.reportPeriodStart(values)}
/>
`;

function Demo({ saving, saveError, saveSuccess }: { saving?: boolean; saveError?: string | null; saveSuccess?: boolean }) {
  const [state, setState] = useState({ saving: !!saving, saveError: saveError ?? null, saveSuccess: !!saveSuccess });
  return (
    <CycleCard
      summary={SUMMARY as never}
      saving={state.saving}
      saveError={state.saveError}
      saveSuccess={state.saveSuccess}
      onSave={() => setState({ saving: false, saveError: null, saveSuccess: true })}
    />
  );
}

export default function CycleCardPage() {
  return (
    <ComponentPage
      title="CycleCard"
      tagline="Formulario de última regla y duración de ciclo en Perfil — 100% controlado desde afuera (saving/saveError/saveSuccess son props, no estado propio de red)."
      source="Perfil/CycleCard.tsx"
    >
      <Example title="Idle — envía el formulario para ver el estado de éxito real" code={CODE}>
        <Demo />
      </Example>

      <Section title="Estados de guardado">
        <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
          <Example title="Guardando" code={`<CycleCard saving ... />`}>
            <Demo saving />
          </Example>
          <Example title="Error" code={`<CycleCard saveError="No pudimos guardar." ... />`}>
            <Demo saveError="No pudimos guardar." />
          </Example>
        </div>
      </Section>

      <Section title="Component API">
        <PropsTable
          rows={[
            { name: "summary", type: "PeriodSummary | null", description: "Precarga los valores iniciales del form. null = primera vez (usuaria sin datos aún)." },
            { name: "saving", type: "boolean", description: "Deshabilita el submit y cambia el texto del botón." },
            { name: "saveError", type: "string | null", description: "—" },
            { name: "saveSuccess", type: "boolean", description: "—" },
            { name: "onSave", type: "(values) => void", description: "{ lastPeriodStart, cycleLength, periodLength }" },
          ]}
        />
      </Section>
    </ComponentPage>
  );
}
