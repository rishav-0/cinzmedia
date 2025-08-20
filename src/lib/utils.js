import { clsx } from "clsx";
import { twMerge } from "tailwind-merge";

export function cn(...inputs) {
  return clsx(inputs);
}

export function twCn(...inputs) {
  return twMerge(clsx(inputs));
}
