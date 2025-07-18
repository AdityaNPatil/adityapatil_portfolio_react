import InternCard from '../components/InternCard';
import GradientText from '../components/effects/GradientText';

// images
import intern1 from "../images/ubs.jpg"
import intern2 from "../images/b2world.jpg"
import intern3 from "../images/soulai.jpg"

// array to store internship details
const internships = [
  {
    title: 'UBS Regular Intern',
    description: 'Working towards maintaing existing applications and developing new applications.',
    image: intern1,
    duration: 'Jan 2025 - July 2025',
  },
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
      <GradientText
        colors={["#40ffaa", "#4079ff", "#40ffaa", "#4079ff", "#40ffaa"]}
        animationSpeed={4}
        showBorder={false}
        className="hero-title"
      >
        <h1>Experience</h1>
      </GradientText>
      <div className="internships-grid">
        {internships.map((internship, index) => (
          <InternCard key={index} internship={internship} />
        ))}
      </div>
    </div>
  );
};

export default Internships;
