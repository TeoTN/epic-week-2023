import { ReactNode } from "react";
import styled from 'styled-components';

interface Props {
  left: ReactNode;
  right: ReactNode;
  className?: string;
}

const TwoColumnsLayout = styled.div`
  display: flex;
  font-size: .8em;
  & > .left {
    flex: 1;
  }
  & > .right {
    flex: 1;
  }
`

export const TwoColumns = ({ left, right, className }: Props) => (
  <TwoColumnsLayout className={className}>
    <div className="left">{left}</div>
    <div className="right">{right}</div>
  </TwoColumnsLayout>
)
