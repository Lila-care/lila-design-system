import { ComponentPage, Section, LiveFrame } from "../../doc";

export default function PrivacidadPage() {
  return (
    <ComponentPage
      title="Privacidad"
      tagline="Página legal — 'qué guardamos' vs. 'qué nunca haremos', más una banda CTA con botones de descargar/borrar (deshabilitados). Estática, sin hooks de datos."
      source="Perfil/Privacidad.tsx"
    >
      <Section title="Vista completa">
        <LiveFrame route="/perfil/privacidad" width={480} height={900} label="Privacidad" />
      </Section>
    </ComponentPage>
  );
}
