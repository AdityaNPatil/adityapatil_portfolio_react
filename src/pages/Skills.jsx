import React from 'react';
import { motion } from 'framer-motion';

// component
import SkillCard from '../components/SkillCard';

// images
import java from "../images/java.png"
import js from "../images/js.png"
import react from "../images/react.png"
import next from "../images/nextjs.png"
import node from "../images/node.png"
import express from "../images/express.png"
import mongo from "../images/mongo.png"
import postgre from "../images/postgre.png"
import git from "../images/git.png"
import aws from "../images/aws.png"
import grafana from "../images/grafana.png"
import prom from "../images/prometheus.png"
import ml from "../images/ml.png"
import python from "../images/python.png"
import spring from "../images/springBoot.png"

const Skills = () => {
    // array storing all skills 
    const skills = [
        {
            name: "Java",
            image: java,
        },
        {
            name: "JavaScript",
            image: js,
        },
        {
            name: "React JS",
            image: react,
        },
        {
            name: "NextJS",
            image: next,
        },
        {
            name: "NodeJS",
            image: node,
        },
        {
            name: "Express",
            image: express,
        },
        {
            name: "MongoDB",
            image: mongo,
        },
        {
            name: "PostgreSQL",
            image: postgre,
        },
        {
            name: "Git",
            image: git,
        },
        {
            name: "AWS",
            image: aws,
        },
        {
            name: "Grafana",
            image: grafana,
        },
        {
            name: "Prometheus",
            image: prom,
        },
        {
            name: "Machine Learning",
            image: ml,
        },
        {
            name: "Python",
            image: python,
        },
        {
            name: "Spring Boot",
            image: spring
        }
    ];

    return (
        <div className="skills-container">
            <h1 className='hero-title'>Tools Of The Present & The Future</h1>
            <h3 style={{ color: "deepskyblue" }}>Tools I prefer using</h3>
            <motion.ul
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.5, duration: 1 }}
            >
                {skills.map((skill, index) => (
                    <SkillCard key={index} skill={skill.name} imgSrc={skill.image} />
                ))}
            </motion.ul>
        </div>
    );
};

export default Skills;
