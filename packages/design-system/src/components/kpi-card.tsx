import { ArrowDown, ArrowUp, type LucideIcon } from "lucide-react";
import { Line, LineChart, ResponsiveContainer } from "recharts";

import { cn } from "../lib/utils";
import { Card, CardContent, CardHeader, CardIcon, CardTitle } from "./card";

export interface KPICardProps {
  label: string;
  value: string | number;
  icon?: LucideIcon;
  delta?: { value: string; direction: "up" | "down" };
  /** Oculta la fila de delta por completo. @default true */
  showDelta?: boolean;
  sparklineData?: number[];
  /** Oculta el sparkline SIN reservar su espacio (a diferencia de showDelta=false, que
   *  simplemente no renderiza esa fila — acá tampoco se monta el contenedor). @default true */
  showSparkline?: boolean;
  className?: string;
}

// No existe un token semántico de éxito/positivo en tokens.css hoy (Banner variant="success"
// usa un hex inline #085041, no un custom property) — se usa la utilidad Tailwind estándar
// text-emerald-600 para el caso "up", y el token existente --color-destructive para "down".
const DELTA_STYLES = {
  up: {
    className: "text-emerald-600",
    Icon: ArrowUp,
    strokeColor: "#059669", // mismo verde que text-emerald-600, para el stroke del sparkline
  },
  down: {
    className: "text-destructive",
    Icon: ArrowDown,
    strokeColor: "var(--color-destructive)",
  },
} as const;

export function KPICard({
  label,
  value,
  icon: Icon,
  delta,
  showDelta = true,
  sparklineData,
  showSparkline = true,
  className,
}: KPICardProps) {
  const renderDelta = showDelta && !!delta;
  const renderSparkline =
    showSparkline && !!sparklineData && sparklineData.length > 0;
  const deltaStyle = delta ? DELTA_STYLES[delta.direction] : undefined;
  const chartData = sparklineData?.map((point, index) => ({
    index,
    value: point,
  }));

  return (
    <Card variant="neo" className={cn("gap-3", className)}>
      <CardHeader className="px-0 pt-0">
        <div className="flex items-center gap-3">
          {Icon && (
            <CardIcon>
              <Icon
                className="size-5 text-[--brand-primary]"
                aria-hidden="true"
              />
            </CardIcon>
          )}
          <CardTitle className="text-sm font-medium text-muted-foreground">
            {label}
          </CardTitle>
        </div>
      </CardHeader>
      <CardContent className="flex flex-col gap-2 px-0">
        <p className="text-3xl font-bold text-card-foreground">{value}</p>
        {renderDelta && deltaStyle && (
          <p
            className={cn(
              "inline-flex items-center gap-1 text-sm font-medium",
              deltaStyle.className,
            )}
          >
            <deltaStyle.Icon className="size-3.5" aria-hidden="true" />
            {delta.value}
          </p>
        )}
      </CardContent>
      {renderSparkline && (
        <div
          className="h-10 w-full"
          role="img"
          aria-label={`Tendencia de ${label}`}
        >
          <ResponsiveContainer width="100%" height="100%">
            <LineChart data={chartData}>
              <Line
                type="monotone"
                dataKey="value"
                stroke={deltaStyle?.strokeColor ?? "var(--color-brand-primary)"}
                strokeWidth={2}
                dot={false}
                isAnimationActive={false}
              />
            </LineChart>
          </ResponsiveContainer>
        </div>
      )}
    </Card>
  );
}
