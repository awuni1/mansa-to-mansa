// components/CountUpText.tsx
'use client';

import { useEffect, useState } from 'react';
import { useInView } from 'react-intersection-observer';

type CountUpTextProps = {
  target: number;
  duration?: number; // in ms
};

const CountUpText = ({ target, duration = 2000 }: CountUpTextProps) => {
  const [count, setCount] = useState(0);
  const [hasAnimated, setHasAnimated] = useState(false);
  const { ref, inView } = useInView({
    triggerOnce: true,
    threshold: 0.5, // Trigger when 50% is visible
  });

  useEffect(() => {
    if (inView && !hasAnimated) {
      setHasAnimated(true);
      let start: number | null = null;
      const step = (timestamp: number) => {
        if (!start) start = timestamp;
        const progress = timestamp - start;
        const progressRatio = Math.min(progress / duration, 1);
        setCount(Math.floor(progressRatio * target));
        if (progress < duration) {
          requestAnimationFrame(step);
        } else {
          setCount(target);
        }
      };
      requestAnimationFrame(step);
    }
  }, [inView, target, duration, hasAnimated]);

  return (
    <span ref={ref} className="text-4xl font-bold text-blue-600">
      {count.toLocaleString()}
    </span>
  );
};

export default CountUpText;