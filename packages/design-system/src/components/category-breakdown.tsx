import { cn } from "../lib/utils";

export interface CategoryBreakdownCategory {
  label: string;
  value: number;
  /** @default true */
  show?: boolean;
}

export interface CategoryBreakdownProps {
  /** Máximo 4 categorías — solo las 4 primeras reciben un color de --chart-1..4. */
  categories: CategoryBreakdownCategory[];
  className?: string;
}

// Orden fijo por posición en el array original (no por posición entre las visibles), para que
// una categoría mantenga siempre el mismo color aunque otra se oculte con show=false.
const CHART_COLOR_CLASSES = [
  "bg-[--chart-1]",
  "bg-[--chart-2]",
  "bg-[--chart-3]",
  "bg-[--chart-4]",
] as const;

export function CategoryBreakdown({
  categories,
  className,
}: CategoryBreakdownProps) {
  const visible = categories
    .map((category, index) => ({
      ...category,
      colorClass: CHART_COLOR_CLASSES[index] ?? CHART_COLOR_CLASSES[0],
    }))
    .filter((category) => category.show !== false);

  const total = visible.reduce((sum, category) => sum + category.value, 0);

  return (
    <div className={cn("flex flex-col gap-3", className)}>
      <div
        className="flex h-3 w-full overflow-hidden rounded-full bg-[--neo-bg]"
        role="img"
        aria-label={visible
          .map((category) => `${category.label}: ${category.value}`)
          .join(", ")}
      >
        {visible.map((category) => (
          <div
            key={category.label}
            className={category.colorClass}
            style={{
              width: total > 0 ? `${(category.value / total) * 100}%` : 0,
            }}
          />
        ))}
      </div>
      <ul className="flex flex-wrap gap-x-4 gap-y-2">
        {visible.map((category) => (
          <li
            key={category.label}
            className="flex items-center gap-2 text-sm text-muted-foreground"
          >
            <span
              className={cn(
                "size-2.5 shrink-0 rounded-full",
                category.colorClass,
              )}
              aria-hidden="true"
            />
            <span className="text-card-foreground">{category.label}</span>
            <span>{category.value}</span>
          </li>
        ))}
      </ul>
    </div>
  );
}
