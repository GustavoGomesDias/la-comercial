import { RefObject, useEffect, useState } from 'react';

const useIsVisible = (ref: RefObject<HTMLDivElement>): boolean => {
  const [isIntersecting, setIntersecting] = useState<boolean>(false)

  const observer: IntersectionObserver = new IntersectionObserver(
    ([entry]) => setIntersecting(entry.isIntersecting)
  );

  useEffect(() => {
    observer.observe(ref.current)
    return () => { observer.disconnect() }
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])

  return isIntersecting;
}

export default useIsVisible;