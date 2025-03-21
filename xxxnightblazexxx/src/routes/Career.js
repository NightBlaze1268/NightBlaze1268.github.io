import React from 'react';
import CareerCard from '../components/CareerCard';

const Career = () => {
  console.log('Rendering Career Page');
  return (
    <div className="flex flex-col min-h-max bg-primary">
      <div className="mx-auto max-w-7xl px-6 lg:px-8 py-12 sm:py-16 bg-primary flex-grow">
        <div className="text-5xl text-gray-900 dark:text-gray-100 mt-20 mb-4 text-left">
          Follow my career!
        </div>
        <div className="text-xl text-gray-900 dark:text-gray-500 mb-10 text-left leading-8">
          Below you will find information about all of my positions from the last 5 years.
        </div>
        <div className="flex flex-col items-center border-t border-gray-700 dark:border-gray-400 pt-10 sm:mt-16 sm:pt-16 lg:mx-0 lg:max-w-none space-y-10">
        <CareerCard
            title={"Fort Knox Human Resources Command"}
            positionDate={"May 2024 - Current"}
            positionTitle={"Computer Engineer"}
            children={"As a Computer Engineer I serve as the SME for development work, helping to find and resolve bugs, and assist with priority categorization."}
            responsibilities={[
              "Help maintain our Azure DevOps space ensuring that tags, titles, sprints, and testing are done correctly and thoroughly.",
              "Maintain, fix, and add features to a previous contractor created application that helps 32,000 soldiers transition every 2 months with a total of 182,000 active soldiers in the system.",
              "Create reports using Power BI and SQL seen by governments leaders to show how the program and counselors are doing as well as give ideas as to why and when soldiers are transitioning from their current stations.",
              "Sustain compliance for our Azure environments.",
              "Continue assistance when asked for help with a training tracker application that I previously built."
            ]}>
          </CareerCard>
          <CareerCard
            title={"Fort Knox Human Resources Command"}
            positionDate={"January 2022 - May 2024"}
            positionTitle={"IT Specialist / Student Trainee"}
            children={"As an IT/Specialist at Fort Knox I have learned and been in charge of many different aspects of application development, web-development and Microsoft apps development."}
            responsibilities={[
              "Assisted in the maintenance and refinement of documentation for diverse products and services under our support.",
              "Helped develop and maintain a comprehensive web-app to track and assist in mitigating security vulnerabilities across 23,000 workstations for the Army, enhancing overall IT security posture. This application in the first year alone held the government 32 million dollars in savings.",
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
