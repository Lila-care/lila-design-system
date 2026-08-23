// Import en vivo desde el propio paquete publicado (dependencia real, no alias de Vite —
// ver vite.config.ts / CLAUDE.md). Mismo specifier que usa lila-web hoy.
import { Skeleton } from "@lila-care/design-system";
import { ComponentPage, Section, Example, PropsTable } from "../../doc";

const SIZES_CODE = `
import { Skeleton } from "@lila-care/design-system";

<Skeleton className="h-4 w-32" />   {/* título de card — DashboardPage.tsx */}
<Skeleton className="h-10 w-32" />  {/* valor grande — DashboardPage.tsx */}
<Skeleton className="h-12 w-full" /> {/* fila de tabla/lista — UsersPage.tsx */}
`;

export default function SkeletonPage() {
  return (
    <ComponentPage
      title="Skeleton"
      tagline="Placeholder de carga sin variantes — el tamaño lo define className (h-/w-) según lo que reemplaza."
      source="packages/design-system/src/components/skeleton.tsx"
    >
      <Example
        title="Tamaños en uso real"
        description="DashboardPage.tsx, ReportsPage.tsx y UsersPage.tsx componen varios Skeleton con distinto h-/w- para armar el estado de carga de cada sección."
        code={SIZES_CODE}
      >
        <div className="flex w-full max-w-sm flex-col gap-3">
          <Skeleton className="h-4 w-32" />
          <Skeleton className="h-10 w-32" />
          <Skeleton className="h-12 w-full" />
        </div>
      </Example>

      <Section title="Component API">
        <PropsTable
          heading="Skeleton"
          rows={[
            {
              name: "className",
              type: "string",
              description:
                "Único punto de control del componente — define alto, ancho y radio del placeholder. Se combina con animate-pulse rounded-md bg-accent vía cn().",
            },
            {
              name: "...props",
              type: "React.ComponentProps<'div'>",
              description: "Cualquier prop nativa de <div> pasa directo.",
            },
          ]}
        />
      </Section>
    </ComponentPage>
  );
}
