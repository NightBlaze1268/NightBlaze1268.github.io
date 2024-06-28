import React from 'react';

const CareerCard = ({ title, positionDate, positionTitle, children, responsibilities }) => {
  return (
    <div className="max-w-6xl rounded-lg overflow-hidden shadow-lg bg-white dark:bg-gray-800 p-6">
      <div className='flex justify-between items-center mb-2'>
        <div className="font-bold text-3xl mb-2 text-gray-900 dark:text-gray-100">
          {title}
        </div>
        <div className='text-gray-400 dark:text-gray-300'>
          {positionDate}
        </div>
      </div>
      <div className="text-gray-700 text-xl dark:text-gray-300">
        {positionTitle}
      </div>
      <div className="text-gray-700 text-lg dark:text-gray-300 mt-4">
        {children}
      </div>
      <div className='text-gray-700 text-lg dark:text-gray-300 mt-4'>
        Responsibilities:
      </div>
      <ul className='list-disc list-inside text-gray-700 text-lg dark:text-gray-300'>
        {responsibilities.map((responsibility, index) => (
          <li key={index}>{responsibility}</li>
        ))}
      </ul>
    </div>
  );
};

export default CareerCard;
