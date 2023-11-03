import styled from 'styled-components';

export const Button = styled.button`
  background-color: var(--r-base00);
  color: white;
  border: 0;
  font-size: 1.5rem;
  padding: .75rem 1.25rem;
  margin: 0 .5rem;
  border-radius: .5rem;
  
  &:not([disabled]) {
    cursor: pointer;
  }
  
  &:hover {
    background: var(--r-base01);
  }
  
  &[disabled] {
    background-color: grey;
    cursor: not-allowed;
  }
`;