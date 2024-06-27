import React from 'react';

const CareerCard = ({ title, children }) => {
  return (
    <div className="max-w-6xl rounded overflow-hidden shadow-lg bg-white dark:bg-gray-800 p-6">
      <div className="font-bold text-3xl mb-2 text-gray-900 dark:text-gray-100">
        {title}
      </div>
      <div className="text-gray-700 text-lg dark:text-gray-300">
        {children}
      </div>
    </div>
  );
};

export default CareerCard;
