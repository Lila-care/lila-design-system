import { AuthProvider } from "@/auth/AuthContext";
import Sidebar from "@/components/AppShell/Sidebar";
import { ComponentPage, Example } from "../../doc";

const CODE = `
import Sidebar from "@/components/AppShell/Sidebar";

<Sidebar /> // useAuth() internamente — necesita <AuthProvider> arriba
`;

export default function SidebarPage() {
  return (
    <ComponentPage
      title="Sidebar"
      tagline="Nav desktop fijo (248px, hidden md:hidden por debajo de 768px) — 6 items, estado activo/deshabilitado, AccountBanner en el footer."
      source="components/AppShell/Sidebar.tsx"
    >
      <Example
        title="Modo invitada"
        description="AuthProvider en modo guest (sin token en localStorage) no dispara requests de red — seguro de montar aquí."
        previewHeight={520}
        code={CODE}
      >
        <div className="overflow-y-auto overflow-x-hidden rounded-lg" style={{ height: 480, background: "#FAF6F0" }}>
          <AuthProvider>
            <Sidebar />
          </AuthProvider>
        </div>
      </Example>
    </ComponentPage>
  );
}
