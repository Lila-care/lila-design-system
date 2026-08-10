import DayDetailPanel from "@/Calendario/DayDetailPanel";
import { ComponentPage, Section, Example, PropsTable } from "../../doc";

const DAY_DATA = {
  date: "2026-08-09",
  dayOfWeek: "SUNDAY",
  dayOfWeekIndex: 0,
  isToday: true,
  phaseName: "OVULATION",
};

const CODE = `
import DayDetailPanel from "@/Calendario/DayDetailPanel";

<DayDetailPanel date="2026-08-09" dayData={dayData} viewMode="ambos" />
`;

export default function DayDetailPanelPage() {
  return (
    <ComponentPage
      title="DayDetailPanel"
      tagline="Panel de detalle al elegir un día en Calendario — mismo bug de ícono lunar faltante que se corrigió en PhaseHeroCard, todavía sin corregir aquí (ver nota abajo)."
      source="Calendario/DayDetailPanel.tsx"
    >
      <Example title="Con día seleccionado" code={CODE}>
        <div className="max-w-sm">
          <DayDetailPanel date="2026-08-09" dayData={DAY_DATA as never} viewMode="ambos" />
        </div>
      </Example>

      <Example title="Sin selección" code={`<DayDetailPanel date={null} dayData={undefined} viewMode="ambos" />`}>
        <div className="max-w-sm">
          <DayDetailPanel date={null} dayData={undefined} viewMode="ambos" />
        </div>
      </Example>

      <Section title="⚠ Hallazgo pendiente">
        <p className="text-[13.5px]" style={{ color: "#8B3A52" }}>
          El bloque "Luna" de esta tarjeta (arriba: "{"{fase} · {N}%"}"") tiene exactamente el mismo problema que
          tenía <code>PhaseHeroCard</code> antes de este fix: ningún ícono acompaña el texto, a pesar de que el layout
          (<code>flex items-center gap-2.5</code>) sugiere que se pensó con uno. Recomendación: extraer el <code>MoonPhaseIcon</code> de
          PhaseHeroCard a un archivo compartido y reusarlo aquí también.
        </p>
      </Section>

      <Section title="Component API">
        <PropsTable
          rows={[
            { name: "date", type: "string | null", description: "null muestra el estado vacío 'Selecciona un día...'." },
            { name: "dayData", type: "DayPhaseUiModel | undefined", description: "Puede ser undefined incluso con date presente (día sin datos de fase)." },
            { name: "viewMode", type: "'ambos' | 'ciclo' | 'luna'", description: "'luna' oculta la fase de ciclo y usa un gradiente neutro; 'ciclo' oculta el bloque de luna." },
          ]}
        />
      </Section>
    </ComponentPage>
  );
}
