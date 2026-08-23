import { Breadcrumbs } from "@lila-care/design-system";
import { ComponentPage, Section, Example, PropsTable } from "../../doc";

const TWO_ITEMS_CODE = `
import { Breadcrumbs } from "@lila-care/design-system";

<Breadcrumbs
  items={[
    { label: "Inicio", href: "/" },
    { label: "Perfil" },
  ]}
/>
`;

const FOUR_ITEMS_CODE = `
<Breadcrumbs
  items={[
    { label: "Inicio",        href: "/" },
    { label: "Usuarias",      href: "/usuarias" },
    { label: "Detalle",       href: "/usuarias/123" },
    { label: "Historial de ciclos" },
  ]}
/>
`;

const NO_HREFS_CODE = `
<Breadcrumbs
  items={[
    { label: "Admin" },
    { label: "Reportes" },
    { label: "Mensual" },
  ]}
/>
`;

const CUSTOM_SEPARATOR_CODE = `
<Breadcrumbs
  items={[
    { label: "Inicio", href: "/" },
    { label: "Configuración", href: "/configuracion" },
    { label: "Privacidad" },
  ]}
  separator="›"
/>
`;

export default function BreadcrumbsPage() {
  return (
    <ComponentPage
      title="Breadcrumbs"
      tagline="Navegación contextual con estilo neomorphism raised. El último ítem siempre es el activo — sin enlace, en negrita y con color de marca."
      source="packages/design-system/src/components/breadcrumbs.tsx"
    >
      <Example
        title="Dos ítems"
        description="Caso mínimo: un nivel de profundidad con enlace de retorno."
        code={TWO_ITEMS_CODE}
      >
        <Breadcrumbs
          items={[{ label: "Inicio", href: "/" }, { label: "Perfil" }]}
        />
      </Example>

      <Example
        title="Cuatro ítems con enlaces"
        description="Todos los ítems previos al activo renderizan como <a> con hover brand-purple."
        code={FOUR_ITEMS_CODE}
      >
        <Breadcrumbs
          items={[
            { label: "Inicio", href: "/" },
            { label: "Usuarias", href: "/usuarias" },
            { label: "Detalle", href: "/usuarias/123" },
            { label: "Historial de ciclos" },
          ]}
        />
      </Example>

      <Example
        title="Sin hrefs"
        description="Ítems intermedios sin href renderizan como <span> no interactivo."
        code={NO_HREFS_CODE}
      >
        <Breadcrumbs
          items={[
            { label: "Admin" },
            { label: "Reportes" },
            { label: "Mensual" },
          ]}
        />
      </Example>

      <Example
        title="Separador personalizado"
        description="El prop separator acepta cualquier ReactNode. Por defecto es «/»."
        code={CUSTOM_SEPARATOR_CODE}
      >
        <Breadcrumbs
          items={[
            { label: "Inicio", href: "/" },
            { label: "Configuración", href: "/configuracion" },
            { label: "Privacidad" },
          ]}
          separator="›"
        />
      </Example>

      <Section title="Component API">
        <PropsTable
          heading="Breadcrumbs"
          rows={[
            {
              name: "items",
              type: "BreadcrumbItem[]",
              description:
                "Lista de ítems en orden de profundidad. El último ítem es el activo (sin enlace).",
            },
            {
              name: "separator",
              type: "ReactNode",
              default: '"/"',
              description:
                "Carácter o nodo que se muestra entre cada ítem. No se muestra al final.",
            },
            {
              name: "className",
              type: "string",
              description: "Se combina con las clases del contenedor vía cn().",
            },
          ]}
        />
        <PropsTable
          heading="BreadcrumbItem"
          rows={[
            {
              name: "label",
              type: "string",
              description: "Texto visible del ítem.",
            },
            {
              name: "href",
              type: "string",
              description:
                "URL del enlace. Si se omite en un ítem no-activo, se renderiza como <span>.",
            },
          ]}
        />
      </Section>
    </ComponentPage>
  );
}
