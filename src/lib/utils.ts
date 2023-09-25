import { type ClassValue, clsx } from "clsx"
import { twMerge } from "tailwind-merge"
 
export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}


export function addDays(date: string, days: number) {
  const result = new Date(date)
  result.setDate(result.getDate() + days)

  return result
}
