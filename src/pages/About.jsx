import React from 'react';

import { motion } from 'framer-motion';

const About = () => {
    return (
        <section className="about">
            <div className="about-container">
                <h1 className="about-title">Services For You</h1>
                <p className="about-description">
                    I've dedicated myself to
                    acquiring the skills and principles necessary to deliver exceptional
                    service.
                </p>
                <div className="about-content">
                    <motion.section
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.95 }}
                        initial={{ opacity: 0, x:150 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{once:true}}
                        transition={{ duration: 0.5 }}
                    >
                        <h2>Continuous Support</h2>
                        <p>
                            I'm committed to advancing your web-based software to ensure it
                            remains efficient and competitive in the market. By employing
                            well-established DevOps processes, I can swiftly implement urgent
                            updates within hours and release new, planned functional modules
                            every other week.
                        </p>
                    </motion.section>
                    <motion.section
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.95 }}
                        initial={{ opacity: 0, x:150 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.5 }}
                    >
                        <h2>Back-end Development</h2>
                        <p>
                            I meticulously implement the business logic of your web application
                            on the back end. I rely on proven frameworks to guarantee fast and
                            high-quality coding. Additionally, I construct well-structured APIs
                            to seamlessly integrate your web app with corporate or third-party
                            systems and services.
                        </p>
                    </motion.section>
                    <motion.section
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.95 }}
                        initial={{ opacity: 0, x:150 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.5 }}
                    >
                        <h2>Frontend Design/Dev</h2>
                        <p>
                            As a seasoned web developer, I meticulously analyze your target user
                            audience to comprehend their needs and incorporate these insights
                            into UI design. Once we've established a shared vision for the look
                            and feel of your web application, I leverage smart front-end
                            technologies to bring it to life.
                        </p>
                    </motion.section>
                </div>
            </div>
        </section>
    );
};

export default About;