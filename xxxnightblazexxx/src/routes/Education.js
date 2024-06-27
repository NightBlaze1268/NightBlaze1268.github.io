import React from 'react';
import EducationCard from '../components/EducationCard';

export default function Education() {
  return (
    <div className='bg-gray-100 dark:bg-gray-900 py-24 sm:py-32'>
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto max-w-2xl lg:mx-0">
          <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl dark:text-gray-100">
            Welcome to my education page!
          </h2>
          <p className="mt-2 text-lg leading-8 text-gray-600">
            Here you will find my main degrees as well as certificates!
          </p>
        </div>
        <div className="mx-auto mt-10 grid max-w-2xl grid-cols-1 gap-x-8 gap-y-16 border-t border-gray-200 pt-10 sm:mt-16 sm:pt-16 lg:mx-0 lg:max-w-none lg:grid-cols-3">
          <EducationCard 
            id={1}
            cardTitle={"University of Louisville"}
            cardDescription={"I GRADUATED!"}
            cardDate={"May 16th, 2024"}
            cardCategory={"Degree"}>
          </EducationCard>
          <EducationCard 
            id={2}
            cardTitle={"Elizabethtown Community and Technical College"}
            cardDescription={"I GRADUATED!"}
            cardDate={"May 16th, 2024"}
            cardCategory={"Degree"}>
          </EducationCard>
        </div>
      </div>
    </div>
  );
}
  