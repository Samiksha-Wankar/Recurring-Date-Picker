import React from 'react';

const AnimatedBackground = () => (
  <div className="fixed inset-0 z-0 flex justify-center items-center overflow-hidden">
  <div className="animate-spin-slow rounded-full h-72 w-72 sm:h-96 sm:w-96 bg-gradient-to-r from-purple-600 to-blue-600 opacity-70 blur-2xl"></div>
</div>

);

export default AnimatedBackground;
