import { clsx } from "clsx";
import { twMerge } from "tailwind-merge"

// recebendo prop input
export function cn(...inputs) {
  return twMerge(clsx(inputs));
}
