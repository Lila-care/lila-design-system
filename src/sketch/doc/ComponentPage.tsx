import type { ReactNode } from "react";

interface ComponentPageProps {
  title: string;
  tagline: string;
  /** Path real dentro de lila-web/src — deja claro que esto es código en vivo, no una copia. */
  source: string;
  children: ReactNode;
}

export function ComponentPage({ title, tagline, source, children }: ComponentPageProps) {
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
          <code className="rounded px-1.5 py-0.5" style={{ background: "#F3EDF7", color: "#4A2D6E" }}>
            lila-web/{source}
          </code>
        </p>
      </header>
      {children}
    </div>
  );
}

export function Section({ title, children }: { title: string; children: ReactNode }) {
  return (
    <section className="flex flex-col gap-4">
      <h2 className="text-lg font-semibold" style={{ color: "#4A2D6E" }}>
        {title}
      </h2>
      {children}
    </section>
  );
}
