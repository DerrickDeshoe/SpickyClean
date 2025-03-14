"use client";

import { useEffect, useState } from "react";

const Counter = ({ target }) => {
  const [count, setCount] = useState(0);

  useEffect(() => {
    let start = 0;
    const duration = 2000; // 2 seconds
    const interval = 30; // Update every 30ms
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
