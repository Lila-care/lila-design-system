import { ComponentPage, PropsTable } from "../../doc";

export default function BreakpointsPage() {
  return (
    <ComponentPage
      title="Breakpoints"
      tagline="Solo se usan los 3 breakpoints por defecto de Tailwind — no hay ninguno custom en el proyecto (no existe tailwind.config.*, todo vive en @theme inline de index.css, y ahí no se redefine screens)."
      source="Defaults de Tailwind v4 — sin override en index.css"
    >
      <PropsTable
        heading="Uso real"
        rows={[
          { name: "sm (640px)", description: "Grids de 2-3 columnas en tarjetas y sugerencias (Hoy, EmptyState)." },
          { name: "md (768px)", description: "El único breakpoint estructural — corte entre Sidebar desktop y MobileNav. Todo lo demás en md es ajuste tipográfico/padding." },
          { name: "lg (1024px)", description: "Layout de 2 columnas en Calendario (mes + detalle) y Perfil (cards)." },
        ]}
      />
    </ComponentPage>
  );
}
