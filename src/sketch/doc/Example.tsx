import type { ReactNode } from "react";
import { CodeBlock } from "./CodeBlock";

interface ExampleProps {
  title?: string;
  description?: ReactNode;
  /** Alto fijo del marco de preview — útil para componentes que necesitan overflow controlado (listas, sidebars). */
  previewHeight?: number;
  /** Fondo del marco de preview. Por defecto blanco (como Catalyst); usar el bg real de la app para piezas que dependen de contraste (ej. componentes sobre fondo oscuro). */
  previewBackground?: string;
  code: string;
  language?: "tsx" | "ts" | "bash";
  children: ReactNode;
}

export function Example({
  title,
  description,
  previewHeight,
  previewBackground = "#ffffff",
  code,
  language,
  children,
}: ExampleProps) {
  return (
    <div className="flex flex-col gap-3">
      {title && (
        <h3 className="text-[15px] font-semibold" style={{ color: "#4A2D6E" }}>
          {title}
        </h3>
      )}
      {description && (
        <p className="text-[13.5px]" style={{ color: "#8A8194" }}>
          {description}
        </p>
      )}
      <div
        className="flex items-center justify-center overflow-auto rounded-xl border p-8"
        style={{
          borderColor: "rgba(61,43,80,0.1)",
          background: previewBackground,
          ...(previewHeight ? { height: previewHeight } : {}),
        }}
      >
        <div className="w-full">{children}</div>
      </div>
      <CodeBlock code={code} language={language} />
    </div>
  );
}
