import ReconciliationCard from "@/Chat/ReconciliationCard";
import { ComponentPage, Section, Example, PropsTable } from "../../doc";

const MOCK_DATA = {
  formId: "form-onboarding-1",
  questions: [
    { questionId: "q1", text: "¿Cómo te gustaría que te llamáramos?", answerText: "Zoleth" },
    { questionId: "q2", text: "¿Cuándo fue tu último periodo?", answerText: "Hace 5 días" },
    { questionId: "q3", text: "¿Tu ciclo es regular?", answerText: "Sí, regular" },
  ],
};

const CODE = `
import ReconciliationCard from "@/Chat/ReconciliationCard";

<ReconciliationCard
  data={{ formId: "form-1", questions: [...] }}
  onConfirm={(formId, answers) => api.reconcileOnboarding(formId, answers)}
/>
`;

export default function ReconciliationCardPage() {
  return (
    <ComponentPage
      title="ReconciliationCard"
      tagline='Tarjeta de "revisemos lo que ya nos contaste" al final del onboarding — cada respuesta es editable inline antes de confirmar. Maneja su propio estado (idle → saving → success/error).'
      source="Chat/ReconciliationCard.tsx"
    >
      <Example
        title="Interactivo — prueba editar una respuesta y confirmar"
        description="Este onConfirm mock resuelve después de 700ms. Haz clic en el lápiz para editar, o en 'Confirmar y guardar' para ver el estado de éxito real del componente."
        previewBackground="#FAF8FC"
        previewHeight={420}
        code={CODE}
      >
        <ReconciliationCard
          data={MOCK_DATA}
          onConfirm={() => new Promise((resolve) => setTimeout(resolve, 700))}
        />
      </Example>

      <Example
        title="Con error"
        description="onConfirm rechaza — el componente muestra el mensaje de error y permite reintentar sin perder las ediciones."
        previewBackground="#FAF8FC"
        previewHeight={420}
        code={`onConfirm={() => Promise.reject(new Error("No pudimos guardar tus respuestas. Intenta de nuevo."))}`}
      >
        <ReconciliationCard
          data={{ ...MOCK_DATA, formId: "form-onboarding-error" }}
          onConfirm={() =>
            new Promise((_, reject) =>
              setTimeout(() => reject(new Error("No pudimos guardar tus respuestas. Intenta de nuevo.")), 500),
            )
          }
        />
      </Example>

      <Section title="Component API">
        <PropsTable
          rows={[
            { name: "data", type: "ReconciliationData", description: "{ formId: string, questions: { questionId, text, answerText }[] }" },
            { name: "onConfirm", type: "(formId, answers) => Promise<void>", description: "Se llama al confirmar. Un reject muestra el estado de error; un resolve muestra el mensaje de éxito y reemplaza la tarjeta." },
          ]}
        />
      </Section>
    </ComponentPage>
  );
}
