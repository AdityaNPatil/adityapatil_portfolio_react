import React from 'react';
import { motion } from 'framer-motion';

const ProjectCard = ({ title, description, link, btnText, imgSrc }) => {
  return (
    <motion.div
      className="project-card"
      whileHover={{ scale: 1.05 }}
      whileTap={{ scale: 0.95 }}
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5 }}
    >
      <div className='project-info'>
        <h3>{title}</h3>
        <p>{description}</p>
        <a href={link} className="project-link" target="_blank" rel="noopener noreferrer">
          {btnText}
        </a>
      </div>
      <div className='project-img-container'>
        <img src={imgSrc} className='project-img' />
      </div>
    </motion.div>
  );
};

export default ProjectCard;
