"use client";

import { useEffect, useState } from "react";

interface CounterProps {
  target: number; 
}

const Counter: React.FC<CounterProps> = ({ target }) => {
  const [count, setCount] = useState(0);

  useEffect(() => {
    let start = 0;
    const duration = 2000; 
    const interval = 30; 
    const increment = target / (duration / interval);

    const counter = setInterval(() => {
      start += increment;
      if (start >= target) {
        clearInterval(counter);
        setCount(target);
      } else {
        setCount(Math.floor(start));
      }
    }, interval);

    return () => clearInterval(counter);
  }, [target]);

  return <span>{count}</span>;
};

export default Counter;
