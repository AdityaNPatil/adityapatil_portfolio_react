import React from 'react';
// framer-motion for easier animations
import { motion } from 'framer-motion';
import { useNavigate } from 'react-router-dom';

// import components
import Skills from './Skills';
import About from './About';
import Contact from './Contact';

// import images
import profilePic from "../images/profilePic.png"

const Home = () => {
    // use navigate for view my work
    const nav = useNavigate();

    const navToProjects = () => {
        nav("/projects")
    }

    return (
        <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1 }}
            className="hero"
        >
            {/* heroCard */}
            <div className='heroCard'>
                <img src={profilePic} alt="myPic" className='heroImg' />
                <div className='heroInfo'>
                    <h1 className="hero-title">Hi, I'm Aditya Patil</h1>
                    <p className="hero-subtitle">Developer | AI Enthusiast | Cloud Novice</p>
                    <motion.button
                        className="hero-button"
                        whileHover={{ scale: 1.1 }}
                        whileTap={{ scale: 0.9 }}

                        onClick={navToProjects}
                    >
                        View My Work
                    </motion.button>
                    <motion.button
                        className="hero-button"
                        whileHover={{ scale: 1.1 }}
                        whileTap={{ scale: 0.9 }}

                    >
                        <a href="https://drive.google.com/file/d/1CxR61hv1FkCEz_CVvigSzF9JLRShUjhM/view?usp=drive_link" target='_blank'>View Resume</a>
                    </motion.button>
                </div>
            </div>

            {/* // Skills section */}
            <Skills />

            {/* About Section */}
            <About />

            {/* Contact Section */}
            <Contact />
        </motion.div>

    );
};

export default Home;
