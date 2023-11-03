import { ApiCallEffect, MicroTaskEffect, TaskEffect } from "./effects";
import { useCallback, useRef } from 'react';
import { useBoundingClientRect } from './useBoundingClientRect';
import { useDispatch } from './use-dispatch';
import { motion } from 'framer-motion';
import styled from 'styled-components';

const Box = styled(motion.div)`
  font-size: ${({ theme }) => theme.fonts.size.code};
  white-space: nowrap;
`;

export const Task = ({
  name,
  animateFrom = { x: 0, y: 0 },
  sideEffects,
}: ApiCallEffect | TaskEffect | MicroTaskEffect) => {
  const ref = useRef<HTMLDivElement | null>(null);
  const domRect = useBoundingClientRect(ref);
  const dispatch = useDispatch();
  const dX = domRect ? domRect.left - animateFrom.x : 0;
  const dY = domRect ? domRect.top - animateFrom.y : 0;

  const dispatchEffects = useCallback(() => {
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
    <>
      <div ref={ref} style={{ opacity: 0, width: 0, height: 0 }} />
      {domRect && (
        <Box
          initial={{
            x: -dX,
            y: -dY,
            opacity: 0.5,
            scale: 0,
            borderRadius: '50%',
          }}
          animate={{
            opacity: 1,
            x: 0,
            y: 0,
            scale: 1,
            borderRadius: '0%',
          }}
          onAnimationComplete={dispatchEffects}
          transition={{ duration: 0.75 }}
        >
          {name}
        </Box>
      )}
    </>
  );
};
