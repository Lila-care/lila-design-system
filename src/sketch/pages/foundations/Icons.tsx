import {
  ArrowUp, MessageCircle, Sparkles, Calendar, Home, BookOpen, Sprout, UserCircle2,
  Menu, X, Bell, MoreVertical, Plus, Pencil, LogOut, UserCircle, ChevronLeft,
  ChevronRight, Moon, Info, Download, Shield, ArrowLeft, CheckCircle2, XCircle, User,
} from "lucide-react";
import { ComponentPage, Example } from "../../doc";

const ICONS = [
  { Icon: ArrowUp, label: "ArrowUp", usage: "Enviar mensaje" },
  { Icon: MessageCircle, label: "MessageCircle", usage: "Nav Chat, tarjeta 'Hablar con Lila'" },
  { Icon: Sparkles, label: "Sparkles", usage: "Hoy" },
  { Icon: Calendar, label: "Calendar", usage: "Nav Calendario, CycleCard" },
  { Icon: Home, label: "Home", usage: "Nav Hoy" },
  { Icon: BookOpen, label: "BookOpen", usage: "Nav Diario (deshabilitado)" },
  { Icon: Sprout, label: "Sprout", usage: "Nav Aprende" },
  { Icon: UserCircle2, label: "UserCircle2", usage: "Nav Perfil" },
  { Icon: Menu, label: "Menu", usage: "Abrir MobileNav" },
  { Icon: X, label: "X", usage: "Cerrar MobileNav / rail de chat" },
  { Icon: Bell, label: "Bell", usage: "Notificaciones — ChatPage, Admin, NotificationsCard" },
  { Icon: MoreVertical, label: "MoreVertical", usage: "Menú de opciones en ChatPage" },
  { Icon: Plus, label: "Plus", usage: "'Quiero contarte algo más'" },
  { Icon: Pencil, label: "Pencil", usage: "Editar respuesta en ReconciliationCard" },
  { Icon: LogOut, label: "LogOut", usage: "AccountBanner, AdminLayout" },
  { Icon: UserCircle, label: "UserCircle", usage: "AccountBanner" },
  { Icon: ChevronLeft, label: "ChevronLeft", usage: "Mes anterior — Calendario" },
  { Icon: ChevronRight, label: "ChevronRight", usage: "Mes siguiente — Calendario" },
  { Icon: Moon, label: "Moon", usage: "Días notables en MonthGrid" },
  { Icon: Info, label: "Info", usage: "Banner informativo — CycleCard" },
  { Icon: Download, label: "Download", usage: "Descargar datos (deshabilitado) — Privacidad" },
  { Icon: Shield, label: "Shield", usage: "DataPrivacyCard" },
  { Icon: ArrowLeft, label: "ArrowLeft", usage: "Volver — Privacidad" },
  { Icon: CheckCircle2, label: "CheckCircle2", usage: "\"Qué guardamos\" — Privacidad" },
  { Icon: XCircle, label: "XCircle", usage: "\"Qué nunca haremos\" — Privacidad" },
  { Icon: User, label: "User", usage: "AdminLayout" },
];

const CODE = `
import { Home } from "lucide-react";

<Home size={19} />
`;

export default function IconsPage() {
  return (
    <ComponentPage
      title="Iconografía"
      tagline={`lucide-react es la única librería de íconos — ${ICONS.length} íconos distintos usados en la app real, todos con size={N} explícito (nunca clases w-*/h-*).`}
      source="node_modules/lucide-react (vía import directo por ícono)"
    >
      <Example title="Todos los íconos en uso" code={CODE}>
        <div className="grid grid-cols-3 gap-3 sm:grid-cols-5">
          {ICONS.map(({ Icon, label, usage }) => (
            <div
              key={label}
              className="flex flex-col items-center gap-1.5 rounded-xl border p-3 text-center"
              style={{ borderColor: "rgba(61,43,80,0.1)", color: "#3D2B50" }}
            >
              <Icon size={20} />
              <span className="text-[10.5px] font-medium">{label}</span>
              <span className="text-[9.5px] leading-tight" style={{ color: "#A79FB2" }}>{usage}</span>
            </div>
          ))}
        </div>
      </Example>
    </ComponentPage>
  );
}
