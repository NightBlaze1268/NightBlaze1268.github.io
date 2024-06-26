import React from 'react';
import Card from '../components/Card';
import gradPhoto from '../icons/grad-photo-in-front-of-uofl.jpg'

const Home = () => {
  return (
    <div className="flex flex-col items-center justify-center h-screen bg-gray-100 dark:bg-gray-900">
      <Card
        title="About Me"
        imageUrl={gradPhoto}>
        <p>Hello! My name is Kyle Akridge. I'm a recent graduate from the University of Louisville, J.B. Speed School of Engineering. I graduated in May 2024 with a Bachelors of Computer Science and Engineering. During my time at UofL, I learned a lot of essential skills that have not only shaped me into a better engineer, but also a better person. I am familiar with most programming languages including Java, C#, C, C++, Python, and more. My two primary languages that I have worked in are C# and Python. I have a love for all things coding and I am always looking to expand my development pallette and learn more.</p>
        <br></br>
        <p>I was born and raised in Bardstown, Kentucky, and I am 22 years old. I graduated from High School in 2020 with my diploma and an Associates of Science from the Elizabethtown Community and Technical College. I have 2 dogs and 3 cats and currently reside in my home town.</p>
        <br></br>
        <p>To find out more about my education, career, LinkedIn, and view my projects; follow the buttons below!</p>
      </Card>
    </div>
  );
};

export default Home;