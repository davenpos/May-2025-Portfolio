import { useState, useEffect } from 'react';

export default function useWindowSizeState(small, med) {
  const [state, setState] = useState(small);

  useEffect(() => {
    function updateSize() {
      if (window.innerWidth >= 768) setState(med);
      else setState(small);
    }

    updateSize();

    window.addEventListener('resize', updateSize);
    return () => window.removeEventListener('resize', updateSize);
  }, []);

  return state;
}
