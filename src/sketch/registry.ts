import type { ComponentType } from "react";
import ColorPage from "./pages/foundations/Color";
import TypographyPage from "./pages/foundations/Typography";
import ShapePage from "./pages/foundations/Shape";
import SpacingPage from "./pages/foundations/Spacing";
import ElevationPage from "./pages/foundations/Elevation";
import IconsPage from "./pages/foundations/Icons";
import BreakpointsPage from "./pages/foundations/Breakpoints";
import AlertPage from "./pages/components/Alert";
import BannerPage from "./pages/components/Banner";
import BreadcrumbsPage from "./pages/components/Breadcrumbs";
import ButtonPage from "./pages/components/Button";
import CardPage from "./pages/components/Card";
import DataTablePage from "./pages/components/DataTable";
import KPICardPage from "./pages/components/KPICard";
import CategoryBreakdownPage from "./pages/components/CategoryBreakdown";
import SelectPage from "./pages/components/Select";
import SkeletonPage from "./pages/components/Skeleton";
import TablePage from "./pages/components/Table";
import EmptyStatePage from "./pages/components/EmptyState";
import MessageBubblePage from "./pages/components/MessageBubble";
import ReconciliationCardPage from "./pages/components/ReconciliationCard";
import ConversationListPage from "./pages/components/ConversationList";
import GateModalsPage from "./pages/components/GateModals";
import PhaseHeroCardPage from "./pages/components/PhaseHeroCard";
import WeekStripPage from "./pages/components/WeekStrip";
import MonthGridPage from "./pages/components/MonthGrid";
import ViewModeTogglePage from "./pages/components/ViewModeToggle";
import DayDetailPanelPage from "./pages/components/DayDetailPanel";
import CycleCardPage from "./pages/components/CycleCard";
import SettingsCardsPage from "./pages/components/SettingsCards";
import FormStatusBadgePage from "./pages/components/FormStatusBadge";
import SidebarPage from "./pages/patterns/Sidebar";
import MobileNavPage from "./pages/patterns/MobileNav";
import AccountBannerPage from "./pages/patterns/AccountBanner";
import HoyPatternPage from "./pages/patterns/Hoy";
import ChatPatternPage from "./pages/patterns/Chat";
import CalendarioPatternPage from "./pages/patterns/Calendario";
import AprendePatternPage from "./pages/patterns/Aprende";
import PerfilPatternPage from "./pages/patterns/Perfil";
import PrivacidadPatternPage from "./pages/patterns/Privacidad";
import AdminPatternPage from "./pages/patterns/Admin";

export interface NavEntry {
  path: string;
  label: string;
  group: "Fundamentos" | "Componentes" | "Patrones";
  Component: ComponentType;
}

