// Import en vivo desde el propio paquete publicado (dependencia real, no alias de Vite —
// ver vite.config.ts / CLAUDE.md). Mismo specifier que usa lila-web hoy.
import { AlertCircle } from "lucide-react";
import { Alert, AlertDescription } from "@lila-care/design-system";
import { ComponentPage, Section, Example, PropsTable } from "../../doc";

const ERROR_CODE = `
import { AlertCircle } from "lucide-react";
import { Alert, AlertDescription } from "@lila-care/design-system";

<Alert
  variant="destructive"
  className="rounded-xl border-red-200 bg-red-50 p-4"
  aria-live="polite"
>
  <AlertCircle className="size-4 text-red-700" aria-hidden="true" />
  <AlertDescription className="text-red-700">
    <p>Error al cargar las usuarias: {error}</p>
  </AlertDescription>
</Alert>
`;

export default function AlertPage() {
  return (
    <ComponentPage
      title="Alert"
      tagline={
        'Banner de error de estado — el único uso real hoy es variant="destructive" con ícono, para reportar que un fetch falló.'
      }
      source="packages/design-system/src/components/alert.tsx"
    >
      <Example
        title="Estado de error (uso real)"
        description="Patrón exacto de UsersPage.tsx y ReportsPage.tsx: AlertCircle de lucide-react + AlertDescription, con clases de color aplicadas vía className en vez de una variant dedicada."
        code={ERROR_CODE}
      >
        <Alert
          variant="destructive"
          className="rounded-xl border-red-200 bg-red-50 p-4"
          aria-live="polite"
        >
          <AlertCircle className="size-4 text-red-700" aria-hidden="true" />
          <AlertDescription className="text-red-700">
            <p>
              Error al cargar las usuarias: no se pudo conectar con el servidor.
            </p>
          </AlertDescription>
        </Alert>
      </Example>

      <Section title="Component API">
        <PropsTable
          heading="Alert"
          rows={[
            {
              name: "variant",
              type: '"default" | "destructive"',
              default: '"default"',
              description:
                "Solo cambia bg-card/text-card-foreground vs bg-card/text-destructive — el rojo visible en producción viene del className manual (border-red-200 bg-red-50), no de la variant.",
            },
            {
              name: "className",
              type: "string",
              description: "Se combina con los estilos base vía cn().",
            },
            {
              name: "...props",
              type: "React.ComponentProps<'div'>",
              description:
                'role="alert" ya está fijo en el componente; el resto de props nativas de <div> pasa directo.',
            },
          ]}
        />
        <PropsTable
          heading="AlertTitle, AlertDescription"
          rows={[
            {
              name: "className",
              type: "string",
              description:
                "Se combina con los estilos base vía cn(). AlertTitle no se usa en producción hoy (solo AlertDescription).",
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
