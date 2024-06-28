import React from 'react';
import { Link } from 'react-router-dom';

const Card = ({ title, children, imageUrl }) => {
  return (
    <div className="max-w-6xl rounded overflow-hidden shadow-lg bg-white dark:bg-gray-800 p-6">
      <div className="font-bold text-3xl mb-2 text-gray-900 dark:text-gray-100">{title}</div>
      <div className="text-gray-700 text-lg dark:text-gray-300">
        {imageUrl && (
          <img
            src={imageUrl}
            alt="Card image"
            className="w-40 h-40 rounded-full float-right ml-4 mb-2"
          />
        )}
        {children}
      </div>
      <div className="flex justify-between items-center mt-10">
        <button className="bg-gray-500 text-gray-100 border font-bold p-3 rounded-lg dark:bg-gray-900">
          <Link to="/education" className="w-full h-full block text-gray-100 dark:text-gray-100">
            See my full education
          </Link>
        </button>
        <button className="bg-gray-500 text-gray-100 border font-bold p-3 rounded-lg dark:bg-gray-900">
          <Link to="/career" className="w-full h-full block text-gray-100 dark:text-gray-100">
            Follow my career!
          </Link>
        </button>
        <button className="bg-gray-500 text-gray-100 border font-bold p-3 rounded-lg dark:bg-gray-900">
          <a href="https://www.linkedin.com/in/kyle-akridge-6927a3216">View my LinkedIn profile</a>
        </button>
      </div>
    </div>
  );
};

export default Card;
