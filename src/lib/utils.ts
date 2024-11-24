import { type ClassValue, clsx } from 'clsx';
import { twMerge } from 'tailwind-merge';

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export function getStatusColor(status: string) {
  switch (status) {
    case 'completed':
      return 'bg-green-500/10 text-green-500';
    case 'in-progress':
      return 'bg-blue-500/10 text-blue-500';
    case 'needs-recut':
      return 'bg-red-500/10 text-red-500';
    default:
      return 'bg-gray-500/10 text-gray-500';
  }
}