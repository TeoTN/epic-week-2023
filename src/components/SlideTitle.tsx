import { ElementType, PropsWithChildren, ReactElement } from 'react';

interface Props {
  subtitle?: string;
  component?: ElementType;
}

export const SlideTitle = ({
  subtitle,
  children,
  component: Component = 'h3',
}: PropsWithChildren<Props>): ReactElement => (
  <>
    <Component data-id="slide-title">{children}</Component>
    {subtitle && <h6 data-id="subtitle">{subtitle}</h6>}
  </>
);
