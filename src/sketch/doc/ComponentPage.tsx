import type { ReactNode } from "react";

interface ComponentPageProps {
  title: string;
  tagline: string;
  /**
   * Path real del código fuente. Dos convenciones conviven:
   * - Relativo a `lila-web/src` (la mayoría) — ej. "Chat/MessageBubble.tsx".
   * - Path completo desde la raíz de `lila-design-system` para lo que vive en
   *   `packages/design-system/` (los primitivos publicados) — ej.
   *   "packages/design-system/src/components/card.tsx". Esos ya no viven en lila-web
   *   (ver PR #29 de lila-web), así que anteponerles "lila-web/" sería un path falso.
   */
  source: string;
  children: ReactNode;
}

export function ComponentPage({
  title,
  tagline,
  source,
  children,
}: ComponentPageProps) {
  const displaySource = source.startsWith("packages/design-system/")
    ? source
    : `lila-web/${source}`;
  return (
    <div className="flex flex-col gap-8">
      <header>
        <h1 className="text-2xl font-semibold" style={{ color: "#4A2D6E" }}>
          {title}
        </h1>
        <p className="mt-1.5 text-[14.5px]" style={{ color: "#8A8194" }}>
          {tagline}
        </p>
        <p className="mt-2 text-[12px]" style={{ color: "#A79FB2" }}>
          Fuente en vivo:{" "}
          <code
            className="rounded px-1.5 py-0.5"
            style={{ background: "#F3EDF7", color: "#4A2D6E" }}
          >
            {displaySource}
          </code>
        </p>
      </header>
      {children}
    </div>
  );
}

export function Section({
  title,
  children,
}: {
  title: string;
  children: ReactNode;
}) {
  return (
    <section className="flex flex-col gap-4">
      <h2 className="text-lg font-semibold" style={{ color: "#4A2D6E" }}>
        {title}
      </h2>
      {children}
    </section>
  );
}
