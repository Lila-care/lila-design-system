import { ComponentPage, Section, LiveFrame, LiveFrameNote } from "../../doc";

export default function HoyPage() {
  return (
    <ComponentPage
      title="Hoy"
      tagline="Pantalla de inicio — orquesta PhaseHeroCard, WeekStrip y las acciones rápidas vía el hook useHoy() (fetch real a ms-lila)."
      source="Hoy/index.tsx (hook: Hoy/useHoy.ts)"
    >
      <Section title="Vista completa">
        <LiveFrame route="/hoy" width={480} height={820} label="Hoy" />
        <LiveFrameNote />
      </Section>
    </ComponentPage>
  );
}
