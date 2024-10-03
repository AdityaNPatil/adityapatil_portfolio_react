import React from 'react';
import InternCard from '../components/InternCard';

// images
import intern1 from "../images/ubs.jpg"
import intern2 from "../images/b2world.jpg"
import intern3 from "../images/soulai.jpg"

// array to store internship details
const internships = [
  {
    title: 'UBS Summer Intern',
    description: 'Created over 15 visualizations for real-time monitoring and optimized data analysis.',
    image: intern1, 
    duration: 'May 2024 - July 2024',
  },
  {
    title: 'B2WORLD Full-Stack Dev Intern',
    description: 'Led a website redesign, improving engagement and reducing bounce rates.',
    image: intern2,
    duration: 'Nov 2023 - Dec 2023',
  },
  {
    title: 'SoulAI Prompt Engineering Intern',
    description: 'Refined AI prompts, achieving 70% accuracy in chat-based interactions.',
    image: intern3,
    duration: 'Sep 2023 - Dec 2023',
  },
];

const Internships = () => {
  return (
    <div className="internships-container">
      <h2 className="internships-title">Internship Experience</h2>
      <div className="internships-grid">
        {internships.map((internship, index) => (
            <InternCard key={index} internship={internship}/>
        ))}
      </div>
    </div>
  );
};

export default Internships;
