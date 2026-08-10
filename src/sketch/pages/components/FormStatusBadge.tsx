import { FormStatusBadge } from "@/Admin/FormStatusBadge";
import { ComponentPage, Section, Example, PropsTable } from "../../doc";

const CODE = `
import { FormStatusBadge } from "@/Admin/FormStatusBadge";

<FormStatusBadge status="live" />
`;

export default function FormStatusBadgePage() {
  return (
    <ComponentPage
      title="FormStatusBadge"
      tagline="Badge de estado para formularios de onboarding en Admin — el único componente de tipo 'badge' que existe en toda la app."
      source="Admin/FormStatusBadge.tsx"
    >
      <Example title="Las 3 variantes" code={CODE}>
        <div className="flex gap-3">
          <FormStatusBadge status="draft" />
          <FormStatusBadge status="live" />
          <FormStatusBadge status="archived" />
        </div>
      </Example>

      <Section title="Component API">
        <PropsTable
          rows={[{ name: "status", type: "'draft' | 'live' | 'archived'", description: "draft=gris, live=verde, archived=ámbar." }]}
        />
      </Section>
    </ComponentPage>
  );
}
