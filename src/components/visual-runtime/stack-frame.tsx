import { StackFrameEffect } from './effects';
import { useEffect, useRef } from 'react';
import { useDispatch } from './use-dispatch';
import styled from 'styled-components';

const Frame = styled.div`
  display: flex;
  flex-direction: column;
  background-color: ${({ theme }) => theme.colors.dark.base1};
  padding: 0.25rem 0.5rem;
  font-size: ${({ theme }) => theme.fonts.size.code};
  color: ${({ theme }) => theme.colors.light.base0};
  
  & pre {
    display: inline;
    font-size: ${({ theme }) => theme.fonts.size.code};
  }
`;

export const StackFrame = ({
  name,
  args,
  ln,
  sideEffects,
}: StackFrameEffect) => {
  const ref = useRef<HTMLDivElement | null>(null);
  const dispatch = useDispatch();

  useEffect(() => {
    if (sideEffects && ref.current) {
      const { x = 0, y = 0, width = 0 } = ref.current.getBoundingClientRect();
      const origin = { x: x + width - 54, y };
      const playbook = sideEffects.map((effect) => ({
        ...effect,
        animateFrom: origin,
      }));
      playbook.forEach(dispatch);
    }
  }, [sideEffects, origin]);

  return (
    <Frame ref={ref}>
      <span>
        <pre className="inline text-accent">{name}</pre> frame:
      </span>
      <ul className="text-2xs border-gray-300 pl-3">
        <li>Arguments: {args.length > 0 ? args.join(', ') : 'NONE'}</li>
        <li>Called from: #{ln}</li>
      </ul>
    </Frame>
  );
};
