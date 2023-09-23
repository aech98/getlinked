import { PropsWithClassName } from '@/lib/props-with-classname';
import { cn } from '@/lib/utils';
import { FC } from 'react';

interface FlareProps extends PropsWithClassName {}

const Flare: FC<FlareProps> = ({ className }) => {
  return (
    <div
      className={cn(
        'shadow-[0_0_800px_800px_rgba(0,0,0,.5),0_0_200px_200px_rgba(144,58,255,1)] absolute -z-10',
        className
      )}
    ></div>
  );
};

export { Flare };
