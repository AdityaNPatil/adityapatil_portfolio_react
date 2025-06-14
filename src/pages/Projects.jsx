import GradientText from '../components/effects/GradientText'; 
import ProjectCard from '../components/ProjectCard';

// images
import proj1 from "../images/portfolioProj.png"
import proj2 from "../images/FoodWeatherStockProject.png"
import proj3 from "../images/AmazonProject.png"
import proj5 from "../images/neuroProj.png"
import proj6 from "../images/blogProj.png"
import proj7 from "../images/FoodRecipe.png"
import proj8 from "../images/NewsApp.png"
import proj9 from "../images/URLShortener.png"
import proj10 from "../images/AWSHospital.png"
import proj11 from "../images/iphoneProj.png"

const Projects = () => {

  // array of projects data
  const projects = [
    {
      title: "Portfolio Website",
      description: "Built a professional portfolio from scratch, showcasing web design skills.",
      link: "https://adityapatil.netlify.app/",
      btnText: "View Project",
      image: proj1
    },
    {
      title: "Food, Weather, Stock API",
      description: "A web app using various APIs to display real-time recipes, weather, and stock prices.",
      link: "https://github.com/AdityaNPatil/Food-Weather-Money_API",
      btnText: "View Source",
      image: proj2
    },
    {
      title: "Amazon Front-End Clone",
      description: "Responsive design with 100% compatibility across all devices, enhancing user experience.",
      link: "https://adityanpatil.github.io/AmazonClone/",
      btnText: "View Project",
      image: proj3
    },
    {
      title: "Deep Learning Approaches for Neurogenesis",
      description: "Leveraged deep learning to predict neurogenesis, reducing human error assisting in treatment discovery for neurological disorders.",
      link: "https://github.com/AdityaNPatil/neurogenesis_predictor",
      btnText: "View Source",
      image: proj5
    },
    {
      title: "Blog Application with custom API",
      description: "A blog application to post and view blogs with custom built API and DB.",
      link: "https://github.com/AdityaNPatil/custom_blog_with_API",
      btnText: "View Source",
      image: proj6
    },
    {
      title: "Food Recipe App",
      description: "A Food recipe application to view recipes with API calls using axios.",
      link: "https://foodrecipeadi.netlify.app",
      btnText: "View Website",
      image: proj7
    },
    {
      title: "News Application",
      description: "A News application to view articles with API calls using NextJS.",
      link: "https://github.com/AdityaNPatil/News-Application-NextJS",
      btnText: "View Source",
      image: proj8
    },
    {
      title: "URL Shortener",
      description: "A one stop solution to meet your URL shortening needs using NextJS",
      link: "https://github.com/AdityaNPatil/URL-Shortener-NextJS",
      btnText: "View Source",
      image: proj9
    },
    {
      title: "Hospital Patient Records Management System",
      description: "A simple web application created using AWS services for Patient records managment",
      link: "https://github.com/AdityaNPatil/Hospital-Management-System-AWS",
      btnText: "View Source",
      image: proj10
    },
    {
      title: "Apple iPhone 3D Model Website",
      description: "A simple web application created cloning the Apple iPhone website using React, GSAP, ThreeJS",
      link: "https://iphoneadi.netlify.app",
      btnText: "View Project",
      image: proj11
    }
  ];

  return (
    <div className="projects-container">
      <GradientText
        colors={["#40ffaa", "#4079ff", "#40ffaa", "#4079ff", "#40ffaa"]}
        animationSpeed={4}
        showBorder={false}
        className="hero-title"
      >
        <h1>Projects</h1>
      </GradientText>
      <h3 className='hero-subtitle text-center'>No better way to gain experience than real-life projects</h3>
      <div className="projects-grid">
        {/* map the projects */}
        {projects.map((project, index) => (
          <ProjectCard
            key={index}
            title={project.title}
            description={project.description}
            link={project.link}
            btnText={project.btnText}
            imgSrc={project.image}
          />
        ))}
      </div>
    </div>
  );
};

export default Projects;
