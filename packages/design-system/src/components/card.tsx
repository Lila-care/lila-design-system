import * as React from "react";
import { cva, type VariantProps } from "class-variance-authority";

import { cn } from "../lib/utils";

const cardVariants = cva("", {
  variants: {
    variant: {
      default:
        "flex flex-col gap-6 rounded-xl border bg-card py-6 text-card-foreground shadow-sm",
      stat: "flex flex-col gap-3 rounded-xl border-primary/15 bg-gradient-to-br from-primary/10 to-secondary py-6 text-card-foreground shadow-stat",
      neo: "flex flex-col gap-4 rounded-[--neo-radius] bg-[--neo-bg] p-6 text-card-foreground",
    },
  },
  defaultVariants: {
    variant: "default",
  },
});

function Card({
  className,
  variant = "default",
  style,
  ...props
}: React.ComponentProps<"div"> & VariantProps<typeof cardVariants>) {
  const neoBoxShadow =
    variant === "neo" ? { boxShadow: "var(--neo-shadow-raised)" } : undefined;
  return (
    <div
      data-slot="card"
      data-variant={variant}
      className={cn(cardVariants({ variant }), className)}
      style={neoBoxShadow ? { ...neoBoxShadow, ...style } : style}
      {...props}
    />
  );
}

function CardHeader({ className, ...props }: React.ComponentProps<"div">) {
  return (
    <div
      data-slot="card-header"
      className={cn(
        "@container/card-header grid auto-rows-min grid-rows-[auto_auto] items-start gap-2 px-6 has-data-[slot=card-action]:grid-cols-[1fr_auto] [.border-b]:pb-6",
        className,
      )}
      {...props}
    />
  );
}

function CardTitle({ className, ...props }: React.ComponentProps<"div">) {
  return (
    <div
      data-slot="card-title"
      className={cn("leading-none font-semibold", className)}
      {...props}
    />
  );
}

function CardDescription({ className, ...props }: React.ComponentProps<"div">) {
  return (
    <div
      data-slot="card-description"
      className={cn("text-sm text-muted-foreground", className)}
      {...props}
    />
  );
}

function CardAction({ className, ...props }: React.ComponentProps<"div">) {
  return (
    <div
      data-slot="card-action"
      className={cn(
        "col-start-2 row-span-2 row-start-1 self-start justify-self-end",
        className,
      )}
      {...props}
    />
  );
}

function CardContent({ className, ...props }: React.ComponentProps<"div">) {
  return (
    <div
      data-slot="card-content"
      className={cn("px-6", className)}
      {...props}
    />
  );
}

function CardFooter({ className, ...props }: React.ComponentProps<"div">) {
  return (
    <div
      data-slot="card-footer"
      className={cn("flex items-center px-6 [.border-t]:pt-6", className)}
      {...props}
    />
  );
}

interface CardIconProps {
  children: React.ReactNode;
  className?: string;
}

function CardIcon({ children, className }: CardIconProps) {
  return (
    <div
      className={cn(
        "flex size-12 shrink-0 items-center justify-center rounded-full bg-[--neo-bg]",
        className,
      )}
      style={{ boxShadow: "var(--neo-shadow-raised-sm)" }}
    >
      {children}
    </div>
  );
}

interface CardMetadataProps {
  icon?: React.ReactNode;
  children: React.ReactNode;
  className?: string;
}

function CardMetadata({ icon, children, className }: CardMetadataProps) {
  return (
    <div
      className={cn(
        "flex flex-row items-center gap-2 text-sm text-muted-foreground",
        className,
      )}
    >
      {icon}
      {children}
    </div>
  );
}

export {
  Card,
  cardVariants,
  CardHeader,
  CardFooter,
  CardTitle,
  CardAction,
  CardDescription,
  CardContent,
  CardIcon,
  CardMetadata,
};
