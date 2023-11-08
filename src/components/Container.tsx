import styled from "styled-components";

export const Container = styled.div.attrs({ className: "fragment" })`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: ${({ theme }) => theme.spacing(2)};
  width: 100%;
  height: 50vh;
  background-color: ${({ theme }) => theme.colors.dark.base2};
  border-style: solid;
  border-width: 1px;
  border-color: ${({ theme }) => theme.colors.dark.base1};
  border-radius: 1rem;
  padding: 1rem;
`;
