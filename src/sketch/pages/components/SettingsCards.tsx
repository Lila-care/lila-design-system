import NotificationsCard from "@/Perfil/NotificationsCard";
import DataPrivacyCard from "@/Perfil/DataPrivacyCard";
import CreateAccountBanner from "@/Perfil/CreateAccountBanner";
import { ComponentPage, Section, Example } from "../../doc";

export default function SettingsCardsPage() {
  return (
    <ComponentPage
      title="Tarjetas de Perfil"
      tagline="3 piezas sin props — cada una es 100% autocontenida (estado local o solo lectura). Comparten el mismo patrón visual: icon-chip + título Playfair + card blanca con sombra."
      source="Perfil/NotificationsCard.tsx + DataPrivacyCard.tsx + CreateAccountBanner.tsx"
    >
      <Example
        title="NotificationsCard"
        description="3 switches — sin endpoint en el backend todavía, no persisten tras refresh (useState local)."
        code={`import NotificationsCard from "@/Perfil/NotificationsCard";\n\n<NotificationsCard />`}
      >
        <div className="max-w-md">
          <NotificationsCard />
        </div>
      </Example>

      <Section title="DataPrivacyCard">
        <Example
          description="Botones de descargar/borrar deshabilitados con title='Próximamente' — sin endpoint en ms-lila."
          code={`<DataPrivacyCard />`}
        >
          <DataPrivacyCard />
        </Example>
      </Section>

      <Section title="CreateAccountBanner">
        <Example
          description="Solo se muestra a usuarias invitadas (!token) en Perfil — navega a /login."
          code={`<CreateAccountBanner />`}
        >
          <CreateAccountBanner />
        </Example>
      </Section>
    </ComponentPage>
  );
}
