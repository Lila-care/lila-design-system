// Import en vivo desde el propio paquete publicado (dependencia real, no alias de Vite —
// ver vite.config.ts / CLAUDE.md). Mismo specifier que usa lila-web hoy.
import { useState } from "react";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@lila-care/design-system";
import { ComponentPage, Section, Example, PropsTable } from "../../doc";

const RANGE_OPTIONS = [
  { value: "7", label: "7 días" },
  { value: "30", label: "30 días" },
  { value: "90", label: "90 días" },
];

const RANGE_CODE = `
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@lila-care/design-system";

const RANGE_OPTIONS = [
  { value: 7, label: "7 días" },
  { value: 30, label: "30 días" },
  { value: 90, label: "90 días" },
];

<Select value={String(value)} onValueChange={(v) => onChange(Number(v))} disabled={disabled}>
  <SelectTrigger className="w-32" data-testid="range-selector">
    <SelectValue />
  </SelectTrigger>
  <SelectContent>
    {RANGE_OPTIONS.map((opt) => (
      <SelectItem key={opt.value} value={String(opt.value)}>
        {opt.label}
      </SelectItem>
    ))}
  </SelectContent>
</Select>
`;

function RangeSelectorDemo() {
  const [value, setValue] = useState("30");
  return (
    <Select value={value} onValueChange={setValue}>
      <SelectTrigger className="w-32" data-testid="range-selector-demo">
        <SelectValue />
      </SelectTrigger>
      <SelectContent>
        {RANGE_OPTIONS.map((opt) => (
          <SelectItem key={opt.value} value={opt.value}>
            {opt.label}
          </SelectItem>
        ))}
      </SelectContent>
    </Select>
  );
}

export default function SelectPage() {
  return (
    <ComponentPage
      title="Select"
      tagline="Wrapper de Radix Select — el único uso real hoy es el selector de rango de días del dashboard de Admin (RangeSelector.tsx)."
      source="packages/design-system/src/components/select.tsx"
    >
      <Example
        title="Selector de rango (uso real)"
        description="RangeSelector.tsx en el dashboard de Admin — value/onValueChange controlado como string (Select de Radix no soporta number), con el cast a number en el propio onChange del caller."
        code={RANGE_CODE}
      >
        <RangeSelectorDemo />
      </Example>

      <Section title="Component API">
        <PropsTable
          heading="Select, SelectGroup, SelectValue"
          rows={[
            {
              name: "Select",
              type: "React.ComponentProps<typeof SelectPrimitive.Root>",
              description:
                "Componente raíz sin estilos propios — pasa directo a Radix Select.Root (value, onValueChange, disabled, etc.).",
            },
            {
              name: "SelectGroup",
              type: "React.ComponentProps<typeof SelectPrimitive.Group>",
              description:
                "Agrupa SelectItem con un SelectLabel opcional. Sin uso real hoy en lila-web.",
            },
            {
              name: "SelectValue",
              type: "React.ComponentProps<typeof SelectPrimitive.Value>",
              description:
                "Muestra la opción seleccionada dentro de SelectTrigger.",
            },
          ]}
        />
        <PropsTable
          heading="SelectTrigger"
          rows={[
            {
              name: "size",
              type: '"default" | "sm"',
              default: '"default"',
              description:
                "Controla la altura (h-9 vs h-8) vía data-size. RangeSelector.tsx usa el tamaño default.",
            },
            {
              name: "className",
              type: "string",
              description:
                "Se combina con los estilos base vía cn(). RangeSelector.tsx fija w-32.",
            },
            {
              name: "...props",
              type: "React.ComponentProps<typeof SelectPrimitive.Trigger>",
              description:
                "Incluye children (normalmente SelectValue) y cualquier prop nativa de button vía Radix.",
            },
          ]}
        />
        <PropsTable
          heading="SelectContent"
          rows={[
            {
              name: "position",
              type: '"item-aligned" | "popper"',
              default: '"item-aligned"',
              description:
                "Estrategia de posicionamiento del menú desplegable, heredada de Radix.",
            },
            {
              name: "align",
              type: '"start" | "center" | "end"',
              default: '"center"',
              description:
                "Alineación horizontal del contenido respecto al trigger.",
            },
            {
              name: "...props",
              type: "React.ComponentProps<typeof SelectPrimitive.Content>",
              description:
                "Se renderiza en un SelectPrimitive.Portal; incluye scroll buttons arriba/abajo automáticos.",
            },
          ]}
        />
        <PropsTable
          heading="SelectItem"
          rows={[
            {
              name: "value",
              type: "string",
              description:
                "Requerido por Radix. RangeSelector.tsx lo castea con String(days) porque Select solo trabaja con strings.",
            },
            {
              name: "...props",
              type: "React.ComponentProps<typeof SelectPrimitive.Item>",
              description: "Incluye disabled y children (el label visible).",
            },
          ]}
        />
        <PropsTable
          heading="SelectLabel, SelectSeparator, SelectScrollUpButton, SelectScrollDownButton"
          rows={[
            {
              name: "className / ...props",
              type: "React.ComponentProps<typeof SelectPrimitive.*>",
              description:
                "Sub-componentes de soporte para agrupar opciones (SelectLabel/SelectSeparator) y scroll de listas largas (SelectScrollUpButton/SelectScrollDownButton) — renderizados automáticamente dentro de SelectContent. Sin uso real hoy en lila-web.",
            },
          ]}
        />
      </Section>
    </ComponentPage>
  );
}
