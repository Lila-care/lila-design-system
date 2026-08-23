import { useEffect, useRef } from "react";
import ReconciliationCard from "@/Chat/ReconciliationCard";
import { ComponentPage, Section, Example, PropsTable } from "../../doc";

const CYCLE_MOCK_DATA = {
  formId: "form-onboarding-1",
  questions: [
    {
      questionId: "q-name",
      text: "¿Cómo te gustaría que te llamáramos?",
      answerText: "Camila",
    },
    {
      questionId: "q-last-period",
      text: "¿Cuándo fue tu última menstruación?",
      answerText: "Hace 12 días",
    },
    {
      questionId: "q-cycle-duration",
      text: "¿Cuántos días dura tu ciclo aproximadamente?",
      answerText: "28 días",
    },
    {
      questionId: "q-flow-type",
      text: "¿Cómo describirías tu flujo?",
      answerText: "Moderado",
    },
  ],
};

/** Wrapper que hace clic en el primer botón de edición para mostrar el modo edición en el catálogo. */
function EditModePreview() {
  const wrapperRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const editBtn = wrapperRef.current?.querySelector<HTMLButtonElement>(
      '[data-testid^="reconciliation-edit-"]',
    );
    editBtn?.click();
  }, []);

  return (
    <div ref={wrapperRef}>
      <ReconciliationCard
        data={CYCLE_MOCK_DATA}
        onConfirm={() => new Promise((resolve) => setTimeout(resolve, 700))}
      />
    </div>
  );
}

const READ_MODE_CODE = `
import ReconciliationCard from "@/Chat/ReconciliationCard";

<ReconciliationCard
  data={{
    formId: "form-onboarding-1",
    questions: [
      { questionId: "q-name",           text: "¿Cómo te gustaría que te llamáramos?",     answerText: "Camila"     },
      { questionId: "q-last-period",    text: "¿Cuándo fue tu última menstruación?",       answerText: "Hace 12 días" },
      { questionId: "q-cycle-duration", text: "¿Cuántos días dura tu ciclo?",             answerText: "28 días"    },
      { questionId: "q-flow-type",      text: "¿Cómo describirías tu flujo?",             answerText: "Moderado"   },
    ],
  }}
  onConfirm={(formId, answers) => api.reconcileOnboarding(formId, answers)}
/>
`;

const EDIT_MODE_CODE = `
// El modo edición se activa al hacer clic en el ícono de lápiz de cualquier respuesta.
// En este ejemplo el catálogo hace clic automáticamente en el primer lápiz para mostrar
// el input activo al cargar.
<ReconciliationCard data={CYCLE_MOCK_DATA} onConfirm={...} />
`;

export default function ReconciliationCardPage() {
  return (
    <ComponentPage
      title="ReconciliationCard"
      tagline='Tarjeta de "revisemos lo que ya nos contaste" al final del onboarding — cada respuesta es editable inline antes de confirmar. Maneja su propio estado (idle → saving → success/error). Usa los primitivos Card, CardHeader, CardTitle, CardContent, CardFooter y Button del design system.'
      source="Chat/ReconciliationCard.tsx"
    >
      <Example
        title="Modo lectura — estado inicial"
        description="Sin ningún campo en edición. Las respuestas se muestran con el ícono de lápiz para editar. Datos de muestra: nombre, última menstruación, duración de ciclo y tipo de flujo."
        previewBackground="#FAF6F0"
        previewHeight={460}
        code={READ_MODE_CODE}
      >
        <ReconciliationCard
          data={CYCLE_MOCK_DATA}
          onConfirm={() => new Promise((resolve) => setTimeout(resolve, 700))}
        />
      </Example>

      <Example
        title="Modo edición — campo activo"
        description="El catálogo hace clic en el primer lápiz automáticamente para mostrar el input. En producción, el usuario activa este estado tocando cualquier ícono de lápiz."
        previewBackground="#FAF6F0"
        previewHeight={460}
        code={EDIT_MODE_CODE}
      >
        <EditModePreview />
      </Example>

      <Example
        title="Estado de error — onConfirm rechaza"
        description="El componente muestra el mensaje de error y permite reintentar sin perder las ediciones."
        previewBackground="#FAF6F0"
        previewHeight={460}
        code={`onConfirm={() => Promise.reject(new Error("No pudimos guardar tus respuestas. Intenta de nuevo."))}`}
      >
        <ReconciliationCard
          data={{ ...CYCLE_MOCK_DATA, formId: "form-onboarding-error" }}
          onConfirm={() =>
            new Promise((_, reject) =>
              setTimeout(
                () =>
                  reject(
                    new Error(
                      "No pudimos guardar tus respuestas. Intenta de nuevo.",
                    ),
                  ),
                500,
              ),
            )
          }
        />
      </Example>

      <Section title="Component API">
        <PropsTable
          rows={[
            {
              name: "data",
              type: "ReconciliationData",
              description:
                "{ formId: string, questions: { questionId, text, answerText }[] }",
            },
            {
              name: "onConfirm",
              type: "(formId, answers) => Promise<void>",
              description:
                "Se llama al confirmar. Un reject muestra el estado de error; un resolve muestra el mensaje de éxito y reemplaza la tarjeta.",
            },
          ]}
        />
      </Section>
    </ComponentPage>
  );
}
