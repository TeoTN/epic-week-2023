import { MutableRefObject, useCallback, useEffect, useState } from 'react';

function getBoundingClientRect(
  element: HTMLElement,
): ClientRect | DOMRect | null {
  return element.getBoundingClientRect();
}

export function useBoundingClientRect(
  ref: MutableRefObject<HTMLElement | null>,
): ClientRect | DOMRect | null {
  const [value, setValue] = useState<ClientRect | DOMRect | null>(null);

  const update = useCallback(() => {
    setValue(ref.current ? getBoundingClientRect(ref.current) : null);
  }, []);

  useEffect(() => {
    update();
  }, []);

  return value;
}
