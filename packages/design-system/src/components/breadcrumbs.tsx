import * as React from "react";

import { cn } from "../lib/utils";

export interface BreadcrumbItem {
  label: string;
  href?: string;
}

export interface BreadcrumbsProps {
  items: BreadcrumbItem[];
  separator?: React.ReactNode;
  className?: string;
}

export function Breadcrumbs({
  items,
  separator = "/",
  className,
}: BreadcrumbsProps) {
  return (
    <nav
      aria-label="Breadcrumb"
      className={cn(
        "inline-flex items-center gap-1 rounded-[--neo-radius-sm] bg-[--neo-bg] px-4 py-2 text-sm",
        className,
      )}
      style={{ boxShadow: "var(--neo-shadow-raised-sm)" }}
    >
      {items.map((item, index) => {
        const isLast = index === items.length - 1;
        return (
          <React.Fragment key={index}>
            {index > 0 && (
              <span
                className="mx-1 select-none text-muted-foreground"
                aria-hidden="true"
              >
                {separator}
              </span>
            )}
            {isLast ? (
              <span
                className="font-semibold text-brand-dark"
                aria-current="page"
              >
                {item.label}
              </span>
            ) : item.href ? (
              <a
                href={item.href}
                className="text-muted-foreground transition-colors hover:text-brand-purple"
              >
                {item.label}
              </a>
            ) : (
              <span className="text-muted-foreground">{item.label}</span>
            )}
          </React.Fragment>
        );
      })}
    </nav>
  );
}
