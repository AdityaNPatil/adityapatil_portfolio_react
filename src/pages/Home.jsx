import React from 'react';
// framer-motion for easier animations
import RotatingText from '../components/effects/RotatingText';
import GradientText from '../components/effects/GradientText';
import TiltedCard from '../components/TiltedCard';
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
                {/* <img src={profilePic} alt="myPic" className='heroImg' /> */}
                <TiltedCard
                    imageSrc= {profilePic}
                    altText="Aditya Patil pic"
                    containerHeight="500px"
                    containerWidth="500px"
                    imageHeight="400px"
                    imageWidth="400px"
                    rotateAmplitude={15}
                    scaleOnHover={1.2}
                    showMobileWarning={false}
                    showTooltip={false}
                    displayOverlayContent={true}
                    overlayContent={
                        <p className="tilted-card-demo-text">
                            Aditya Patil - Developer
                        </p>
                    }
                />

                <div className='heroInfo'>
                    {/* <h1 className="hero-title">Hi, I'm Aditya Patil</h1> */}
                    <GradientText
                        colors={["#40ffaa", "#4079ff", "#40ffaa", "#4079ff", "#40ffaa"]}
                        animationSpeed={4}
                        showBorder={false}
                        className="hero-title"
                    >
                        <h1>Hi, I'm Aditya Patil</h1>
                    </GradientText>
                    <RotatingText
                        texts={['Developer', 'AI Enthusiast', 'Cloud Novice', 'Gamer!']}
                        mainClassName="px-2 sm:px-2 md:px-3 overflow-hidden py-0.5 sm:py-1 md:py-2 justify-center rounded-lg"
                        staggerFrom={"last"}
                        initial={{ y: "100%" }}
                        animate={{ y: 0 }}
                        exit={{ y: "-120%" }}
                        staggerDuration={0.025}
                        splitLevelClassName="overflow-hidden pb-0.5 sm:pb-1 md:pb-1"
                        transition={{ type: "spring", damping: 50, stiffness: 400 }}
                        rotationInterval={2000}
                    />
                    {/* <p className="hero-subtitle">Developer | AI Enthusiast | Cloud Novice</p> */}
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
                        <a href="https://drive.google.com/file/d/1TqrWyIwEX29p4GDXGbHFCSD4ZymPOt0S/view?usp=drivesdk" target='_blank'>View Resume</a>
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
