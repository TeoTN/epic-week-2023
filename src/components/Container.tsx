import styled from "styled-components";

export const Container = styled.div`
  width: 100%;
  background-color: ${({ theme }) => theme.colors.dark.base2};
  border-style: solid;
  border-width: 1px;
  border-color: ${({ theme }) => theme.colors.dark.base1};
  border-radius: 1rem;
  padding: 2rem 1rem;
`;

export const FlexibleContainer = styled(Container).attrs({
  className: "fragment",
})`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: ${({ theme }) => theme.spacing(2)};
  width: 100%;
`;
