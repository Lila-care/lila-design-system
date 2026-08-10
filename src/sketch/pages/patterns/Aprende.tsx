import { ComponentPage, Section, LiveFrame } from "../../doc";

export default function AprendePage() {
  return (
    <ComponentPage
      title="Aprende"
      tagline="La única página completamente estática de la app — 4 bandas PhaseSection con contenido educativo hardcodeado, sin ningún hook de datos."
      source="Aprende/index.tsx + Aprende/PhaseSection.tsx"
    >
      <Section title="Vista completa">
        <p className="text-[13.5px]" style={{ color: "#8A8194" }}>
          A diferencia de Hoy/Calendario/Perfil/Chat, esta vista no depende del backend — se ve
          igual con o sin ms-lila corriendo.
        </p>
        <LiveFrame route="/aprende" width={480} height={820} label="Aprende" />
      </Section>
    </ComponentPage>
  );
}
