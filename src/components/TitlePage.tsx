import { ReactElement, ReactNode } from "react";
import { Slide } from "./Slide";

interface Props {
  title: string;
  subtitle?: string;
  author: ReactNode;
  footer?: ReactNode;
}

export const TitlePage = ({
  title,
  subtitle,
  author,
  footer,
}: Props): ReactElement => (
  <Slide style={{ textAlign: "center" }}>
    <h1>{title}</h1>
    {subtitle && <h2>{subtitle}</h2>}
    <footer>
      {author && <h3>{author}</h3>}
      {footer}
    </footer>
  </Slide>
);
