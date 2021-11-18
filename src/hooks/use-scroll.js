import { useState, useEffect } from 'react';

export default function useScroll() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    function checkScroll() {
      setScrolled(document.documentElement.scrollTop !== 0);
    }
    window.addEventListener('scroll', checkScroll);
    return () => window.removeEventListener('scroll', checkScroll);
  }, []);

  return scrolled;
}
