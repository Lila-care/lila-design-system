import { useState } from "react";
import MonthGrid from "@/Calendario/MonthGrid";
import type { CalendarViewMode } from "@/Calendario/ViewModeToggle";
import { ComponentPage, Section, Example, PropsTable } from "../../doc";

const PHASE_CYCLE = ["MENSTRUATION", "MENSTRUATION", "MENSTRUATION", "MENSTRUATION", "MENSTRUATION", "FOLLICULAR", "FOLLICULAR", "FOLLICULAR", "FOLLICULAR", "FOLLICULAR", "FOLLICULAR", "FOLLICULAR", "FOLLICULAR", "OVULATION", "OVULATION", "OVULATION", "LUTEAL", "LUTEAL", "LUTEAL", "LUTEAL", "LUTEAL", "LUTEAL", "LUTEAL", "LUTEAL", "LUTEAL", "LUTEAL", "LUTEAL", "LUTEAL"] as const;

function mockDays(year: number, month: number) {
  const daysInMonth = new Date(Date.UTC(year, month + 1, 0)).getUTCDate();
  const today = 9;
  return Array.from({ length: daysInMonth }, (_, i) => {
    const d = i + 1;
    return {
      date: `${year}-${String(month + 1).padStart(2, "0")}-${String(d).padStart(2, "0")}`,
      dayOfWeek: "MONDAY",
      dayOfWeekIndex: 1,
      isToday: d === today,
      phaseName: PHASE_CYCLE[i % PHASE_CYCLE.length],
    };
  });
}

const CODE = `
import MonthGrid from "@/Calendario/MonthGrid";

<MonthGrid
  year={2026} month={7} days={days} selectedDate={selectedDate}
  viewMode="ambos" onSelectDate={setSelectedDate}
  onPrevMonth={goPrev} onNextMonth={goNext}
/>
`;

function Demo({ viewMode }: { viewMode: CalendarViewMode }) {
  const [{ year, month }, setYm] = useState({ year: 2026, month: 7 });
  const [selectedDate, setSelectedDate] = useState<string | null>("2026-08-10");

  return (
    <MonthGrid
      year={year}
      month={month}
      days={mockDays(year, month) as never}
      selectedDate={selectedDate}
      viewMode={viewMode}
      onSelectDate={setSelectedDate}
      onPrevMonth={() => setYm((s) => (s.month === 0 ? { year: s.year - 1, month: 11 } : { year: s.year, month: s.month - 1 }))}
      onNextMonth={() => setYm((s) => (s.month === 11 ? { year: s.year + 1, month: 0 } : { year: s.year, month: s.month + 1 }))}
    />
  );
}

export default function MonthGridPage() {
  return (
    <ComponentPage
      title="MonthGrid"
      tagline='Interactivo — navega de mes y selecciona un día. El fix reciente de --radius corrigió las flechas de navegación, que antes colapsaban a 0px de ancho.'
      source="Calendario/MonthGrid.tsx"
    >
      <Example title='Modo "Ambos" — fondo teñido por fase' description="Click en las flechas o en un día para probar la interacción real." code={CODE}>
        <Demo viewMode="ambos" />
      </Example>

      <Section title='Modo "Ciclo" — solo borde de fase (fondo neutro)'>
        <Example code={`<MonthGrid viewMode="ciclo" ... />`}>
          <Demo viewMode="ciclo" />
        </Example>
      </Section>

      <Section title='Modo "Luna" — sin colores de fase, solo íconos de luna llena/nueva'>
        <Example code={`<MonthGrid viewMode="luna" ... />`}>
          <Demo viewMode="luna" />
        </Example>
      </Section>

      <Section title="Component API">
        <PropsTable
          rows={[
            { name: "year, month", type: "number", description: "month es 0-indexed (0 = enero)." },
            { name: "days", type: "DayPhaseUiModel[]", description: "Días con datos — los que faltan se renderizan neutros." },
            { name: "selectedDate", type: "string | null", description: "ISO date del día con anillo de selección." },
            { name: "viewMode", type: "'ambos' | 'ciclo' | 'luna'", description: "Controla si se muestra tinte de fase, borde de fase, o íconos de luna." },
            { name: "onSelectDate, onPrevMonth, onNextMonth", type: "callbacks", description: "—" },
          ]}
        />
      </Section>
    </ComponentPage>
  );
}
