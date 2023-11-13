import { ReactElement, ReactNode } from "react";

interface Props {
  children: ReactNode;
}

export const SlidesDeck = ({ children }: Props): ReactElement => (
  <div className="slides">{children}</div>
);
