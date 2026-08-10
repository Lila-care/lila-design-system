import { useState } from "react";
import EmptyState from "@/components/EmptyState";
import { ComponentPage, Section, Example, PropsTable } from "../../doc";

const BASIC_CODE = `
import EmptyState from "@/components/EmptyState";

function Example() {
  return <EmptyState onSend={(message) => sendFirstMessage(message)} />;
}
`;

export default function EmptyStatePage() {
  const [lastSent, setLastSent] = useState<string | null>(null);

  return (
    <ComponentPage
      title="EmptyState"
      tagline="La pantalla de bienvenida del Chat antes del primer mensaje — logo animado, sugerencias y composer."
      source="components/EmptyState.tsx"
    >
      <Example
        title="Ejemplo básico"
        description="Se muestra cuando no hay mensajes, no está cargando y no hay onboarding pendiente (ver ChatWindow.tsx)."
        previewHeight={620}
        previewBackground="#FAF8FC"
        code={BASIC_CODE}
      >
        <div className="mx-auto h-[560px] max-w-[420px] overflow-hidden rounded-2xl">
          <EmptyState onSend={(msg) => setLastSent(msg)} />
        </div>
      </Example>
      {lastSent && (
        <p className="text-[12.5px]" style={{ color: "#8A8194" }}>
          Último mensaje enviado (mock): "{lastSent}"
        </p>
      )}

      <Section title="Component API">
        <PropsTable
          rows={[
            {
              name: "onSend",
              type: "(message: string) => void",
              description:
                "Se dispara al enviar desde el composer o al tocar una de las 4 sugerencias (Bienestar/Conocimiento/Salud/Diario).",
            },
          ]}
        />
      </Section>
    </ComponentPage>
  );
}
