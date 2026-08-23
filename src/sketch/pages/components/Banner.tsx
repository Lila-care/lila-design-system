import { useState } from "react";
import { Banner } from "@lila-care/design-system";
import { ComponentPage, Section, Example, PropsTable } from "../../doc";

const VARIANTS_CODE = `
import { Banner } from "@lila-care/design-system";

<Banner variant="info"    message="Actualizamos los términos de privacidad." />
<Banner variant="success" message="Los cambios se guardaron correctamente." />
<Banner variant="warning" message="Tu sesión expira en 5 minutos." />
<Banner variant="error"   message="No pudimos procesar tu solicitud. Intenta de nuevo." />
`;

const WITH_TITLE_CODE = `
<Banner
  variant="info"
  title="Nueva función disponible"
  message="Podés registrar tu ciclo desde la sección Hoy."
/>
<Banner
  variant="success"
  title="Perfil actualizado"
  message="Los datos de tu perfil se guardaron correctamente."
/>
`;

const DISMISS_CODE = `
const [visible, setVisible] = useState(true);

{visible && (
  <Banner
    variant="warning"
    title="Recordatorio"
    message="Completá tu perfil para obtener recomendaciones personalizadas."
    onDismiss={() => setVisible(false)}
  />
)}
`;

function DismissExample() {
  const [visible, setVisible] = useState(true);
  return visible ? (
    <Banner
      variant="warning"
      title="Recordatorio"
      message="Completá tu perfil para obtener recomendaciones personalizadas."
      onDismiss={() => setVisible(false)}
    />
  ) : (
    <p className="text-sm text-muted-foreground">
      Banner descartado. Recargá la página para verlo de nuevo.
    </p>
  );
}

export default function BannerPage() {
  return (
    <ComponentPage
      title="Banner"
      tagline="Notificaciones contextuales con estilo neomorphism. Cuatro variantes para estados info, éxito, advertencia y error."
      source="packages/design-system/src/components/banner.tsx"
    >
      <Example
        title="Cuatro variantes"
        description="info, success, warning y error. Cada una usa su propio fondo neomorphism y color de texto."
        code={VARIANTS_CODE}
      >
        <div className="flex w-full flex-col gap-3">
          <Banner
            variant="info"
            message="Actualizamos los términos de privacidad."
          />
          <Banner
            variant="success"
            message="Los cambios se guardaron correctamente."
          />
          <Banner variant="warning" message="Tu sesión expira en 5 minutos." />
          <Banner
            variant="error"
            message="No pudimos procesar tu solicitud. Intenta de nuevo."
          />
        </div>
      </Example>

      <Example
        title="Con título"
        description="El prop title agrega una línea destacada encima del mensaje."
        code={WITH_TITLE_CODE}
      >
        <div className="flex w-full flex-col gap-3">
          <Banner
            variant="info"
            title="Nueva función disponible"
            message="Podés registrar tu ciclo desde la sección Hoy."
          />
          <Banner
            variant="success"
            title="Perfil actualizado"
            message="Los datos de tu perfil se guardaron correctamente."
          />
        </div>
      </Example>

      <Example
        title="Con botón de descarte"
        description="onDismiss muestra el botón × alineado a la derecha. La lógica de visibilidad queda en el componente padre."
        code={DISMISS_CODE}
      >
        <div className="w-full">
          <DismissExample />
        </div>
      </Example>

      <Section title="Component API">
        <PropsTable
          heading="Banner"
          rows={[
            {
              name: "variant",
              type: '"info" | "success" | "warning" | "error"',
              description:
                "Controla el fondo neomorphism, el color de texto y el ícono de la variante.",
            },
            {
              name: "message",
              type: "string",
              description: "Texto principal del banner. Requerido.",
            },
            {
              name: "title",
              type: "string",
              description:
                "Línea de encabezado en negrita sobre el mensaje. Opcional.",
            },
            {
              name: "onDismiss",
              type: "() => void",
              description:
                "Si se pasa, muestra el botón × y llama esta función al hacer clic.",
            },
            {
              name: "className",
              type: "string",
              description: "Se combina con las clases del variant vía cn().",
            },
          ]}
        />
      </Section>
    </ComponentPage>
  );
}
