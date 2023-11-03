import { SideEffect } from './effects';
import { ReactElement, useRef, useState } from 'react';
import { RevertCallback, useDispatch } from './use-dispatch';
import { Button } from './Button';

interface ControlsProps {
  playbook: SideEffect[];
}

export const Controls = ({ playbook }: ControlsProps): ReactElement => {
  const [effectPtr, setEffectPtr] = useState(0);
  const revertQueue = useRef<RevertCallback[]>([]);
  const dispatch = useDispatch();
  const prevEnabled = () => effectPtr > 0 && revertQueue.current.length > 0;
  const nextEnabled = () => effectPtr <= playbook.length;

  const onNext = async () => {
    if (nextEnabled()) {
      revertQueue.current.push(await dispatch(playbook[effectPtr]));
      setEffectPtr(effectPtr + 1);
    }
  };

  const onPrev = () => {
    if (prevEnabled()) {
      const revert = revertQueue.current.pop();
      revert && revert();
      setEffectPtr((ptr) => ptr - 1);
    }
  };

  return (
    <>
      <Button onClick={onPrev} disabled={!prevEnabled()}>Prev</Button>
      <Button onClick={onNext} disabled={!nextEnabled()}>Next</Button>
    </>
  );
};