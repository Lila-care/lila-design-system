import { ComponentPage, Section, LiveFrame, LiveFrameNote } from "../../doc";

export default function PerfilPage() {
  return (
    <ComponentPage
      title="Perfil"
      tagline="CycleCard + NotificationsCard + DataPrivacyCard, más CreateAccountBanner si la sesión es de invitada. Orquestado por usePerfil() (fetch real a ms-lila)."
      source="Perfil/index.tsx (hook: Perfil/usePerfil.ts)"
    >
      <Section title="Vista completa">
        <LiveFrame route="/perfil" width={480} height={900} label="Perfil" />
        <LiveFrameNote />
      </Section>
    </ComponentPage>
  );
}
