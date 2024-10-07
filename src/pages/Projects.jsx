import React from 'react';
import ProjectCard from '../components/ProjectCard';

// images
import proj1 from "../images/portfolioProj.png"
import proj2 from "../images/FoodWeatherStockProject.png"
import proj3 from "../images/AmazonProject.png"
import proj5 from "../images/neuroProj.png"
import proj6 from "../images/blogProj.png"
import proj7 from "../images/FoodRecipe.png"

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
      title: "Traffic Prediction Using AI",
      description: "Boosted algorithm efficiency by 30%, refining route recommendations.",
      link: "https://adityapatil.netlify.app/",
      btnText: "View Source",
      image: ""
    },
    {
      title: "Deep Learning Approaches for Neurogenesis",
      description: "Leveraged deep learning to predict neurogenesis, reducing human error assisting in treatment discovery for neurological disorders.",
      link:  "https://github.com/AdityaNPatil/neurogenesis_predictor",
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
    }
  ];

  return (
    <div className="projects-container">
      <h1>My Projects</h1>
      <h3>No better way to gain experience than real-life projects</h3>
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
