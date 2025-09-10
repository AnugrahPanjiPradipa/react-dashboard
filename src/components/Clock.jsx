import React, { useEffect, useState } from 'react';
import Sun from '../assets/Weather-sunny.json';
import Moon from '../assets/Weather-night.json';
import Lottie from 'lottie-react';

const Clock = () => {
  const [time, setTime] = useState(new Date());

  useEffect(() => {
    const interval = setInterval(() => setTime(new Date()), 1000);
    return () => clearInterval(interval);
  }, []);

  const hour = time.getHours();
  const morning = hour >= 5 && hour < 17;

  return (
    <div className="flex flex-col md:flex-row items-center justify-center h-auto md:h-25 gap-3 md:gap-5 bg-white rounded-xl text-center p-4 shadow-md border border-gray-200 transform transition-all duration-300 hover:shadow-lg hover:scale-[1.02] dark:bg-gray-800 dark:border-gray-600 w-full clock-font">
      <div className="text-lg text-gray-700 dark:text-gray-200 md:text-xl">{time.toLocaleTimeString()}</div>
      <div>
        <Lottie
          animationData={morning ? Sun : Moon}
          className="w-12 h-12 md:w-13 md:h-13"
        />
      </div>
    </div>
  );
};

export default Clock;
