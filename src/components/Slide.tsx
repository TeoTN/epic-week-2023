import { HTMLAttributes, PropsWithChildren, ReactElement } from 'react';

interface Props extends PropsWithChildren<HTMLAttributes<HTMLElement>> {
  autoAnimate?: boolean;
}

export const Slide = ({
  children,
  autoAnimate = true,
  ...props
}: Props): ReactElement => (
  <section
    data-auto-animate={autoAnimate}
    style={{ textAlign: 'left' }}
    {...props}
  >
    {children}
  </section>
);
