import { useEffect, useState } from 'react';

export function useCountUp(target, duration = 1200) {
  const numeric = Number.parseInt(String(target).replace(/\D/g, ''), 10) || 0;
  const suffix = String(target).replace(/[0-9]/g, '');
  const [value, setValue] = useState(0);

  useEffect(() => {
    let frame;
    const start = performance.now();
    const tick = (now) => {
      const progress = Math.min((now - start) / duration, 1);
      setValue(Math.floor(numeric * progress));
      if (progress < 1) frame = requestAnimationFrame(tick);
    };
    frame = requestAnimationFrame(tick);
    return () => cancelAnimationFrame(frame);
  }, [duration, numeric]);

  return `${value}${suffix}`;
}