export const REGISTRY: NavEntry[] = [
  { path: "/", label: "Color", group: "Fundamentos", Component: ColorPage },
  {
    path: "/fundamentos/tipografia",
    label: "Tipografía",
    group: "Fundamentos",
    Component: TypographyPage,
  },
  {
    path: "/fundamentos/forma",
    label: "Forma",
    group: "Fundamentos",
    Component: ShapePage,
  },
  {
    path: "/fundamentos/espaciado",
    label: "Espaciado",
    group: "Fundamentos",
    Component: SpacingPage,
  },
  {
    path: "/fundamentos/elevacion",
    label: "Elevación",
    group: "Fundamentos",
    Component: ElevationPage,
  },
  {
    path: "/fundamentos/iconografia",
    label: "Iconografía",
    group: "Fundamentos",
    Component: IconsPage,
  },
  {
    path: "/fundamentos/breakpoints",
    label: "Breakpoints",
    group: "Fundamentos",
    Component: BreakpointsPage,
  },
  {
    path: "/componentes/alert",
    label: "Alert",
    group: "Componentes",
    Component: AlertPage,
  },
  {
    path: "/componentes/banner",
    label: "Banner",
    group: "Componentes",
    Component: BannerPage,
  },
  {
    path: "/componentes/breadcrumbs",
    label: "Breadcrumbs",
    group: "Componentes",
    Component: BreadcrumbsPage,
  },
  {
    path: "/componentes/button",
    label: "Button",
    group: "Componentes",
    Component: ButtonPage,
  },
  {
    path: "/componentes/card",
    label: "Card",
    group: "Componentes",
    Component: CardPage,
  },
  {
    path: "/componentes/select",
    label: "Select",
    group: "Componentes",
    Component: SelectPage,
  },
  {
    path: "/componentes/skeleton",
    label: "Skeleton",
    group: "Componentes",
    Component: SkeletonPage,
  },
  {
    path: "/componentes/data-table",
    label: "DataTable",
    group: "Componentes",
    Component: DataTablePage,
  },
  {
    path: "/componentes/kpi-card",
    label: "KPICard",
    group: "Componentes",
    Component: KPICardPage,
  },
  {
    path: "/componentes/category-breakdown",
    label: "CategoryBreakdown",
    group: "Componentes",
    Component: CategoryBreakdownPage,
  },
  {
    path: "/componentes/table",
    label: "Table",
    group: "Componentes",
    Component: TablePage,
  },
  {
    path: "/componentes/empty-state",
    label: "EmptyState",
    group: "Componentes",
    Component: EmptyStatePage,
  },
  {
    path: "/componentes/message-bubble",
    label: "MessageBubble",
    group: "Componentes",
    Component: MessageBubblePage,
  },
  {
    path: "/componentes/reconciliation-card",
    label: "ReconciliationCard",
    group: "Componentes",
    Component: ReconciliationCardPage,
  },
  {
    path: "/componentes/conversation-list",
    label: "ConversationList",
    group: "Componentes",
    Component: ConversationListPage,
  },
  {
    path: "/componentes/gate-modals",
    label: "Gate Modals",
    group: "Componentes",
    Component: GateModalsPage,
  },
  {
    path: "/componentes/phase-hero-card",
    label: "PhaseHeroCard",
    group: "Componentes",
    Component: PhaseHeroCardPage,
  },
  {
    path: "/componentes/week-strip",
    label: "WeekStrip",
    group: "Componentes",
    Component: WeekStripPage,
  },
  {
    path: "/componentes/month-grid",
    label: "MonthGrid",
    group: "Componentes",
    Component: MonthGridPage,
  },
  {
    path: "/componentes/view-mode-toggle",
    label: "ViewModeToggle",
    group: "Componentes",
    Component: ViewModeTogglePage,
  },
  {
    path: "/componentes/day-detail-panel",
    label: "DayDetailPanel",
    group: "Componentes",
    Component: DayDetailPanelPage,
  },
  {
    path: "/componentes/cycle-card",
    label: "CycleCard",
    group: "Componentes",
    Component: CycleCardPage,
  },
  {
    path: "/componentes/settings-cards",
    label: "Tarjetas de Perfil",
    group: "Componentes",
    Component: SettingsCardsPage,
  },
  {
    path: "/componentes/form-status-badge",
    label: "FormStatusBadge",
    group: "Componentes",
    Component: FormStatusBadgePage,
  },
  {
    path: "/patrones/sidebar",
    label: "Sidebar",
    group: "Patrones",
    Component: SidebarPage,
  },
  {
    path: "/patrones/mobile-nav",
    label: "MobileNav",
    group: "Patrones",
    Component: MobileNavPage,
  },
  {
    path: "/patrones/account-banner",
    label: "AccountBanner",
    group: "Patrones",
    Component: AccountBannerPage,
  },
  {
    path: "/patrones/hoy",
    label: "Hoy",
    group: "Patrones",
    Component: HoyPatternPage,
  },
  {
    path: "/patrones/chat",
    label: "Chat",
    group: "Patrones",
    Component: ChatPatternPage,
  },
  {
    path: "/patrones/calendario",
    label: "Calendario",
    group: "Patrones",
    Component: CalendarioPatternPage,
  },
  {
    path: "/patrones/aprende",
    label: "Aprende",
    group: "Patrones",
    Component: AprendePatternPage,
  },
  {
    path: "/patrones/perfil",
    label: "Perfil",
    group: "Patrones",
    Component: PerfilPatternPage,
  },
  {
    path: "/patrones/privacidad",
    label: "Privacidad",
    group: "Patrones",
    Component: PrivacidadPatternPage,
  },
  {
    path: "/patrones/admin",
    label: "Admin",
    group: "Patrones",
    Component: AdminPatternPage,
  },
];

export const GROUPS: NavEntry["group"][] = [
  "Fundamentos",
  "Componentes",
  "Patrones",
];
