import React, { useEffect, useState } from 'react';

interface AnimatedCounterProps {
  value: number;
  duration?: number; // ms
  label: string;
}

const AnimatedCounter: React.FC<AnimatedCounterProps> = ({ value, duration = 2000, label }) => {
  const [count, setCount] = useState(0);

  useEffect(() => {
    let start = 0;
    const increment = value / (duration / 16);
    let frame: number;
    function animate() {
      start += increment;
      if (start < value) {
        setCount(Math.floor(start));
        frame = requestAnimationFrame(animate);
      } else {
        setCount(value);
      }
    }
    animate();
    return () => cancelAnimationFrame(frame);
  }, [value, duration]);

  return (
    <div className="flex flex-col items-center justify-center">
      <span className="text-3xl md:text-5xl font-bold text-teal-600">{count.toLocaleString()}</span>
      <span className="text-base md:text-lg text-gray-700 mt-1 font-medium">{label}</span>
    </div>
  );
};

export default AnimatedCounter;
