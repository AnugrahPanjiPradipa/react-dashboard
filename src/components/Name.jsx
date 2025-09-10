import React from 'react';

const Name = ({ name }) => {
  return (
    <div className="flex flex-col md:flex-row items-center justify-center h-auto md:h-25 gap-3 md:gap-5 bg-white dark:bg-gray-800 dark:border-gray-600 rounded-xl text-center p-4 shadow-md border border-gray-200 transform transition-all duration-300 hover:shadow-lg hover:scale-[1.02] w-full">
      <p className="text-gray-700 dark:text-gray-200 text-sm md:text-xl">
        Welcome, <span className="font-bold text-gray-900 dark:text-gray-50">{name}</span>!
      </p>
    </div>
  );
};

export default Name;
