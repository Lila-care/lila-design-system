const LILA_WEB_URL = "http://localhost:5173";

interface LiveFrameProps {
  route: string;
  width?: number;
  height?: number;
  label?: string;
}

// A diferencia de los Componentes (piezas presentacionales, mockeables sin riesgo), estas
// páginas orquestan hooks con fetch real (useHoy, useCalendario, usePerfil, etc.) contra
// ms-lila. Reconstruirlas con providers/mocks se desincroniza con el tiempo; un iframe al
// dev server real siempre muestra el estado verdadero (incluyendo loading/error genuinos).
export function LiveFrame({ route, width = 420, height = 700, label }: LiveFrameProps) {
  const url = `${LILA_WEB_URL}${route}`;
  return (
    <div className="flex flex-col gap-2">
      <div
        className="overflow-hidden rounded-2xl"
        style={{ border: "1px solid rgba(61,43,80,0.12)", width, height }}
      >
        <iframe
          src={url}
          title={label ?? route}
          style={{ width: "100%", height: "100%", border: "none" }}
        />
      </div>
      <a
        href={url}
        target="_blank"
        rel="noreferrer"
        className="text-[12px] underline"
        style={{ color: "#9B72C8" }}
      >
        Abrir {route} en una pestaña nueva ↗
      </a>
    </div>
  );
}

export function LiveFrameNote() {
  return (
    <p className="text-[12.5px]" style={{ color: "#A79FB2" }}>
      Vista en vivo del dev server real de <code>lila-web</code> (puerto 5173) — no una
      reconstrucción con mocks. Si el iframe aparece en blanco o en error, es porque el dev
      server no está corriendo (<code>npm run dev</code> en <code>lila-web/</code>), no un bug
      del design system.
    </p>
  );
}
