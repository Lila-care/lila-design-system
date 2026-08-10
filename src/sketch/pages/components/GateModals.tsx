import { useState } from "react";
import LoginGateModal from "@/Chat/LoginGateModal";
import UpgradeGateModal from "@/Chat/UpgradeGateModal";
import { ComponentPage, Section, Example, PropsTable } from "../../doc";

// Ambos usan position: fixed; inset-0 — contain: "layout" en el contenedor de preview los
// confina al marco en vez de tapar toda la página del design system (truco válido de CSS
// Containment: contain:layout convierte al elemento en containing block de sus hijos fixed).
function ContainedPreview({ height = 420, children }: { height?: number; children: React.ReactNode }) {
  return (
    <div style={{ contain: "layout", position: "relative", height }}>
      {children}
    </div>
  );
}

const LOGIN_CODE = `
import LoginGateModal from "@/Chat/LoginGateModal";

<LoginGateModal freeQuestionLimit={3} onClose={() => setShowGate(false)} />
`;

const UPGRADE_CODE = `
import UpgradeGateModal from "@/Chat/UpgradeGateModal";

<UpgradeGateModal upgradePromptLimit={10} onClose={() => setShowGate(false)} />
`;

export default function GateModalsPage() {
  const [loginOpen, setLoginOpen] = useState(true);
  const [upgradeOpen, setUpgradeOpen] = useState(true);

  return (
    <ComponentPage
      title="LoginGateModal / UpgradeGateModal"
      tagline="Modales oscuros de paywall — casi idénticos entre sí (mismo layout, distinto copy). Se activan cuando una invitada agota sus preguntas gratuitas."
      source="Chat/LoginGateModal.tsx + Chat/UpgradeGateModal.tsx"
    >
      <Example title="LoginGateModal" description="Redirige a /login al hacer clic en 'Iniciar sesión'." code={LOGIN_CODE}>
        <ContainedPreview>
          {loginOpen ? (
            <LoginGateModal freeQuestionLimit={3} onClose={() => setLoginOpen(false)} />
          ) : (
            <button className="text-sm underline" style={{ color: "#9B72C8" }} onClick={() => setLoginOpen(true)}>
              Volver a mostrar
            </button>
          )}
        </ContainedPreview>
      </Example>

      <Example title="UpgradeGateModal" code={UPGRADE_CODE}>
        <ContainedPreview>
          {upgradeOpen ? (
            <UpgradeGateModal upgradePromptLimit={10} onClose={() => setUpgradeOpen(false)} />
          ) : (
            <button className="text-sm underline" style={{ color: "#9B72C8" }} onClick={() => setUpgradeOpen(true)}>
              Volver a mostrar
            </button>
          )}
        </ContainedPreview>
      </Example>

      <Section title="Component API">
        <PropsTable
          heading="LoginGateModal"
          rows={[
            { name: "freeQuestionLimit", type: "number", description: "Se interpola en el subtítulo: 'Has usado tus {N} preguntas gratuitas'." },
            { name: "onClose", type: "() => void", description: "Clic en 'No ahora' o en el backdrop." },
          ]}
        />
        <PropsTable
          heading="UpgradeGateModal"
          rows={[
            { name: "upgradePromptLimit", type: "number", description: "⚠️ Se recibe pero nunca se usa — el copy no lo interpola (prop muerta, ver el destructuring _upgradePromptLimit en el archivo fuente)." },
            { name: "onClose", type: "() => void", description: "Ambos botones ('Mejorar mi plan' y 'Volver mañana') llaman a onClose — ninguno navega a un flujo de upgrade real todavía." },
          ]}
        />
      </Section>
    </ComponentPage>
  );
}
