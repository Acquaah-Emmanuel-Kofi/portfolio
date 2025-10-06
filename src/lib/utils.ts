import { clsx, type ClassValue } from "clsx";
import { twMerge } from "tailwind-merge";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export function formatDate(date: string | number | Date): string {
  return new Date(date).toLocaleDateString("en-US", {
    month: "short",
    day: "2-digit",
    year: "numeric",
  });
}

export interface FormattedDate {
  formatted: string; // e.g. "October 5, 2025"
  tooltip: string; // e.g. "Sun, October 5, 2025, 12:00 AM"
}

/**
 * Formats a date string into a readable form and a tooltip form.
 * @param dateString ISO string or date string (e.g. "2025-10-05" or "2025-10-05T12:00:00Z")
 * @returns FormattedDate { formatted, tooltip }
 */
export function formatDateWithTooltip(dateString: string): FormattedDate {
  const date = new Date(dateString);

  const formatted = date.toLocaleDateString("en-US", {
    year: "numeric",
    month: "long",
    day: "numeric",
  });

  const tooltip = date.toLocaleString("en-US", {
    weekday: "short",
    year: "numeric",
    month: "long",
    day: "numeric",
    hour: "numeric",
    minute: "2-digit",
    hour12: true,
  });

  return { formatted, tooltip };
}

/**
 * Convenience helper to format both posted and updated dates at once.
 */
export function formatArticleDates(posted: string, updated: string) {
  return {
    posted: formatDateWithTooltip(posted),
    updated: formatDateWithTooltip(updated),
  };
}
