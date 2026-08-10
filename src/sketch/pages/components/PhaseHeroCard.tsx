import PhaseHeroCard from "@/Hoy/PhaseHeroCard";
import { ComponentPage, Section, Example, PropsTable } from "../../doc";

const CODE = `
import PhaseHeroCard from "@/Hoy/PhaseHeroCard";

<PhaseHeroCard phase="OVULATION" cycleDay={14} />
`;

export default function PhaseHeroCardPage() {
  return (
    <ComponentPage
      title="PhaseHeroCard"
      tagline="El hero de la pantalla Hoy — gradiente de fase, día del ciclo y un mini-widget de fase lunar con ícono propio (silueta + sombra desplazada, sin depender de un set de 8 íconos)."
      source="Hoy/PhaseHeroCard.tsx"
    >
      <Example title="Con datos de ciclo" code={CODE}>
        <PhaseHeroCard phase="OVULATION" cycleDay={14} />
      </Example>

      <Section title="Las 4 fases">
        <div className="flex flex-col gap-4">
          <Example title="Menstrual" code={`<PhaseHeroCard phase="MENSTRUATION" cycleDay={2} />`}>
            <PhaseHeroCard phase="MENSTRUATION" cycleDay={2} />
          </Example>
          <Example title="Folicular" code={`<PhaseHeroCard phase="FOLLICULAR" cycleDay={8} />`}>
            <PhaseHeroCard phase="FOLLICULAR" cycleDay={8} />
          </Example>
          <Example title="Lútea" code={`<PhaseHeroCard phase="LUTEAL" cycleDay={22} />`}>
            <PhaseHeroCard phase="LUTEAL" cycleDay={22} />
          </Example>
          <Example title="Sin datos de fase" description="phase={null} — fallback neutro, verificado WCAG AA." code={`<PhaseHeroCard phase={null} cycleDay={null} />`}>
            <PhaseHeroCard phase={null} cycleDay={null} />
          </Example>
        </div>
      </Section>

      <Section title="Component API">
        <PropsTable
          rows={[
            { name: "phase", type: "PhaseName | null", description: "MENSTRUATION | FOLLICULAR | OVULATION | LUTEAL | null (sin datos)." },
            { name: "cycleDay", type: "number | null", description: "Se muestra como 'Día {N}' en Playfair Display 56px, o 'Sin datos' si es null." },
          ]}
        />
      </Section>
    </ComponentPage>
  );
}
