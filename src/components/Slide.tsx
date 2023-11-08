import {
  HTMLAttributes,
  PropsWithChildren,
  ReactElement,
  ReactNode,
} from "react";
import { Notes } from "./Notes";
import { Markdown } from "./Markdown";

interface Props extends PropsWithChildren<HTMLAttributes<HTMLElement>> {
  autoAnimate?: boolean;
  notes?: string;
  footer?: ReactNode;
}

export const Slide = ({
  children,
  autoAnimate = true,
  notes,
  footer,
  ...props
}: Props): ReactElement => (
  <section
    data-auto-animate={autoAnimate}
    style={{ textAlign: "left" }}
    {...props}
  >
    {children}
    {notes && (
      <Notes>
        <Markdown>{notes}</Markdown>
      </Notes>
    )}
    {footer && <footer>{footer}</footer>}
  </section>
);
