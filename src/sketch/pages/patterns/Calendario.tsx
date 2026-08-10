import { ComponentPage, Section, LiveFrame, LiveFrameNote } from "../../doc";

export default function CalendarioPage() {
  return (
    <ComponentPage
      title="Calendario"
      tagline="ViewModeToggle + MonthGrid + DayDetailPanel, orquestados por useCalendario() (fetch real a ms-lila)."
      source="Calendario/index.tsx (hook: Calendario/useCalendario.ts)"
    >
      <Section title="Vista completa">
        <LiveFrame route="/calendario" width={520} height={820} label="Calendario" />
        <LiveFrameNote />
      </Section>
    </ComponentPage>
  );
}
