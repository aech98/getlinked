import { HTMLAttributes, forwardRef } from 'react';
import { cn } from '@/lib/utils';
import { PropsWithClassName } from '@/lib/props-with-classname';

interface ParagraphProps
  extends HTMLAttributes<HTMLParagraphElement>,
    PropsWithClassName {}

const Paragraph = forwardRef<HTMLParagraphElement, ParagraphProps>((props, ref) => {
  const { children, className } = props;
  return (
    <p
      ref={ref}
      className={cn(
        'font-montserrat font-400 text-13 md:text-14 text-white',
        className
      )}
    >
      {children}
    </p>
  );
});

export { Paragraph };
