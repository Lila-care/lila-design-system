import { ComponentPage, Section, PropsTable } from "../../doc";

const CONTAINER = `px-6 md:px-16 pt-14 pb-16`;

export default function SpacingPage() {
  return (
    <ComponentPage
      title="Espaciado"
      tagline="No hay una escala custom — se usa el spacing default de Tailwind, pero con una convención de padding de página repetida casi textual en cada pantalla."
      source="Convención repetida en Hoy/index.tsx, Calendario/index.tsx, Aprende/index.tsx, Perfil/index.tsx, Perfil/Privacidad.tsx"
    >
      <Section title="Padding de contenido de página">
        <div className="overflow-hidden rounded-xl border" style={{ borderColor: "rgba(61,43,80,0.1)" }}>
          <div className="p-2" style={{ background: "#F3EDF7" }}>
            <div className={`rounded-lg bg-white ${CONTAINER}`} style={{ border: "1px dashed rgba(61,43,80,0.25)" }}>
              <div className="rounded bg-white p-4 text-center text-[13px]" style={{ border: "1px solid rgba(61,43,80,0.1)", color: "#4A2D6E" }}>
                Contenido de la página
              </div>
            </div>
          </div>
        </div>
        <PropsTable
          rows={[
            { name: CONTAINER, description: "Casi universal — Hoy, Calendario, Aprende, Perfil, Privacidad usan literalmente esta misma cadena de clases." },
            { name: "max-w-[980px] / [920px] / (sin límite)", description: "El ancho máximo del contenido varía por página sin un valor compartido: Hoy usa 980px, Perfil/Privacidad 920px, Calendario no tiene límite." },
          ]}
        />
      </Section>

      <Section title="Grids más usados">
        <PropsTable
          rows={[
            { name: "grid-cols-1 lg:grid-cols-[1.7fr_1fr]", description: "Calendario — mes + panel de detalle" },
            { name: "grid-cols-1 lg:grid-cols-2", description: "Perfil (CycleCard + NotificationsCard), Privacidad (qué guardamos / qué no)" },
            { name: "grid-cols-1 sm:grid-cols-3", description: "Hoy — acciones rápidas" },
            { name: "grid-cols-7", description: "Calendario — filas de semana/día" },
            { name: "grid-cols-2 (inline style, no Tailwind)", description: "EmptyState — chips de sugerencias" },
          ]}
        />
      </Section>
    </ComponentPage>
  );
}
