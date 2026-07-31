import { Home, MessageCircle, Calendar, BookOpen, Sprout, UserCircle2, ArrowUp, Menu } from "lucide-react";

// Tokens de marca — leídos directamente de lila-web/src/index.css (@theme inline) y de los
// estilos inline que usan Sidebar/EmptyState/AccountBanner. No son un valor aparte: si cambian
// en el código real, hay que actualizar esta lista a mano (no hay forma de introspeccionar
// valores hardcodeados en JSX), pero los colores del @theme (primary/secondary/accent) sí
// vienen literalmente del archivo importado en index.css.
const BRAND_COLORS = [
  { name: "Primary", value: "#7e3565", usage: "--color-primary (theme)" },
  { name: "Secondary", value: "#F8EAFE", usage: "--color-secondary (theme)" },
  { name: "Accent", value: "#d8d9b1", usage: "--color-accent (theme)" },
  { name: "Lavanda", value: "#9B72C8", usage: "Sidebar activo, wordmark, focus ring" },
  { name: "Lavanda claro", value: "#B9A3E3", usage: "Glow del logo, avatares, hover" },
  { name: "Morado oscuro", value: "#4A2D6E", usage: "Wordmark, títulos EmptyState" },
  { name: "Texto principal", value: "#3D2B50", usage: "AppShell texto base" },
  { name: "Texto secundario", value: "#828282", usage: "--color-foreground / --color-text" },
];

const WARM_BACKGROUNDS = [
  { name: "Fondo shell", value: "#FAF6F0" },
  { name: "Fondo chat", value: "#FAF8FC" },
  { name: "Fondo sidebar (gradiente)", value: "linear-gradient(180deg, #FAF6F0, #F3EDF7 60%)" },
];

const FONTS = [
  { label: "DM Sans — body / UI", family: "'DM Sans', sans-serif", sample: "Tu espacio para entender tu cuerpo" },
  { label: "Poppins — chat / marketing", family: "'Poppins', system-ui, sans-serif", sample: "Pregúntame lo que necesitas saber" },
  { label: "Playfair Display italic — wordmark", family: "'Playfair Display', serif", sample: "Lila", italic: true },
];

const ICONS = [
  { Icon: Home, label: "Home" },
  { Icon: MessageCircle, label: "MessageCircle" },
  { Icon: Calendar, label: "Calendar" },
  { Icon: BookOpen, label: "BookOpen" },
  { Icon: Sprout, label: "Sprout" },
  { Icon: UserCircle2, label: "UserCircle2" },
  { Icon: ArrowUp, label: "ArrowUp" },
  { Icon: Menu, label: "Menu" },
];

function SwatchGrid({ items }: { items: { name: string; value: string; usage?: string }[] }) {
  return (
    <div className="grid grid-cols-2 gap-4 sm:grid-cols-3 lg:grid-cols-4">
      {items.map((c) => (
        <div key={c.name} className="overflow-hidden rounded-xl border" style={{ borderColor: "rgba(61,43,80,0.1)" }}>
          <div className="h-20 w-full" style={{ background: c.value }} />
          <div className="p-3">
            <div className="text-sm font-semibold" style={{ color: "#2A2530" }}>{c.name}</div>
            <div className="text-xs" style={{ color: "#8A8194" }}>{c.value}</div>
            {c.usage && <div className="mt-1 text-[11px]" style={{ color: "#A79FB2" }}>{c.usage}</div>}
          </div>
        </div>
      ))}
    </div>
  );
}

function SectionTitle({ children }: { children: React.ReactNode }) {
  return (
    <h2 className="mb-4 text-lg font-semibold" style={{ color: "#4A2D6E" }}>
      {children}
    </h2>
  );
}

export default function Foundations() {
  return (
    <div className="flex flex-col gap-10">
      <section>
        <SectionTitle>Color de marca</SectionTitle>
        <SwatchGrid items={BRAND_COLORS} />
      </section>

      <section>
        <SectionTitle>Fondos cálidos</SectionTitle>
        <SwatchGrid items={WARM_BACKGROUNDS} />
      </section>

      <section>
        <SectionTitle>Tipografía</SectionTitle>
        <div className="flex flex-col gap-4">
          {FONTS.map((f) => (
            <div key={f.label} className="rounded-xl border p-4" style={{ borderColor: "rgba(61,43,80,0.1)" }}>
              <div className="mb-2 text-xs uppercase tracking-wide" style={{ color: "#A79FB2" }}>{f.label}</div>
              <div
                className={f.italic ? "italic font-bold" : "font-medium"}
                style={{ fontFamily: f.family, fontSize: 22, color: "#4A2D6E" }}
              >
                {f.sample}
              </div>
            </div>
          ))}
        </div>
      </section>

      <section>
        <SectionTitle>Forma</SectionTitle>
        <div className="flex flex-wrap gap-4">
          <div className="flex h-16 w-16 items-center justify-center rounded-xl text-xs" style={{ background: "#F8EAFE", color: "#4A2D6E" }}>
            rounded-xl
          </div>
          <div className="flex h-16 w-16 items-center justify-center rounded-full text-xs" style={{ background: "#F8EAFE", color: "#4A2D6E" }}>
            rounded-full
          </div>
          <div className="flex h-16 w-32 items-center justify-center text-xs" style={{ background: "#F8EAFE", color: "#4A2D6E", borderRadius: 14 }}>
            radius: 14 (cards)
          </div>
        </div>
      </section>

      <section>
        <SectionTitle>Iconografía (lucide-react)</SectionTitle>
        <div className="grid grid-cols-4 gap-3 sm:grid-cols-8">
          {ICONS.map(({ Icon, label }) => (
            <div
              key={label}
              className="flex flex-col items-center gap-2 rounded-xl border p-3"
              style={{ borderColor: "rgba(61,43,80,0.1)", color: "#3D2B50" }}
            >
              <Icon size={20} />
              <span className="text-[10px]" style={{ color: "#8A8194" }}>{label}</span>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}
