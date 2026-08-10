// PHASE_INFO/NO_PHASE_INFO importados en vivo desde lila-web — no son una copia. El resto de
// esta página (marca, fondos, estados) sí es una transcripción manual: son valores hex sueltos
// en estilos inline dispersos por la app, no hay un archivo de tokens que los centralice.
import { PHASE_INFO, NO_PHASE_INFO } from "@/lib/phaseInfo";
import { ComponentPage, Section, Example, PropsTable } from "../../doc";

const BRAND = [
  { name: "Primary", value: "#9B72C8", usage: "Sidebar activo, botones de chat, focus ring, ovulatoria" },
  { name: "Primary (token)", value: "#7e3565", usage: "--color-primary — solo Admin y pantallas de auth. Compite con el de arriba." },
  { name: "Secondary", value: "#F8EAFE", usage: "--color-secondary — fondo login Admin, texto sobre modales oscuros" },
  { name: "Accent", value: "#d8d9b1", usage: "--color-accent — casi sin uso real (solo un ::hover heredado del template de Vite)" },
  { name: "Morado oscuro", value: "#4A2D6E", usage: "Wordmark, botón enviar de chat, burbuja de usuario" },
  { name: "Lavanda claro", value: "#B9A3E3", usage: "Glow del logo, focus rings, avatares con iniciales" },
  { name: "Texto principal", value: "#3D2B50", usage: "Texto base de AppShell y headings" },
  { name: "Texto secundario", value: "#828282", usage: "--color-foreground / --color-text" },
  { name: "Muted", value: "#F0EEE8", usage: "--color-muted — fondo de fila hover en Table" },
  { name: "Muted foreground", value: "#8A8194", usage: "--color-muted-foreground — timestamps, subtítulos" },
];

const WARM_BG = [
  { name: "Fondo shell", value: "#FAF6F0", usage: "AppShell — Hoy, Calendario, Aprende, Perfil" },
  { name: "Fondo chat", value: "#FAF8FC", usage: "Chat — área de mensajes y composer" },
  { name: "Fondo rail de conversaciones", value: "#F4F0FA", usage: "ConversationList" },
];

const STATUS = [
  { name: "Éxito", value: "#5f7231", usage: "Texto de guardado exitoso (CycleCard), coincide con folicular" },
  { name: "Error / destructivo", value: "#8B3A52", usage: "Texto y bordes de error en toda la app, coincide con menstrual" },
  { name: "Warning (Tailwind amber)", value: "#B45309", usage: "Confirmaciones de publicar/despublicar formularios en Admin" },
];

const COLOR_CODE = `
// La mayoría de estos colores NO son clases de Tailwind — son hex directos en style={{ }},
// por eso esta página los muestra como valores, no como className="bg-...".
<div style={{ background: "#9B72C8" }} />
`;

const PHASE_CODE = `
import { PHASE_INFO } from "@/lib/phaseInfo";

const info = PHASE_INFO["OVULATION"];
// info.dotColor  -> "#9B72C8"  (punto en WeekStrip, borde en Calendario modo Ciclo)
// info.textColor -> "#6c4a91"  (texto sobre el gradiente)
// info.gradient  -> usado como background del PhaseHeroCard
`;

function Swatch({ name, value, usage }: { name: string; value: string; usage: string }) {
  return (
    <div className="overflow-hidden rounded-xl border" style={{ borderColor: "rgba(61,43,80,0.1)" }}>
      <div className="h-16 w-full" style={{ background: value }} />
      <div className="p-3">
        <div className="text-[13.5px] font-semibold" style={{ color: "#2A2530" }}>{name}</div>
        <div className="text-xs" style={{ color: "#8A8194" }}>{value}</div>
        <div className="mt-1 text-[11px]" style={{ color: "#A79FB2" }}>{usage}</div>
      </div>
    </div>
  );
}

