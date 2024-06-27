import React from 'react';
import EducationCard from '../components/EducationCard';

export default function Education() {
  return (
    <div className='bg-gray-100 dark:bg-gray-900 min-h-screen'>
      <div className="mx-auto max-w-7xl px-6 lg:px-8 py-24 sm:py-32">
        <div className="mx-auto max-w-2xl lg:mx-0">
          <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl dark:text-gray-100">
            Explore my education!
          </h2>
          <p className="mt-2 text-lg leading-8 text-gray-600">
            Here you will find my degrees as well as certificates and achievements!
          </p>
        </div>
        <div className="mx-auto mt-10 grid max-w-2xl grid-cols-1 gap-x-8 gap-y-16 border-t border-gray-200 pt-10 sm:mt-16 sm:pt-16 lg:mx-0 lg:max-w-none lg:grid-cols-3">
          <EducationCard 
            id={1}
            cardTitle={"University of Louisville"}
            cardSubtitle={"Bachelors of Computer Science and Engineering"}
            cardDescription={"At the University of Louisville I learned not only how to be an Engineer, but to be a problem solver, a self learner, and to enjoy challenges. I graduated with a reputable GPA working a minimum of 25 hours a week throughout all semesters."}
            cardDate={"May 16th, 2024"}
            cardCategory={"Degree"}>
          </EducationCard>
          <EducationCard 
            id={2}
            cardTitle={"Elizabethtown Community and Technical College"}
            cardSubtitle={"Associates of Applied Science"}
            cardDescription={"I started attending ECTC when I was a Junior in high school through the dual-credit program at my high school. Upon graduating high school, I achieved a remarkable feat of also getting to receive my Associates degree in Applied Sciences."}
            cardDate={"June, 2020"}
            cardCategory={"Degree"}>
          </EducationCard>
          <EducationCard 
            id={3}
            cardTitle={"Nelson County High School"}
            cardSubtitle={"High School Diploma"}
            cardDescription={"Throughout high school I had many achievements in sports, but my biggest achievement was being the first person ever to graduate from Nelson County High School with both my high school diploma and an associates degree from a college."}
            cardDate={"June, 2020"}
            cardCategory={"Diploma"}>
          </EducationCard>
          <EducationCard 
            id={4}
            cardTitle={"CompTIA"}
            cardSubtitle={"Security+"}
            cardDescription={"While completing my COOP rotations and attending the University of Louisville I was able to complete and get my Security+ certification through CompTIA."}
            cardDate={"November 10th, 2023"}
            cardCategory={"Certification"}
            certFileUrl={"../degrees-certs/SecurityPlus Logo Certified CE.jpg"}
            certName={"CompTIA Security+ Certification"}>
          </EducationCard>
          <EducationCard 
            id={5}
            cardTitle={"Six Sigma"}
            cardSubtitle={"Green Belt Certification"}
            cardDescription={"During my first two years at UofL, I had the oppurtunity to get Six Sigma Green Belt certified by the Institute of Industrial and Systems Engineers."}
            cardDate={"August 30th, 2021"}
            cardCategory={"Certification"}
            certFileUrl={"../degrees-certs/Green Belt Badge.png"}
            certName={"Green Belt Certification"}>
          </EducationCard>
          <EducationCard 
            id={6}
            cardTitle={"UofL Capstone Showcase"}
            cardSubtitle={"3rd Place Award"}
            cardDescription={"My last semester was extremely hectic at the University of Louisville, but I was still able to lead and pull my team together to win a 3rd place overall award in the Computer Science and Engineering department."}
            cardDate={"April 16th, 2024"}
            cardCategory={"Award"}
            certFileUrl={"../degrees-certs/capstone_showcase_award.jpg"}
            certName={"Capstone Showcase Award"}>
          </EducationCard>
        </div>
      </div>
    </div>
  );
}
  