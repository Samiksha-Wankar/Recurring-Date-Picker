import React from 'react';

const Stars = () => {
  const starsArray = Array.from({ length: 100 }).map((_, index) => (
    <div
      key={index}
      className="absolute rounded-full bg-white opacity-75"
      style={{
        width: `${Math.random() * 3}px`,
        height: `${Math.random() * 3}px`,
        top: `${Math.random() * 100}vh`, // Random vertical position
        left: `${Math.random() * 100}vw`, // Random horizontal position
        animation: `twinkle ${Math.random() * 2 + 4}s infinite alternate`,
        pointerEvents: 'none', // Prevent interaction with stars
      }}
    />
  ));

  return (
    <div className="fixed inset-0 overflow-hidden pointer-events-none">
      {starsArray}
    </div>
  );
};

export default Stars;
