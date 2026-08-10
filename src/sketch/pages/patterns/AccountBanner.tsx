import AccountBanner from "@/Chat/AccountBanner";
import { ComponentPage, Section, Example, PropsTable } from "../../doc";

const CODE = `
<AccountBanner email={null} name={null} picture={null} isAuthenticated={false} onLogout={() => {}} />
`;

export default function AccountBannerPage() {
  return (
    <ComponentPage
      title="AccountBanner"
      tagline="Pie del Sidebar/rail de chat — avatar con iniciales o CTA de invitada, dropdown de logout cuando hay sesión."
      source="Chat/AccountBanner.tsx"
    >
      <Example title="Invitada" code={CODE}>
        <div className="max-w-[248px]">
          <AccountBanner email={null} name={null} picture={null} isAuthenticated={false} onLogout={() => {}} />
        </div>
      </Example>

      <Section title="Autenticada">
        <Example code={`<AccountBanner email="sofia@lilacareapp.com" name="Sofía R." picture={null} isAuthenticated onLogout={...} />`}>
          <div className="max-w-[248px]">
            <AccountBanner email="sofia@lilacareapp.com" name="Sofía R." picture={null} isAuthenticated onLogout={() => {}} />
          </div>
        </Example>
      </Section>

      <Section title="Component API">
        <PropsTable
          rows={[
            { name: "email, name, picture", type: "string | null", description: "picture null cae a iniciales sobre fondo con gradiente." },
            { name: "isAuthenticated", type: "boolean", description: "false muestra el CTA de crear cuenta en vez del trigger de usuaria." },
            { name: "onLogout", type: "() => void", description: "—" },
          ]}
        />
      </Section>
    </ComponentPage>
  );
}
