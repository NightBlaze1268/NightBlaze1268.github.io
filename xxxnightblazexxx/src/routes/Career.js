import React from 'react';
import CareerCard from '../components/CareerCard';

const Career = () => {
  console.log('Rendering Career Page');
  return (
    <div className="flex flex-col h-screen bg-gray-100 dark:bg-gray-900">
      <div className="mx-auto max-w-7xl px-6 lg:px-8 py-24 sm:py-32">
        <div className="text-5xl text-gray-900 dark:text-gray-100 mt-20 mb-4 text-left">
          Follow my career!
        </div>
        <div className="text-xl text-gray-900 dark:text-gray-500 mb-10 text-left leading-8">
          Below you will find information about all of my positions from the last 5 years.
        </div>
        <div className="flex flex-col items-center border-t border-gray-700 dark:border-gray-400 pt-10 sm:mt-16 sm:pt-16 lg:mx-0 lg:max-w-none">
          <CareerCard
            title={"Fort Knox Human Resources Command"}
            positionDate={"January 2022 - Current"}
            positionTitle={"IT Specialist / Student Trainee"}
            children={"As an IT/Specialist at Fort Knox I have learned and been in charge of many different aspects of application development, web-development and Microsoft apps development."}
            responsibilities={[
              "Assisted in the maintenance and refinement of documentation for diverse products and services under our support.",
              "Helped develop and maintain a comprehensive web-app to track and assist in mitigating security vulnerabilities across 23,000 workstations for the Army, enhancing overall IT security posture.",
              "Updated existing software packages to the latest stable versions, ensuring compliance with current security standards.",
              "Innovated a new method for tracking training using a broad range of Microsoft 365 Apps, streamlining a process once thought of as a chore for over 100 employees.",
              "Leveraged teamwork skills to efficiently assist users in mitigating IT issues and security vulnerabilities.",
              "Demonstrated strong leadership by presenting and leading multiple meetings and projects, fostering collaboration and driving successful outcome."
            ]}>
          </CareerCard>
        </div>
      </div>
    </div>
  );
};

export default Career;
