import { ComponentPage, Section, Example, PropsTable } from "../../doc";

const FONTS = [
  {
    label: "DM Sans",
    role: "Body / UI (default)",
    family: "'DM Sans', sans-serif",
    sample: "Tu espacio para entender tu cuerpo",
    note: "Definida en body (index.css) — todo lo que no se sobreescribe hereda esta.",
  },
  {
    label: "Poppins",
    role: "Chat / superficies conversacionales",
    family: "'Poppins', system-ui, sans-serif",
    sample: "Estoy aquí para lo que necesites",
    note: "EmptyState, ChatWindow, LoginGateModal, UpgradeGateModal, UserLogin.",
  },
  {
    label: "Playfair Display",
    role: "Headings de página y cards (redonda, negrita)",
    family: "'Playfair Display', serif",
    sample: "Hola de nuevo",
    note: 'Confirmado con Producto (2026-08-09): uso intencional como heading general, no drift.',
  },
  {
    label: "Playfair Display italic",
    role: "Wordmark — único uso en cursiva",
    family: "'Playfair Display', serif",
    sample: "Lila",
    italic: true,
    note: "Sidebar, MobileNav, App shell del design system. Nunca en headings de página.",
  },
];

const SCALE = [
  { name: "PhaseHeroCard — número de día", value: "text-[56px]", usage: "Hoy — el número más grande de la app" },
  { name: "H1 de página", value: "text-3xl md:text-[40px] / md:text-[44px] / md:text-5xl", usage: "Cada página define su propio tamaño arbitrario — no hay escala compartida" },
  { name: "Card title", value: "text-lg / text-xl", usage: "CycleCard, NotificationsCard, DataPrivacyCard" },
  { name: "Body", value: "text-[15px] / text-[15.5px]", usage: "Mensajes de chat, párrafos" },
  { name: "Label / caption", value: "text-[11.5px] – text-[13.5px]", usage: "Timestamps, labels de sección, subtítulos — todo en pixeles arbitrarios" },
];

const CODE = `
// DM Sans es el default del body — no hace falta declararlo.
<h1 style={{ fontFamily: "'Playfair Display', serif" }} className="font-bold text-3xl md:text-[40px]">
  Hola de nuevo
</h1>

<p style={{ fontFamily: "'Poppins', system-ui, sans-serif" }}>
  Estoy aquí para lo que necesites
</p>
`;

export default function TypographyPage() {
  return (
    <ComponentPage
      title="Tipografía"
      tagline="3 familias, cero clases de Tailwind — cada uso es un fontFamily inline. No existe un archivo de type-scale."
      source="index.html (Google Fonts) + fontFamily inline por componente"
    >
      <Example title="Las 3 familias" code={CODE}>
        <div className="flex flex-col gap-4">
          {FONTS.map((f) => (
            <div key={f.label + f.role} className="rounded-xl border p-4" style={{ borderColor: "rgba(61,43,80,0.1)" }}>
              <div className="mb-1 text-[11px] uppercase tracking-wide" style={{ color: "#A79FB2" }}>
                {f.label} — {f.role}
              </div>
              <div
                className={f.italic ? "italic font-bold" : "font-semibold"}
                style={{ fontFamily: f.family, fontSize: 24, color: "#4A2D6E" }}
              >
                {f.sample}
              </div>
              <div className="mt-1.5 text-[12px]" style={{ color: "#8A8194" }}>{f.note}</div>
            </div>
          ))}
        </div>
      </Example>

      <Section title="Escala de tamaños (de facto, no formal)">
        <PropsTable
          heading="Ningún tamaño está centralizado — valores arbitrarios por pantalla"
          rows={SCALE.map((s) => ({ name: s.value, description: s.usage }))}
        />
      </Section>
    </ComponentPage>
  );
}
