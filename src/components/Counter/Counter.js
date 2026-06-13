import React, { useEffect, useRef, useState, useCallback } from "react";
import "./Counter.css";

const Counter = ({
  end,
  duration = 2000,
  prefix = "",
  suffix = "",
}) => {
  const [count, setCount] = useState(0);
  const [hasAnimated, setHasAnimated] = useState(false);
  const counterRef = useRef(null);

  // 1. Wrap startCounter in useCallback so its reference stays stable
  const startCounter = useCallback(() => {
    let startTime = null;

    const animate = (currentTime) => {
      if (!startTime) startTime = currentTime;

      const progress = Math.min(
        (currentTime - startTime) / duration,
        1
      );

      const currentCount = Math.floor(progress * end);

      setCount(currentCount);

      if (progress < 1) {
        requestAnimationFrame(animate);
      }
    };

    requestAnimationFrame(animate);
  }, [end, duration]); // Re-create only if end or duration changes

  useEffect(() => {
    // 2. Copy the current ref value to a local variable
    const currentRef = counterRef.current;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !hasAnimated) {
          startCounter();
          setHasAnimated(true);
        }
      },
      {
        threshold: 0.4,
      }
    );

    if (currentRef) {
      observer.observe(currentRef);
    }

    return () => {
      // 3. Use the local variable in the cleanup function
      if (currentRef) {
        observer.unobserve(currentRef);
      }
    };
  }, [hasAnimated, startCounter]); // 4. Safely add startCounter to dependencies

  return (
    <span ref={counterRef} className="counter-value">
      {prefix}
      {count}
      {suffix}
    </span>
  );
};

export default Counter;