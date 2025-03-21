import React from 'react';
import ProjectCard from '../components/ProjectCard';

export default function Projects() {
  return (
    <div className='bg-gray-100 dark:bg-gray-900 min-h-max'>
      <div className="mx-auto max-w-7xl px-6 lg:px-8 py-24 sm:py-32">
        <div className="mx-auto max-w-2xl lg:mx-0">
          <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl dark:text-gray-100">
            View my project portfolio!
          </h2>
          <p className="mt-2 text-lg leading-8 text-gray-600">
            This page is still a work in progress and is constantly being
          </p>
        </div>
        <div className="mx-auto mt-10 grid max-w-2xl grid-cols-1 gap-x-8 gap-y-16 border-t border-gray-200 pt-10 sm:mt-16 sm:pt-16 lg:mx-0 lg:max-w-none lg:grid-cols-3">
          <ProjectCard 
            id={1}
            cardTitle={"Project portfolio website"}
            cardSubtitle={"React, Tailwind, Javascript"}
            cardDescription={"This project serves as an outlet for me to portray my skills, education, certifications, and any projects that I am working on"}
            cardCategory={"Current"}
            projectURL={"https://github.com/NightBlaze1268/NightBlaze1268.github.io"}
            projectLink={"Project Portfolio Website"}>
          </ProjectCard>
          <ProjectCard 
            id={2}
            cardTitle={"SMX stats scraper"}
            cardSubtitle={"Python, Beautifulsoup, SQL"}
            cardDescription={"One of the things I love doing is watching professional Motocross and Supercross, and loving statistics I thought it very fitting to create a stats scraper that will be used to generate statistics about the seasons on a website I am working."}
            cardCategory={"Current"}
            projectURL={"https://github.com/NightBlaze1268/smx-stats-scraper"}
            projectLink={"SMX Stats Scraper"}>
          </ProjectCard>
          <ProjectCard 
            id={3}
            cardTitle={"SMX stats website"}
            cardSubtitle={"React, Tailwind, CSS, SQL, Javascript, DataTables"}
            cardDescription={"This website will serve as a statistics display for the stats scraper I am wrapping up currently."}
            cardCategory={"Future"}
            certFileUrl={"../degrees-certs/SecurityPlus Logo Certified CE.jpg"}
            projectLink={"CompTIA Security+ Certification"}>
          </ProjectCard>
          <ProjectCard 
            id={4}
            cardTitle={"Calendar App"}
            cardSubtitle={"Kotlin, Swift"}
            cardDescription={"One of the things I have wanted to do for a while is make my own app on the iOS and Android platforms, and I have always found that the calendar apps that are available are either to pricey or just lack the features I am looking for, so I am going to be building my own version."}
            cardCategory={"Future"}>
          </ProjectCard>
          <ProjectCard 
            id={5}
            cardTitle={"ChatBot"}
            cardSubtitle={"Python, Artificial Intelligence"}
            cardDescription={"This chatbot will serve as an answering machine for myself. This will ideally be hosted on my website."}
            cardCategory={"Future"}>
          </ProjectCard>
          <ProjectCard 
            id={6}
            cardTitle={"KIPDA Android App"}
            cardSubtitle={"Kotlin, Google Firebase"}
            cardDescription={"My Capstone project was to create an Android application that would help an organization better outreach to their users. This project was essentially finished but there were additional features that myself or my team could not get wrapped up and thus is still being worked on by other teams before being put onto the Play Store. I cannot provide any code for this project or answer any further questions related to it."}
            cardCategory={"Past"}>
          </ProjectCard>
          <ProjectCard
            id={7}
            cardTitle={"Raspberry PI Artificial Intelligence Ring Camera"}
            cardSubtitle={"Python, Raspberry PI, Electrical"}
            cardDescription={"This project utilized a Raspberry PI 3 board, camera, motion sensor, and aritificial intelligence library. When the motion sensor would detect motion, the camera would turn on and run the AI facial recognition software to determine if you should have access to the house or not. Ideally this would be combined with a lock and be made smaller with better manufactured chips and components to control access to your house utilizing AI."}
            cardCategory={"Past"}
            projectURL={"https://nightblaze1268.github.io/"}
            projectLink={"Coming Soon..."}>
            </ProjectCard>
        </div>
      </div>
    </div>
  );
}
  