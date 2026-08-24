import { DataTable } from "@lila-care/design-system";
import { ComponentPage, Section, Example, PropsTable } from "../../doc";

interface MockUser {
  id: string;
  name: string;
  email: string;
  cycles: number;
  status: string;
}

const MOCK_USERS: MockUser[] = [
  {
    id: "1",
    name: "Ana García",
    email: "ana@example.com",
    cycles: 12,
    status: "Activa",
  },
  {
    id: "2",
    name: "Beatriz López",
    email: "bea@example.com",
    cycles: 7,
    status: "Activa",
  },
  {
    id: "3",
    name: "Carla Méndez",
    email: "carla@example.com",
    cycles: 23,
    status: "Inactiva",
  },
  {
    id: "4",
    name: "Diana Ruiz",
    email: "diana@example.com",
    cycles: 4,
    status: "Activa",
  },
  {
    id: "5",
    name: "Elena Torres",
    email: "elena@example.com",
    cycles: 18,
    status: "Inactiva",
  },
];

const TABLE_CODE = `
import { DataTable } from "@lila-care/design-system";

<DataTable
  columns={[
    { key: "name",   header: "Nombre",  sortable: true },
    { key: "email",  header: "Email" },
    { key: "cycles", header: "Ciclos",  sortable: true },
    {
      key: "status",
      header: "Estado",
      render: (value) => (
        <span style={{ color: value === "Activa" ? "#085041" : "#633806" }}>
          {String(value)}
        </span>
      ),
    },
  ]}
  rows={users}
  keyExtractor={(row) => row.id}
/>
`;

const EMPTY_CODE = `
<DataTable
  columns={[
    { key: "name",  header: "Nombre" },
    { key: "email", header: "Email"  },
  ]}
  rows={[]}
  keyExtractor={(row) => row.id}
  emptyState={
    <span>No hay usuarias registradas todavía.</span>
  }
/>
`;

const ADMIN_CODE = `
// variant="admin" — header con fondo de marca (bg-primary/text-primary-foreground), sin la
// sombra ni el radio neomórficos del wrapper (esos siguen aplicando solo en variant="default").
<DataTable
  variant="admin"
  columns={[
    { key: "name",   header: "Nombre",  sortable: true },
    { key: "email",  header: "Email" },
    { key: "cycles", header: "Ciclos",  sortable: true },
  ]}
  rows={users}
  keyExtractor={(row) => row.id}
/>
`;

export default function DataTablePage() {
  return (
    <ComponentPage
      title="DataTable"
      tagline="Tabla genérica con sorting en memoria, zebra striping y estilo neomorphism. Sin dependencias externas."
      source="packages/design-system/src/components/data-table.tsx"
    >
      <Example
        title="Tabla con datos y sorting"
        description="Hacé clic en los encabezados «Nombre» o «Ciclos» para ordenar. El sorting alterna asc/desc y es interno al componente."
        code={TABLE_CODE}
      >
        <div className="w-full overflow-x-auto">
          <DataTable<MockUser>
            columns={[
              { key: "name", header: "Nombre", sortable: true },
              { key: "email", header: "Email" },
              { key: "cycles", header: "Ciclos", sortable: true },
              {
                key: "status",
                header: "Estado",
                render: (value) => (
                  <span
                    style={{
                      color: value === "Activa" ? "#085041" : "#633806",
                      fontWeight: 500,
                    }}
                  >
                    {String(value)}
                  </span>
                ),
              },
            ]}
            rows={MOCK_USERS}
            keyExtractor={(row) => row.id}
          />
        </div>
      </Example>

      <Example
        title="Estado vacío"
        description="Cuando rows está vacío se muestra emptyState (o el texto «Sin resultados» por defecto)."
        code={EMPTY_CODE}
      >
        <div className="w-full overflow-x-auto">
          <DataTable<MockUser>
            columns={[
              { key: "name", header: "Nombre" },
              { key: "email", header: "Email" },
            ]}
            rows={[]}
            keyExtractor={(row) => row.id}
            emptyState={<span>No hay usuarias registradas todavía.</span>}
          />
        </div>
      </Example>

      <Example
        title='variant="admin" (KAN-46)'
        description="Variante para el dashboard de Admin: header bg-primary/text-primary-foreground y wrapper sin sombra/radio neomórficos. variant='default' (el usado arriba) preserva 1:1 el look previo — regresión cero."
        code={ADMIN_CODE}
      >
        <div className="w-full overflow-x-auto">
          <DataTable<MockUser>
            variant="admin"
            columns={[
              { key: "name", header: "Nombre", sortable: true },
              { key: "email", header: "Email" },
              { key: "cycles", header: "Ciclos", sortable: true },
            ]}
            rows={MOCK_USERS}
            keyExtractor={(row) => row.id}
          />
        </div>
      </Example>

      <Section title="Component API">
        <PropsTable
          heading="DataTable<T>"
          rows={[
            {
              name: "variant",
              type: '"default" | "admin"',
              default: '"default"',
              description:
                "default: sin cambios respecto al look original (wrapper con sombra/radio neomórficos, header sutil). admin: header bg-primary/text-primary-foreground, wrapper sin sombra ni radio.",
            },
            {
              name: "columns",
              type: "DataTableColumn<T>[]",
              description:
                "Definición de columnas: key, header, render opcional y sortable.",
            },
            {
              name: "rows",
              type: "T[]",
              description:
                "Datos a renderizar. Si está vacío se muestra emptyState.",
            },
            {
              name: "keyExtractor",
              type: "(row: T) => string",
              description:
                "Función que extrae la key única de cada fila (equivalente a key en map).",
            },
            {
              name: "emptyState",
              type: "ReactNode",
              default: '"Sin resultados"',
              description: "Contenido a mostrar cuando rows.length === 0.",
            },
            {
              name: "className",
              type: "string",
              description: "Se combina con las clases del wrapper vía cn().",
            },
          ]}
        />
        <PropsTable
          heading="DataTableColumn<T>"
          rows={[
            {
              name: "key",
              type: "keyof T",
              description: "Campo del objeto T que esta columna representa.",
            },
            {
              name: "header",
              type: "string",
              description: "Texto del encabezado de la columna.",
            },
            {
              name: "render",
              type: "(value: T[keyof T], row: T) => ReactNode",
              description:
                "Renderizador custom. Si se omite, se usa String(value).",
            },
            {
              name: "sortable",
              type: "boolean",
              description:
                "Si es true, el header es clickeable y ordena las filas en memoria.",
            },
          ]}
        />
      </Section>
    </ComponentPage>
  );
}
