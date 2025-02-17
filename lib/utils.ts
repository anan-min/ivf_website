import { clsx, type ClassValue } from "clsx";
import { twMerge } from "tailwind-merge";
import { format } from "date-fns";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export function getDatebyDay(date: Date, day: number): Date {
  const result = new Date(date);
  result.setDate(date.getDate() + day);
  return result;
}

export function getFormatDateByDay(date: Date, day: number): string {
  const result = getDatebyDay(date, day);
  return format(result, "PP");
}
