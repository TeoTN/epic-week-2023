import { ComponentProps, ReactElement } from 'react';
import { Slide } from './Slide';
import { Notes } from './Notes';

interface Props extends ComponentProps<typeof Slide> {
  title: string;
  subtitle?: string;
  notes?: string;
}

export const SectionTitleSlide = ({
  title,
  subtitle,
  notes = 'Are there any questions about the previous section?',
  ...props
}: Props): ReactElement => (
  <Slide {...props}>
    <h2 data-id="slide-title">{title}</h2>
    {subtitle && <h3 data-id="subtitle">{subtitle}</h3>}
    <Notes>{notes}</Notes>
  </Slide>
);
