// Import en vivo desde el propio paquete publicado (alias "@lila-care/design-system" ->
// packages/design-system/src en vite.config.ts). Mismo specifier que usa lila-web hoy —
// ya no vive en lila-web/src/components/ui/, se migró a este paquete (PR #29).
import {
  Table,
  TableHeader,
  TableBody,
  TableFooter,
  TableRow,
  TableHead,
  TableCell,
  TableCaption,
} from "@lila-care/design-system";
import { ComponentPage, Section, Example, PropsTable } from "../../doc";

const ROWS = [
  { name: "Sofía R.", email: "sofia@lilacareapp.com", plan: "Premium" },
  { name: "Valentina M.", email: "valentina@lilacareapp.com", plan: "Free" },
  { name: "Camila G.", email: "camila@lilacareapp.com", plan: "Premium" },
];

const BASIC_CODE = `
import { Table, TableHeader, TableBody, TableRow, TableHead, TableCell } from "@lila-care/design-system";

function Example({ rows }) {
  return (
    <Table>
      <TableHeader>
        <TableRow>
          <TableHead>Nombre</TableHead>
          <TableHead>Email</TableHead>
          <TableHead>Plan</TableHead>
        </TableRow>
      </TableHeader>
      <TableBody>
        {rows.map((row) => (
          <TableRow key={row.email}>
            <TableCell>{row.name}</TableCell>
            <TableCell>{row.email}</TableCell>
            <TableCell>{row.plan}</TableCell>
          </TableRow>
        ))}
      </TableBody>
    </Table>
  );
}
`;

const FOOTER_CODE = `
<Table>
  <TableHeader>
    <TableRow>
      <TableHead>Plan</TableHead>
      <TableHead>Usuarias</TableHead>
    </TableRow>
  </TableHeader>
  <TableBody>
    <TableRow>
      <TableCell>Premium</TableCell>
      <TableCell>128</TableCell>
    </TableRow>
    <TableRow>
      <TableCell>Free</TableCell>
      <TableCell>542</TableCell>
    </TableRow>
  </TableBody>
  <TableFooter>
    <TableRow>
      <TableCell>Total</TableCell>
      <TableCell>670</TableCell>
    </TableRow>
  </TableFooter>
  <TableCaption>Distribución de usuarias por plan.</TableCaption>
</Table>
`;

const EMPTY_CODE = `
// Patrón real usado en UsersTable.tsx / FormsTable.tsx — una sola TableRow
// con una TableCell de colSpan completo en vez de un componente de "empty state" dedicado.
<Table>
  <TableHeader>
    <TableRow>
      <TableHead>Nombre</TableHead>
      <TableHead>Email</TableHead>
      <TableHead>Plan</TableHead>
    </TableRow>
  </TableHeader>
  <TableBody>
    <TableRow>
      <TableCell colSpan={3} className="text-center text-gray-500">
        No users found.
      </TableCell>
    </TableRow>
  </TableBody>
</Table>
`;

export default function TablePage() {
  return (
    <ComponentPage
      title="Table"
      tagline="El único primitivo shadcn/ui real que existe hoy — todo lo demás en lila-web se construye a mano. Vive en @lila-care/design-system, no en la app."
      source="packages/design-system/src/components/table.tsx"
    >
      <Example title="Ejemplo básico" code={BASIC_CODE}>
        <Table>
          <TableHeader>
            <TableRow>
              <TableHead>Nombre</TableHead>
              <TableHead>Email</TableHead>
              <TableHead>Plan</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {ROWS.map((row) => (
              <TableRow key={row.email}>
                <TableCell>{row.name}</TableCell>
                <TableCell>{row.email}</TableCell>
                <TableCell>{row.plan}</TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </Example>

      <Section title="Component API">
        <PropsTable
          heading="Table, TableHeader, TableBody, TableFooter, TableRow, TableHead, TableCell, TableCaption"
          rows={[
            {
              name: "className",
              type: "string",
              description:
                "Cada sub-componente extiende el elemento HTML nativo correspondiente (table/thead/tbody/tfoot/tr/th/td/caption) — className se combina con los estilos base vía cn().",
            },
            {
              name: "...props",
              type: "React.ComponentProps<'table' | 'thead' | ...>",
              description: "Cualquier prop nativa del elemento HTML (onClick, colSpan, etc.) pasa directo.",
            },
          ]}
        />
      </Section>

      <Section title="Con pie de tabla y descripción">
        <Example
          description="TableFooter y TableCaption — usados en el mismo Table cuando hace falta un total o una nota."
          code={FOOTER_CODE}
        >
          <Table>
            <TableHeader>
              <TableRow>
                <TableHead>Plan</TableHead>
                <TableHead>Usuarias</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              <TableRow>
                <TableCell>Premium</TableCell>
                <TableCell>128</TableCell>
              </TableRow>
              <TableRow>
                <TableCell>Free</TableCell>
                <TableCell>542</TableCell>
              </TableRow>
            </TableBody>
            <TableFooter>
              <TableRow>
                <TableCell>Total</TableCell>
                <TableCell>670</TableCell>
              </TableRow>
            </TableFooter>
            <TableCaption>Distribución de usuarias por plan.</TableCaption>
          </Table>
        </Example>
      </Section>

      <Section title="Estado vacío">
        <Example
          description='No existe un componente de "empty state" dedicado para tablas — el patrón real (UsersTable.tsx, FormsTable.tsx) es una TableRow con una TableCell de colSpan completo.'
          code={EMPTY_CODE}
        >
          <Table>
            <TableHeader>
              <TableRow>
                <TableHead>Nombre</TableHead>
                <TableHead>Email</TableHead>
                <TableHead>Plan</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              <TableRow>
                <TableCell colSpan={3} className="text-center text-gray-500">
                  No users found.
                </TableCell>
              </TableRow>
            </TableBody>
          </Table>
        </Example>
      </Section>
    </ComponentPage>
  );
}
