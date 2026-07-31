import { useState } from "react";
import { Palette, Component, LayoutTemplate } from "lucide-react";
import Foundations from "@sketch/sections/Foundations";
import ComponentsGallery from "@sketch/sections/ComponentsGallery";
import Patterns from "@sketch/sections/Patterns";

const SECTIONS = [
  { key: "fundamentos", label: "Fundamentos", icon: Palette, Component: Foundations, desc: "Color, tipografía, forma e iconografía" },
  { key: "componentes", label: "Componentes", icon: Component, Component: ComponentsGallery, desc: "Piezas reutilizables en vivo" },
  { key: "patrones", label: "Patrones", icon: LayoutTemplate, Component: Patterns, desc: "Layouts compuestos (nav, cuenta)" },
] as const;

function App() {
  const [active, setActive] = useState<(typeof SECTIONS)[number]["key"]>("fundamentos");
  const current = SECTIONS.find((s) => s.key === active)!;
  const Active = current.Component;

  return (
    <div className="flex min-h-screen" style={{ background: "#FAF6F0", color: "#3D2B50" }}>
      <aside
        className="flex w-64 shrink-0 flex-col px-5 py-8"
        style={{
          background: "linear-gradient(180deg, #FAF6F0, #F3EDF7 60%)",
          borderRight: "1px solid rgba(61,43,80,0.08)",
        }}
      >
        <div className="px-2 pb-7">
          <div
            className="italic font-bold text-2xl leading-none"
            style={{ fontFamily: "'Playfair Display', serif", color: "#9B72C8" }}
          >
            Lila
          </div>
          <div className="mt-1 text-[13px]" style={{ color: "rgba(61,43,80,0.55)" }}>
            Design System
          </div>
        </div>

        <nav className="flex flex-col gap-1">
          {SECTIONS.map((s) => {
            const Icon = s.icon;
            const isActive = s.key === active;
            return (
              <button
                key={s.key}
                type="button"
                onClick={() => setActive(s.key)}
                className="flex items-center gap-3 rounded-xl px-3.5 py-[11px] text-left text-[14.5px] font-medium transition-colors"
                style={
                  isActive
                    ? { background: "#9B72C8", color: "#fff", boxShadow: "0 4px 14px rgba(155,114,200,0.35)" }
                    : { color: "rgba(61,43,80,0.7)" }
                }
              >
                <Icon size={19} />
                {s.label}
              </button>
            );
          })}
        </nav>

        <div className="mt-auto pt-5 text-[11px]" style={{ color: "rgba(61,43,80,0.45)" }}>
          Cataloga en vivo el código real de <code>lila-web</code> — sin duplicarlo.
        </div>
      </aside>

      <main className="min-w-0 flex-1 px-10 py-10">
        <header className="mb-8">
          <h1 className="text-2xl font-semibold" style={{ color: "#4A2D6E" }}>{current.label}</h1>
          <p className="mt-1 text-sm" style={{ color: "#8A8194" }}>{current.desc}</p>
        </header>
        <Active />
      </main>
    </div>
  );
}

export default App;
