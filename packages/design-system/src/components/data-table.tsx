import * as React from "react";
import { cva, type VariantProps } from "class-variance-authority";
import { ChevronUp, ChevronDown } from "lucide-react";

import { cn } from "../lib/utils";

export interface DataTableColumn<T> {
  key: keyof T;
  header: string;
  render?: (value: T[keyof T], row: T) => React.ReactNode;
  sortable?: boolean;
}

// variant="default" preserva 1:1 el look/comportamiento previo a KAN-46 (regresión cero, sin
// otros consumidores conocidos de este componente — ver reporte FE). variant="admin" es la
// única adición: header con fondo de marca y wrapper sin sombra/radio neomórficos.
const dataTableWrapperVariants = cva("overflow-hidden", {
  variants: {
    variant: {
      default: "rounded-[--neo-radius]",
      admin: "",
    },
  },
  defaultVariants: {
    variant: "default",
  },
});

const dataTableHeadVariants = cva("", {
  variants: {
    variant: {
      default: "",
      admin: "bg-primary text-primary-foreground",
    },
  },
  defaultVariants: {
    variant: "default",
  },
});

const dataTableHeaderCellVariants = cva("px-4 py-3 text-left font-semibold", {
  variants: {
    variant: {
      default: "text-card-foreground",
      admin: "text-primary-foreground",
    },
  },
  defaultVariants: {
    variant: "default",
  },
});

export interface DataTableProps<T> extends VariantProps<
  typeof dataTableWrapperVariants
> {
  columns: DataTableColumn<T>[];
  rows: T[];
  keyExtractor: (row: T) => string;
  emptyState?: React.ReactNode;
  className?: string;
}

export function DataTable<T extends object>({
  columns,
  rows,
  keyExtractor,
  emptyState,
  variant = "default",
  className,
}: DataTableProps<T>) {
  const [sortKey, setSortKey] = React.useState<keyof T | null>(null);
  const [sortDir, setSortDir] = React.useState<"asc" | "desc">("asc");

  const sortedRows = React.useMemo(() => {
    if (!sortKey) return rows;
    return [...rows].sort((a, b) => {
      const aVal = a[sortKey];
      const bVal = b[sortKey];
      if (aVal < bVal) return sortDir === "asc" ? -1 : 1;
      if (aVal > bVal) return sortDir === "asc" ? 1 : -1;
      return 0;
    });
  }, [rows, sortKey, sortDir]);

  function handleSort(key: keyof T) {
    if (sortKey === key) {
      setSortDir((d) => (d === "asc" ? "desc" : "asc"));
    } else {
      setSortKey(key);
      setSortDir("asc");
    }
  }

  return (
    <div
      className={cn(dataTableWrapperVariants({ variant }), className)}
      style={
        variant === "admin"
          ? undefined
          : { boxShadow: "var(--neo-shadow-raised)" }
      }
    >
      <table className="w-full border-collapse text-sm">
        <thead
          className={dataTableHeadVariants({ variant })}
          style={
            variant === "admin"
              ? undefined
              : { background: "rgba(174,174,192,0.08)" }
          }
        >
          <tr>
            {columns.map((col) => (
              <th
                key={String(col.key)}
                className={cn(
                  dataTableHeaderCellVariants({ variant }),
                  col.sortable && "cursor-pointer select-none",
                )}
                onClick={col.sortable ? () => handleSort(col.key) : undefined}
              >
                <span className="inline-flex items-center gap-1">
                  {col.header}
                  {col.sortable && sortKey === col.key ? (
                    sortDir === "asc" ? (
                      <ChevronUp className="size-3.5" aria-hidden="true" />
                    ) : (
                      <ChevronDown className="size-3.5" aria-hidden="true" />
                    )
                  ) : col.sortable ? (
                    <ChevronUp
                      className="size-3.5 opacity-30"
                      aria-hidden="true"
                    />
                  ) : null}
                </span>
              </th>
            ))}
          </tr>
        </thead>
        <tbody>
          {sortedRows.length === 0 ? (
            <tr>
              <td
                colSpan={columns.length}
                className="px-4 py-8 text-center text-muted-foreground"
              >
                {emptyState ?? "Sin resultados"}
              </td>
            </tr>
          ) : (
            sortedRows.map((row, rowIndex) => (
              <tr
                key={keyExtractor(row)}
                style={
                  rowIndex % 2 === 1
                    ? { background: "rgba(174,174,192,0.04)" }
                    : undefined
                }
              >
                {columns.map((col) => (
                  <td
                    key={String(col.key)}
                    className="px-4 py-3 text-card-foreground"
                  >
                    {col.render
                      ? col.render(row[col.key], row)
                      : String(row[col.key] ?? "")}
                  </td>
                ))}
              </tr>
            ))
          )}
        </tbody>
      </table>
    </div>
  );
}
