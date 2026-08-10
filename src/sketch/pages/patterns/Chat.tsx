import { ComponentPage, Section, LiveFrame, LiveFrameNote } from "../../doc";

export default function ChatPage() {
  return (
    <ComponentPage
      title="Chat"
      tagline="La pantalla más compuesta de la app — Sidebar/MobileNav + ConversationList + EmptyState/mensajes + composer, con onboarding, reconciliación y gates de paywall."
      source="Chat/ChatPage.tsx"
    >
      <Section title="Vista completa">
        <LiveFrame route="/chat" width={480} height={820} label="Chat" />
        <LiveFrameNote />
      </Section>
    </ComponentPage>
  );
}
