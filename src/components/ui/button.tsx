import * as React from 'react';
import { Slot } from '@radix-ui/react-slot';
import { cn } from '@/lib/utils';

export interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  asChild?: boolean;
}

const Button = React.forwardRef<HTMLButtonElement, ButtonProps>((props, ref) => {
  const { className, asChild = false, ...rest } = props;

  const Comp = asChild ? Slot : 'button';

  return (
    <Comp
      className={cn(
        'inline-flex items-center justify-center h-10 md:h-12 lg:h-14 px-12 py-3.5 lg:px-14 lg:py-4 rounded-lg text-14 md:text-16 font-montserrat font-400 btnGradient hover:btnGradientHover transition-colors duration-500 text-slate-50 hover:bg-red-500/90 ring-offset-blue focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-purpleLight focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50',
        className
      )}
      ref={ref}
      {...rest}
    />
  );
});
Button.displayName = 'Button';

export { Button };
