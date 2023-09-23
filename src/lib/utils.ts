import { type ClassValue, clsx } from 'clsx';
import { extendTailwindMerge } from 'tailwind-merge';

export const customTailwindMerge = extendTailwindMerge({
  theme: { colors: ['blue', 'purpleLight', 'purpleDark'] },
  classGroups: {
    'font-family': [{ font: ['unica', 'montserrat', 'clash'] }],
    'font-weight': [{ font: ['400', '700', '600'] }],
    'font-size': [
      {
        text: [
          '12',
          '13',
          '14',
          '16',
          '20',
          '24',
          '28',
          '32',
          '36',
          '48',
          '64',
          '80',
        ],
      },
    ],
  },
});
export function cn(...inputs: ClassValue[]) {
  return customTailwindMerge(clsx(inputs));
}
