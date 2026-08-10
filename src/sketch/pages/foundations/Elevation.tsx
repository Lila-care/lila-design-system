import { ComponentPage, Example, PropsTable } from "../../doc";

const CARD_CODE = `
<div style={{
  border: "1px solid rgba(61,43,80,0.07)",
  boxShadow: "0 4px 24px rgba(61,43,80,0.05)",
}} className="rounded-3xl bg-white p-6">
  ...
</div>
`;

export default function ElevationPage() {
  return (
    <ComponentPage
      title="Elevación / Sombras"
      tagline="Sin tokens formales, pero hay 2 familias de sombra usadas de forma consistente y repetida — buenas candidatas a formalizar."
      source="Valores inline repetidos en MonthGrid, WeekStrip, Hoy/index, CycleCard, DataPrivacyCard, NotificationsCard, Privacidad"
    >
      <Example
        title="Sombra de card (la más usada — 8+ archivos)"
        description="Siempre junto con un borde de 1px. Es el nivel de elevación por defecto de casi toda tarjeta blanca en la app."
        code={CARD_CODE}
      >
        <div className="rounded-3xl bg-white p-6 text-center text-[13px]" style={{ border: "1px solid rgba(61,43,80,0.07)", boxShadow: "0 4px 24px rgba(61,43,80,0.05)", color: "#4A2D6E" }}>
          0 4px 24px rgba(61,43,80,0.05)
        </div>
      </Example>

      <Example
        title="Familia de sombra púrpura (Chat)"
        description="Usada en botones y elementos flotantes del Chat/EmptyState — más saturada, con tinte de marca en vez de neutro."
        code={`boxShadow: "0 3px 10px rgba(74,45,110,.28)"`}
      >
        <div className="flex flex-wrap justify-center gap-4">
          <div className="flex h-11 w-11 items-center justify-center rounded-full text-white" style={{ background: "#4A2D6E", boxShadow: "0 3px 10px rgba(74,45,110,.28)" }}>
            →
          </div>
          <div className="rounded-2xl bg-white px-4 py-2 text-[12px]" style={{ boxShadow: "0 2px 16px rgba(74,45,110,.08)" }}>
            Composer
          </div>
          <div className="rounded-xl bg-white px-4 py-2 text-[12px]" style={{ boxShadow: "0 6px 20px rgba(74,45,110,.12)" }}>
            Dropdown de cuenta
          </div>
        </div>
      </Example>

      <PropsTable
        heading="Referencia completa"
        rows={[
          { name: "0 4px 24px rgba(61,43,80,0.05) + border 1px rgba(61,43,80,0.07)", description: "Card por defecto — el 90% de las tarjetas blancas de la app." },
          { name: "0 1px 3px rgba(74,45,110,.05)", description: "AccountBanner trigger — elevación mínima." },
          { name: "0 2px 16px rgba(74,45,110,.08)", description: "Composer, ReconciliationCard." },
          { name: "0 3px 10px rgba(74,45,110,.28)", description: "Botón de enviar (circular, flotante)." },
          { name: "0 4-6px 12-20px rgba(74,45,110,.12-.22)", description: "CTAs primarios, sidebar activo, dropdown de cuenta." },
        ]}
      />
    </ComponentPage>
  );
}
