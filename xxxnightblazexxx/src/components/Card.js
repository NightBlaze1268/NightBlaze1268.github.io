import React from 'react';
import { Link } from 'react-router-dom';

const Card = ({ title, children, imageUrl }) => {
  return (
    <div className="max-w-6xl rounded overflow-hidden shadow-lg bg-card-primary p-6">
      <div className="font-bold text-3xl mb-2 text-title">{title}</div>
      <div className="text-normal text-lg">
        {imageUrl && (
          <img
            src={imageUrl}
            alt="Card"
            className="w-40 h-40 rounded-full float-right ml-4 mb-4"
          />
        )}
        {children}
      </div>
      <div className="flex justify-center items-center mt-10">
        <button className="btn-bg-primary text-gray-100 border font-bold p-3 rounded-lg">
          <a href="https://www.linkedin.com/in/kyle-akridge-6927a3216">View my LinkedIn profile</a>
        </button>
      </div>
    </div>
  );
};

export default Card;