export default function ColorPage() {
  return (
    <ComponentPage
      title="Color"
      tagline="No hay un archivo central de tokens — la mayoría de estos valores son hex sueltos repetidos en style={{ }} por toda la app."
      source="index.css (@theme inline) + lib/phaseInfo.ts"
    >
      <Section title="Marca">
        <Example
          description='Hay dos morados "primary" en competencia: #9B72C8 se usa como hex directo en el 90% de la app real; #7e3565 es el token --color-primary oficial, usado solo en Admin/login. Recomendación: unificar hacia #9B72C8.'
          code={COLOR_CODE}
        >
          <div className="grid grid-cols-2 gap-4 sm:grid-cols-3">
            {BRAND.map((c) => <Swatch key={c.name} {...c} />)}
          </div>
        </Example>
      </Section>

      <Section title="Fondos cálidos">
        <Example code={`<div style={{ background: "#FAF6F0" }} className="min-h-screen" />`}>
          <div className="grid grid-cols-1 gap-4 sm:grid-cols-3">
            {WARM_BG.map((c) => <Swatch key={c.name} {...c} />)}
          </div>
        </Example>
      </Section>

      <Section title="Colores de fase del ciclo">
        <Example
          title="PHASE_INFO — @/lib/phaseInfo.ts"
          description="Único mapping de color centralizado en un archivo real (no disperso en JSX). Se usa en Hoy, Calendario y Aprende."
          code={PHASE_CODE}
        >
          <div className="grid grid-cols-2 gap-4 sm:grid-cols-4">
            {(Object.entries(PHASE_INFO) as [string, typeof PHASE_INFO.MENSTRUATION][]).map(([key, info]) => (
              <div key={key} className="overflow-hidden rounded-xl border" style={{ borderColor: "rgba(61,43,80,0.1)" }}>
                <div className="flex h-16 items-center justify-center text-[13px] font-semibold text-white" style={{ background: info.gradient }}>
                  {info.label}
                </div>
                <div className="p-3">
                  <div className="text-xs" style={{ color: "#8A8194" }}>{info.dotColor}</div>
                  <div className="mt-1 text-[11px]" style={{ color: "#A79FB2" }}>texto: {info.textColor}</div>
                </div>
              </div>
            ))}
          </div>
        </Example>

        <Example
          title="NO_PHASE_INFO — fallback sin datos"
          description="Verificado contra WCAG AA (4.5:1) para texto blanco encima — ver comentario en el archivo fuente."
          code={`import { NO_PHASE_INFO } from "@/lib/phaseInfo";`}
        >
          <div className="overflow-hidden rounded-xl border max-w-xs" style={{ borderColor: "rgba(61,43,80,0.1)" }}>
            <div className="flex h-16 items-center justify-center text-[13px] font-semibold text-white" style={{ background: NO_PHASE_INFO.gradient }}>
              {NO_PHASE_INFO.label}
            </div>
          </div>
        </Example>
      </Section>

      <Section title="Estados">
        <Example code={`<p style={{ color: "#8B3A52" }}>Mensaje de error</p>`}>
          <div className="grid grid-cols-1 gap-4 sm:grid-cols-3">
            {STATUS.map((c) => <Swatch key={c.name} {...c} />)}
          </div>
        </Example>
      </Section>

      <Section title="Tokens Tailwind (@theme inline)">
        <PropsTable
          heading="index.css — únicos utilizables como className en modo claro"
          rows={[
            { name: "bg-primary / text-primary", default: "#7e3565", description: "Solo funciona correctamente en Admin/auth — el resto de la app usa #9B72C8 como hex." },
            { name: "bg-secondary", default: "#F8EAFE", description: "Fondo del login de Admin." },
            { name: "bg-muted / text-muted-foreground", default: "#F0EEE8 / #8A8194", description: "Agregados en esta ronda de fixes — antes no existían y bg-muted no pintaba nada." },
            { name: "bg-background, bg-card, bg-chart-*, bg-sidebar*", default: "—", description: "Rotos en modo claro: solo están definidos dentro de .dark, y la app no tiene toggle de dark mode." },
          ]}
        />
      </Section>
    </ComponentPage>
  );
}
