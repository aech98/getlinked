import { HTMLAttributes, forwardRef } from 'react';
import { PropsWithClassName } from '@/lib/props-with-classname';
import { cn } from '@/lib/utils';

interface SectionProps extends HTMLAttributes<HTMLDivElement>, PropsWithClassName {}

const Section = forwardRef<HTMLDivElement, SectionProps>((props, ref) => {
  const { children, className } = props;
  return (
    <section
      ref={ref}
      className={cn(
        'relative mx-auto grid lg:grid-cols-2 px-4 py-8 sm:px-5 sm:py-10 md:px-7 md:py-12 lg:px-8 lg:py-14 xl:px-10 xl:py-16 border-b border-white/20',
        className
      )}
    >
      {children}
    </section>
  );
});
Section.displayName = 'Section';

interface SectionHeaderProps
  extends HTMLAttributes<HTMLHeadingElement>,
    PropsWithClassName {}

const SectionHeader = forwardRef<HTMLHeadingElement, SectionHeaderProps>(
  (props, ref) => {
    const { children, className } = props;
    return (
      <h2
        ref={ref}
        className={cn(
          'font-clash font-700 text-20 md:text-28 lg:text-32',
          className
        )}
      >
        {children}
      </h2>
    );
  }
);
SectionHeader.displayName = 'SectionHeader';

export { Section, SectionHeader };
