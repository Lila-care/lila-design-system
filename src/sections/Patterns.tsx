// Todo lo de esta sección es el componente real de lila-web, importado vía el alias "@"
// (ver vite.config.ts) — no hay copias. Sidebar/AccountBanner necesitan un AuthProvider real
// arriba porque llaman useAuth(); en modo "guest" (sin token en localStorage) no disparan
// ningún request de red, así que es seguro montarlos aquí.
import { AuthProvider } from "@/auth/AuthContext";
import Sidebar from "@/components/AppShell/Sidebar";
import AccountBanner from "@/Chat/AccountBanner";

function PreviewFrame({ label, note, children }: { label: string; note?: string; children: React.ReactNode }) {
  return (
    <div className="rounded-xl border" style={{ borderColor: "rgba(61,43,80,0.1)" }}>
      <div
        className="flex items-baseline justify-between gap-3 border-b px-4 py-2"
        style={{ borderColor: "rgba(61,43,80,0.1)" }}
      >
        <span className="text-xs font-semibold uppercase tracking-wide" style={{ color: "#A79FB2" }}>
          {label}
        </span>
        {note && <span className="text-[11px]" style={{ color: "#A79FB2" }}>{note}</span>}
      </div>
      <div className="p-4">{children}</div>
    </div>
  );
}

export default function Patterns() {
  return (
    <div className="flex flex-col gap-8">
      <PreviewFrame
        label="Sidebar — @/components/AppShell/Sidebar.tsx"
        note="vista recortada — hace scroll dentro del marco para ver todo"
      >
        <div
          className="overflow-y-auto overflow-x-hidden rounded-lg"
          style={{ height: 480, position: "relative", background: "#FAF6F0" }}
        >
          <AuthProvider>
            <Sidebar />
          </AuthProvider>
        </div>
      </PreviewFrame>

      <PreviewFrame label="AccountBanner — @/Chat/AccountBanner.tsx">
        <div className="grid gap-4 sm:grid-cols-2">
          <div>
            <div className="mb-2 text-[11px]" style={{ color: "#A79FB2" }}>Guest</div>
            <div className="max-w-[248px]">
              <AccountBanner email={null} name={null} picture={null} isAuthenticated={false} onLogout={() => {}} />
            </div>
          </div>
          <div>
            <div className="mb-2 text-[11px]" style={{ color: "#A79FB2" }}>Autenticado</div>
            <div className="max-w-[248px]">
              <AccountBanner
                email="sofia@lilacareapp.com"
                name="Sofía R."
                picture={null}
                isAuthenticated
                onLogout={() => {}}
              />
            </div>
          </div>
        </div>
      </PreviewFrame>

      <div className="rounded-xl border p-4 text-sm" style={{ borderColor: "rgba(61,43,80,0.1)", color: "#8A8194" }}>
        <strong style={{ color: "#4A2D6E" }}>MobileNav</strong> (
        <code>@/components/AppShell/MobileNav.tsx</code>) usa breakpoints reales de viewport
        (<code>md:hidden</code>), así que no se puede previsualizar dentro de un marco de tamaño
        fijo — para verlo, abre <code>lila-web</code> (puerto 5173) y reduce la ventana a menos
        de 768px.
      </div>
    </div>
  );
}
