import { useState } from "react";
import ConversationList from "@/Chat/ConversationList";
import { ComponentPage, Section, Example, PropsTable } from "../../doc";

const CONVERSATIONS = [
  { id: "c1", title: "¿Por qué me siento así hoy?", createdAt: "2026-08-08T10:00:00Z", updatedAt: "2026-08-08T10:05:00Z", messageCount: 6 },
  { id: "c2", title: "Explícame mi ciclo", createdAt: "2026-08-05T15:30:00Z", updatedAt: "2026-08-05T15:40:00Z", messageCount: 3 },
  { id: "c3", title: "Quiero escribir en mi diario", createdAt: "2026-08-01T09:15:00Z", updatedAt: "2026-08-01T09:16:00Z", messageCount: 1 },
];

const CODE = `
<ConversationList
  conversations={conversations}
  currentId={currentId}
  onSelect={(id) => setCurrentId(id)}
  onNew={() => startNewConversation()}
  isAuthenticated
/>
`;

function Demo({ isAuthenticated, empty }: { isAuthenticated: boolean; empty?: boolean }) {
  const [currentId, setCurrentId] = useState("c1");
  return (
    <div className="h-[420px] w-[280px] overflow-hidden rounded-xl" style={{ border: "1px solid rgba(61,43,80,0.1)" }}>
      <ConversationList
        conversations={empty ? [] : CONVERSATIONS}
        currentId={currentId}
        onSelect={setCurrentId}
        onNew={() => {}}
        isAuthenticated={isAuthenticated}
      />
    </div>
  );
}

export default function ConversationListPage() {
  return (
    <ComponentPage
      title="ConversationList"
      tagline="El rail lateral del Chat — botón de nueva conversación + historial. El historial solo existe para usuarias autenticadas."
      source="Chat/ConversationList.tsx"
    >
      <Example title="Autenticada, con historial" code={CODE}>
        <Demo isAuthenticated />
      </Example>

      <Section title="Otros estados">
        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2">
          <Example title="Invitada (sin cuenta)" code={`<ConversationList isAuthenticated={false} conversations={[]} ... />`}>
            <Demo isAuthenticated={false} />
          </Example>
          <Example title="Autenticada, sin conversaciones aún" code={`<ConversationList isAuthenticated conversations={[]} ... />`}>
            <Demo isAuthenticated empty />
          </Example>
        </div>
      </Section>

      <Section title="Component API">
        <PropsTable
          rows={[
            { name: "conversations", type: "ConversationSummary[]", description: "{ id, title, createdAt, messageCount }[]" },
            { name: "currentId", type: "string | null", description: "Resalta la conversación activa." },
            { name: "onSelect", type: "(id: string) => void", description: "—" },
            { name: "onNew", type: "() => void", description: "Botón superior — hoy dice 'Quiero contarte algo más'." },
            { name: "isAuthenticated", type: "boolean", description: "Controla si se muestra el historial o el mensaje de 'inicia sesión para guardar'." },
          ]}
        />
      </Section>
    </ComponentPage>
  );
}
