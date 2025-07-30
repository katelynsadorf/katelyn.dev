import { useCallback, useEffect, useState } from 'react';

export default function useScroll(threshold: number) {
  const [scrolled, setScrolled] = useState(false);

  const onScroll = useCallback(() => {
    if (typeof window !== 'undefined') {
      setScrolled((window.scrollY || window.pageYOffset) > threshold);
    }
  }, [threshold]);

  useEffect(() => {
    if (typeof window !== 'undefined') {
      window.addEventListener('scroll', onScroll);
      return () => window.removeEventListener('scroll', onScroll);
    }
  }, [onScroll]);

  return scrolled;
}
