import styled from "styled-components";

export const Button = styled.button`
  background-color: var(--r-base00);
  color: white;
  border: 0;
  font-size: 1.25rem;
  padding: 0.5rem 1rem;
  margin: 0 0.5rem;
  border-radius: 0.5rem;

  &:not([disabled]) {
    cursor: pointer;
  }

  &:hover {
    background: var(--r-base01);
  }

  &[disabled] {
    background-color: var(--r-base03);
    cursor: not-allowed;
  }
`;
