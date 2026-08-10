import { ComponentPage, Section, LiveFrame, LiveFrameNote } from "../../doc";

export default function MobileNavPage() {
  return (
    <ComponentPage
      title="MobileNav"
      tagline="Depende de un breakpoint real de viewport (md:hidden) — no se puede simular con solo un contenedor angosto, porque las media queries de Tailwind miden el viewport del navegador, no el div contenedor."
      source="components/AppShell/MobileNav.tsx"
    >
      <Section title="Preview real a 375px de ancho">
        <p className="text-[13.5px]" style={{ color: "#8A8194" }}>
          Solución: un <code>&lt;iframe&gt;</code> con su propio viewport independiente —
          adentro, <code>md:hidden</code> sí se activa de verdad. Toca el ícono de hamburguesa
          para abrir el drawer.
        </p>
        <LiveFrame route="/hoy" width={375} height={700} label="MobileNav a 375px" />
        <LiveFrameNote />
      </Section>
    </ComponentPage>
  );
}
