import { ComponentPage, Section, LiveFrame, LiveFrameNote } from "../../doc";

export default function AdminPage() {
  return (
    <ComponentPage
      title="Admin"
      tagline="Dashboard interno — layout completamente distinto al resto de la app (navbar superior, sin Sidebar). Users Activity + Template, y un módulo separado de Forms (builder de onboarding)."
      source="Admin/AdminLayout.tsx + Admin/index.tsx + Admin/FormsPage.tsx"
    >
      <Section title="Dashboard — Users Activity / Template">
        <p className="text-[13.5px]" style={{ color: "#8A8194" }}>
          Requiere sesión de Admin autenticada — sin login, el iframe redirige a{" "}
          <code>/admin</code> (pantalla de login).
        </p>
        <LiveFrame route="/admin/dashboard" width={700} height={600} label="Admin dashboard" />
        <LiveFrameNote />
      </Section>

      <Section title="Forms — builder de onboarding">
        <LiveFrame route="/admin/forms" width={700} height={600} label="Admin forms" />
      </Section>
    </ComponentPage>
  );
}
