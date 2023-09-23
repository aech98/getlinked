import { FC } from 'react';
import { Sparkle as SparkleIcon } from 'lucide-react';
import { cn } from '@/lib/utils';
import { PropsWithClassName } from '@/lib/props-with-classname';
import { VariantProps, cva } from 'class-variance-authority';

const sparkleVariant = cva('', {
  variants: {
    color: {
      white: 'text-[rgb(255,255,255)] fill-[rgb(255,255,255)]',
      gray: 'text-[rgb(113,108,124)] fill-[rgb(113,108,124)]',
      purple: 'text-[rgb(166,1,254)] fill-[rgb(166,1,254)]',
    },
  },
  defaultVariants: {
    color: 'white',
  },
});

interface SparkleProps
  extends PropsWithClassName,
    VariantProps<typeof sparkleVariant> {}

const Sparkle: FC<SparkleProps> = ({ className, color = 'white' }) => {
  return (
    <SparkleIcon
      strokeWidth={0.5}
      className={cn('absolute', sparkleVariant({ color }), className)}
    />
  );
};

export { Sparkle };
