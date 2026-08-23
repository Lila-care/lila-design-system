// Import en vivo desde el propio paquete publicado (dependencia real, no alias de Vite —
// ver vite.config.ts / CLAUDE.md). Mismo specifier que usa lila-web hoy.
import { X } from "lucide-react";
import { Button } from "@lila-care/design-system";
import { ComponentPage, Section, Example, PropsTable } from "../../doc";

const VARIANTS_CODE = `
import { Button } from "@lila-care/design-system";

<Button variant="default">Default</Button>
<Button variant="outline" size="sm">Reintentar</Button>
<Button variant="ghost" size="icon-sm" aria-label="Cerrar">
  <X className="size-4" />
</Button>
`;

const BRAND_CODE = `
// CTA de onboarding — pantallas de usuaria (ReconciliationCard, etc.)
// Gradiente #9B72C8 → #3D2B50, pill rounded-full, ancho completo con size="full"
<Button variant="brand" size="full">Confirmar y guardar</Button>
<Button variant="brand">Continuar</Button>
<Button variant="brand" size="sm">Guardar</Button>
`;

export default function ButtonPage() {
  return (
    <ComponentPage
      title="Button"
      tagline="lila-web usa hoy outline (reintentar tras un error), ghost (cerrar un panel de detalle) y brand (CTA de onboarding, pantallas de usuaria)."
      source="packages/design-system/src/components/button.tsx"
    >
      <Example
        title="Variantes en uso real"
        description="outline: botón de reintentar en UsersPage.tsx/ReportsPage.tsx/DashboardPage.tsx tras un error de fetch. ghost + icon-sm: botón de cerrar en UserDetails.tsx."
        code={VARIANTS_CODE}
      >
        <div className="flex flex-wrap items-center justify-center gap-3">
          <Button variant="default">Default</Button>
          <Button variant="outline" size="sm">
            Reintentar
          </Button>
          <Button
            variant="ghost"
            size="icon-sm"
            aria-label="Cerrar detalle de usuaria"
          >
            <X className="size-4" aria-hidden="true" />
          </Button>
        </div>
      </Example>

      <Example
        title="brand — CTA de pantallas de usuaria"
        description="Gradiente #9B72C8 → #3D2B50, pill rounded-full. Usado en ReconciliationCard (onboarding). size=full para CTA de ancho completo."
        previewBackground="#FAF6F0"
        code={BRAND_CODE}
      >
        <div className="flex flex-col items-center gap-3 w-full max-w-xs">
          <Button variant="brand" size="full">
            Confirmar y guardar
          </Button>
          <div className="flex gap-3">
            <Button variant="brand">Continuar</Button>
            <Button variant="brand" size="sm">
              Guardar
            </Button>
          </div>
        </div>
      </Example>

      <Section title="Component API">
        <PropsTable
          heading="Button"
          rows={[
            {
              name: "variant",
              type: '"default" | "destructive" | "outline" | "secondary" | "ghost" | "link" | "brand"',
              default: '"default"',
              description:
                "brand: CTA de onboarding/pantallas de usuaria — gradiente #9B72C8 → #3D2B50, pill rounded-full. outline y ghost tienen uso real en Admin. destructive, secondary y link existen pero no tienen callers activos.",
            },
            {
              name: "size",
              type: '"default" | "xs" | "sm" | "lg" | "full" | "icon" | "icon-xs" | "icon-sm" | "icon-lg"',
              default: '"default"',
              description:
                'sm y icon-sm son los usados en Admin (reintentar y cerrar). full: w-full h-12, úsalo con variant="brand" para CTA de onboarding.',
            },
            {
              name: "asChild",
              type: "boolean",
              default: "false",
              description:
                "Renderiza vía Radix Slot en vez de <button> nativo — para componer con otro elemento (ej. un <a>). Sin uso real hoy en lila-web.",
            },
            {
              name: "className",
              type: "string",
              description: "Se combina con los estilos base vía cn().",
            },
            {
              name: "...props",
              type: "React.ComponentProps<'button'>",
              description:
                "Cualquier prop nativa de <button> (onClick, disabled, aria-label, etc.) pasa directo.",
            },
          ]}
        />
      </Section>
    </ComponentPage>
  );
}
