import WeekStrip from "@/Hoy/WeekStrip";
import { ComponentPage, Section, Example, PropsTable } from "../../doc";

const WEEK = [
  { date: "2026-08-04", dayOfWeek: "TUESDAY", dayOfWeekIndex: 2, isToday: false, phaseName: "LUTEAL" },
  { date: "2026-08-05", dayOfWeek: "WEDNESDAY", dayOfWeekIndex: 3, isToday: false, phaseName: "LUTEAL" },
  { date: "2026-08-06", dayOfWeek: "THURSDAY", dayOfWeekIndex: 4, isToday: false, phaseName: "MENSTRUATION" },
  { date: "2026-08-07", dayOfWeek: "FRIDAY", dayOfWeekIndex: 5, isToday: false, phaseName: "MENSTRUATION" },
  { date: "2026-08-08", dayOfWeek: "SATURDAY", dayOfWeekIndex: 6, isToday: false, phaseName: "MENSTRUATION" },
  { date: "2026-08-09", dayOfWeek: "SUNDAY", dayOfWeekIndex: 0, isToday: true, phaseName: "MENSTRUATION" },
  { date: "2026-08-10", dayOfWeek: "MONDAY", dayOfWeekIndex: 1, isToday: false, phaseName: "MENSTRUATION" },
] as const;

const CODE = `
import WeekStrip from "@/Hoy/WeekStrip";

<WeekStrip week={weekDays} /> // DayPhaseUiModel[], desde GET /user-phase/metrics/:date
`;

export default function WeekStripPage() {
  return (
    <ComponentPage
      title="WeekStrip"
      tagline="Tira de 7 días con un punto de color por fase — usada en Hoy, debajo del hero."
      source="Hoy/WeekStrip.tsx"
    >
      <Example title="Con datos de la semana" code={CODE}>
        <WeekStrip week={WEEK as never} />
      </Example>

      <Example title="Estado vacío" code={`<WeekStrip week={[]} />`}>
        <WeekStrip week={[]} />
      </Example>

      <Section title="Component API">
        <PropsTable
          rows={[
            { name: "week", type: "DayPhaseUiModel[]", description: "{ date, dayOfWeek, dayOfWeekIndex, isToday, phaseName }[] — arreglo vacío muestra 'Todavía no hay datos de tu semana.'" },
          ]}
        />
      </Section>
    </ComponentPage>
  );
}
