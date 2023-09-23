import * as React from 'react';

import { cn } from '@/lib/utils';

export interface InputProps extends React.InputHTMLAttributes<HTMLInputElement> {}

const Input = React.forwardRef<HTMLInputElement, InputProps>((props, ref) => {
  const { className, type, ...rest } = props;
  return (
    <input
      type={type}
      className={cn(
        'flex h-10 md:h-12 w-full rounded-md border border-white bg-transparent px-6 py-3 lg:py-4 text-13 md:text-14 font-montserrat font-400 ring-offset-purpleLight file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-white/25 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-purpleLight focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50',
        className
      )}
      ref={ref}
      {...rest}
    />
  );
});
Input.displayName = 'Input';

export { Input };
