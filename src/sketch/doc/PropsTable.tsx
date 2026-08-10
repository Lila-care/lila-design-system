export interface PropRow {
  name: string;
  type?: string;
  default?: string;
  description: string;
}

interface PropsTableProps {
  /** Nombre del componente/export al que aplica esta tabla — se usa como encabezado de grupo cuando hay más de una. */
  heading?: string;
  rows: PropRow[];
}

export function PropsTable({ heading, rows }: PropsTableProps) {
  return (
    <div className="overflow-x-auto rounded-xl border" style={{ borderColor: "rgba(61,43,80,0.1)" }}>
      {heading && (
        <div
          className="border-b px-4 py-2 text-[13px]"
          style={{ borderColor: "rgba(61,43,80,0.1)", background: "#FAF6F0", color: "#4A2D6E" }}
        >
          <code className="font-semibold">{heading}</code>
        </div>
      )}
      <table className="w-full min-w-[560px] border-collapse text-left text-[13.5px]">
        <thead>
          <tr style={{ color: "#A79FB2" }}>
            <th className="w-[22%] px-4 py-2 font-medium">Prop</th>
            <th className="w-[18%] px-4 py-2 font-medium">Default</th>
            <th className="px-4 py-2 font-medium">Description</th>
          </tr>
        </thead>
        <tbody>
          {rows.map((row) => (
            <tr key={row.name} className="border-t" style={{ borderColor: "rgba(61,43,80,0.08)" }}>
              <td className="px-4 py-2.5 align-top">
                <code style={{ color: "#4A2D6E" }}>{row.name}</code>
                {row.type && (
                  <div className="mt-0.5 text-[11.5px]" style={{ color: "#A79FB2" }}>
                    {row.type}
                  </div>
                )}
              </td>
              <td className="px-4 py-2.5 align-top" style={{ color: "#8A8194" }}>
                {row.default ?? "—"}
              </td>
              <td className="px-4 py-2.5 align-top" style={{ color: "#4B4453" }}>
                {row.description}
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
