import MessageBubble from "@/Chat/MessageBubble";
import { ComponentPage, Section, Example, PropsTable } from "../../doc";

const USER_CODE = `
import MessageBubble from "@/Chat/MessageBubble";

<MessageBubble
  message={{ role: "user", content: "¿Por qué me siento así hoy?", timestamp: "2026-08-09T21:34:00Z" }}
/>
`;

const ASSISTANT_CODE = `
<MessageBubble
  message={{
    role: "assistant",
    content: "Puede ser normal durante la **fase lútea** — el cuerpo pide más calma.",
    timestamp: "2026-08-09T21:34:20Z",
  }}
/>
`;

export default function MessageBubblePage() {
  return (
    <ComponentPage
      title="MessageBubble"
      tagline="Burbuja de chat — dos variantes visuales (usuario/asistente) según message.role, más un tercer modo que delega en ReconciliationCard."
      source="Chat/MessageBubble.tsx"
    >
      <Example title="Usuario" previewBackground="#FAF8FC" code={USER_CODE}>
        <MessageBubble message={{ role: "user", content: "¿Por qué me siento así hoy?", timestamp: "2026-08-09T21:34:00Z" }} />
      </Example>

      <Example
        title="Asistente"
        description="El contenido se renderiza como Markdown (react-markdown) — soporta negritas, listas, etc."
        previewBackground="#FAF8FC"
        code={ASSISTANT_CODE}
      >
        <MessageBubble
          message={{
            role: "assistant",
            content: "Puede ser normal durante la **fase lútea** — el cuerpo pide más calma.",
            timestamp: "2026-08-09T21:34:20Z",
          }}
        />
      </Example>

      <Section title="Component API">
        <PropsTable
          rows={[
            { name: "message", type: "ChatMessage", description: "{ role: 'user'|'assistant', content, timestamp, kind?, data? } — si kind === 'reconciliation' y data está presente, delega en ReconciliationCard en vez de renderizar una burbuja normal." },
            { name: "onConfirmReconciliation", type: "(formId, answers) => Promise<void>", description: "Solo relevante cuando message.kind === 'reconciliation'." },
          ]}
        />
      </Section>
    </ComponentPage>
  );
}
