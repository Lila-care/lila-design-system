import { useState } from "react";
// Import en vivo desde lila-web (vía el alias "@" -> lila-web/src en vite.config.ts).
// No son copias: es el mismo archivo fuente que corre en producción.
import {
  Table,
  TableHeader,
  TableBody,
  TableRow,
  TableHead,
  TableCell,
} from "@/components/ui/table";
import EmptyState from "@/components/EmptyState";

const MOCK_ROWS = [
  { name: "Sofía R.", email: "sofia@lilacareapp.com", plan: "Premium" },
  { name: "Valentina M.", email: "valentina@lilacareapp.com", plan: "Free" },
  { name: "Camila G.", email: "camila@lilacareapp.com", plan: "Premium" },
];

function PreviewFrame({ label, children }: { label: string; children: React.ReactNode }) {
  return (
    <div className="rounded-xl border" style={{ borderColor: "rgba(61,43,80,0.1)" }}>
      <div
        className="border-b px-4 py-2 text-xs font-semibold uppercase tracking-wide"
        style={{ borderColor: "rgba(61,43,80,0.1)", color: "#A79FB2" }}
      >
        {label}
      </div>
      <div className="p-4">{children}</div>
    </div>
  );
}

export default function ComponentsGallery() {
  const [lastSent, setLastSent] = useState<string | null>(null);

  return (
    <div className="flex flex-col gap-8">
      <PreviewFrame label="Table — @/components/ui/table.tsx">
        <Table>
          <TableHeader>
            <TableRow>
              <TableHead>Nombre</TableHead>
              <TableHead>Email</TableHead>
              <TableHead>Plan</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {MOCK_ROWS.map((row) => (
              <TableRow key={row.email}>
                <TableCell>{row.name}</TableCell>
                <TableCell>{row.email}</TableCell>
                <TableCell>{row.plan}</TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </PreviewFrame>

      <PreviewFrame label="EmptyState — @/components/EmptyState.tsx">
        <div className="h-[560px] overflow-hidden rounded-lg" style={{ position: "relative" }}>
          <EmptyState onSend={(msg) => setLastSent(msg)} />
        </div>
        {lastSent && (
          <div className="mt-3 text-xs" style={{ color: "#8A8194" }}>
            Último mensaje enviado (mock): "{lastSent}"
          </div>
        )}
      </PreviewFrame>
    </div>
  );
}
