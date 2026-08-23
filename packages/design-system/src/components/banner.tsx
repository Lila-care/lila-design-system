import { cva } from "class-variance-authority";
import { Info, CheckCircle, AlertTriangle, AlertCircle, X } from "lucide-react";

import { cn } from "../lib/utils";

export interface BannerProps {
  variant: "info" | "success" | "warning" | "error";
  title?: string;
  message: string;
  onDismiss?: () => void;
  className?: string;
}

const bannerVariants = cva(
  "flex items-start gap-3 rounded-[--neo-radius] p-4",
  {
    variants: {
      variant: {
        info: "bg-[--neo-bg] text-brand-dark",
        success: "bg-[--neo-bg-mint] text-[#085041]",
        warning: "bg-[--neo-bg-cream] text-[#633806]",
        error: "bg-[--neo-bg-rose] text-[#72243E]",
      },
    },
    defaultVariants: {
      variant: "info",
    },
  },
);

const ICONS = {
  info: Info,
  success: CheckCircle,
  warning: AlertTriangle,
  error: AlertCircle,
} as const;

export function Banner({
  variant,
  title,
  message,
  onDismiss,
  className,
}: BannerProps) {
  const Icon = ICONS[variant];

  return (
    <div
      role="alert"
      data-slot="banner"
      data-variant={variant}
      className={cn(bannerVariants({ variant }), className)}
      style={{ boxShadow: "var(--neo-shadow-inset)" }}
    >
      <Icon className="mt-0.5 size-5 shrink-0" aria-hidden="true" />
      <div className="min-w-0 flex-1">
        {title && <p className="mb-1 font-semibold">{title}</p>}
        <p className="text-sm">{message}</p>
      </div>
      {onDismiss && (
        <button
          type="button"
          onClick={onDismiss}
          aria-label="Cerrar"
          className="ml-auto shrink-0 rounded opacity-70 transition-opacity hover:opacity-100 focus-visible:outline-none focus-visible:ring-2"
        >
          <X className="size-4" aria-hidden="true" />
        </button>
      )}
    </div>
  );
}
