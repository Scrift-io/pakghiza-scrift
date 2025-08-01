import { useEffect, useState } from 'react';

interface UseCounterOptions {
  start?: number;
  end: number;
  duration?: number;
  delay?: number;
}

export const useCounter = ({ start = 0, end, duration = 2000, delay = 0 }: UseCounterOptions) => {
  const [count, setCount] = useState(start);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    if (!isVisible) return;

    const startTime = Date.now() + delay;
    const range = end - start;

    const timer = setInterval(() => {
      const now = Date.now();
      const elapsed = now - startTime;

      if (elapsed < 0) return;

      if (elapsed >= duration) {
        setCount(end);
        clearInterval(timer);
        return;
      }

      const progress = elapsed / duration;
      const easeOutQuart = 1 - Math.pow(1 - progress, 4);
      const currentCount = Math.floor(start + range * easeOutQuart);
      setCount(currentCount);
    }, 16);

    return () => clearInterval(timer);
  }, [start, end, duration, delay, isVisible]);

  const startAnimation = () => setIsVisible(true);

  return { count, startAnimation };
};