import React from 'react';
import Card from '../components/Card';
import primPhoto from '../photos/pic_of_me.jpg';

const Home = () => {
  return (
    <div className="flex flex-col items-center justify-center h-screen bg-primary">
      <Card
        title="About Me"
        imageUrl={primPhoto}>
        <p>Hello! I'm Kyle Akridge, a Computer Engineer and graduate of the University of Louisville’s Speed School of Engineering. I hold a Bachelor’s degree in Computer Science and Engineering, and during my time at UofL, I gained a strong foundation in software development, problem-solving, and engineering principles. I have experience with multiple programming languages, including Java, C#, C, C++, Python, and more, but my primary expertise lies in C# and Python. I have a deep passion for coding and continuously seek opportunities to expand my skill set and take on new challenges. Whether it's software development, problem-solving, or learning the latest technologies, I’m always eager to push my limits and grow as an engineer.</p>
        <br></br>
        <p>I was born and raised in Bardstown, Kentucky, and I am 22 years old. I graduated from High School in 2020 with my diploma and an Associates of Science from the Elizabethtown Community and Technical College. I have 2 dogs and 3 cats and currently reside in my home town.</p>
        <br></br>
        <p>To visit my LinkedIn profile or get more information, click the link below</p>
      </Card>
    </div>
  );
};

export default Home;