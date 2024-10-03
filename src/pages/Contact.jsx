import React from 'react';
import { FaLinkedin, FaGithub, FaEnvelope } from 'react-icons/fa';
import { motion } from 'framer-motion';

// import useRef Hook --  is a React Hook that lets you reference a value that’s not needed for rendering.
import { useRef } from 'react';

// Send form responses to email ---  EMAILJS WEBSITE -- service id
import emailjs from 'emailjs-com';

// SERVICE ID -- service_91vowr7 
// TEMPLATE ID -- template_ozcserm
// USER ID -- PUBLIC KEY -- 5qrIShPiUF_BIzkPw

const Contact = () => {

    const form = useRef();

    function sendEmail(e) {
        // prevent default behaviour
        e.preventDefault();

        // use emailjs to send email by user to adityapatil2708@gmail.com
        emailjs.sendForm('service_91vowr7', 'template_ozcserm', form.current, '5qrIShPiUF_BIzkPw')
            .then((result) => {
                console.log(result.text);
                alert("Message sent successfully!");
            }, (error) => {
                console.log(error.text);
                alert("An error occurred, please try again.");
            });

        // reset the form after submission 
        e.target.reset();
    };

    return (
        <motion.div
            className="contact-container"
            initial={{ opacity: 0 , y:200}}
            whileInView={{opacity:1 , y:0}}
            animate={{ opacity: 1}}
            transition={{ duration: 1 }}
        >
            <h2 className='hero-title'>Contact Me</h2>
            <p>I'm currently available for new projects, so feel free to send me a message or email about anything you'd like to collaborate on.</p>

            <div className="contact-content">
                {/* Contact Icons */}
                <div className="contact-icons">
                    <motion.a
                        href="https://www.linkedin.com/in/aditya-p-986955237/"
                        target='_blank'
                        whileHover={{ scale: 1.2 }}
                        whileTap={{ scale: 0.9 }}
                        className="contact-icon"

                        style={{textDecoration:"none"}}
                    >
                        <FaLinkedin /> Linkedin
                    </motion.a>

                    <motion.a
                        href="https://github.com/AdityaNPatil"
                        target='_blank'
                        whileHover={{ scale: 1.2 }}
                        whileTap={{ scale: 0.9 }}
                        className="contact-icon"
                        
                        style={{textDecoration:"none"}}
                    >
                        <FaGithub /> Github
                    </motion.a>

                </div>

                {/* Contact Form */}
                <form ref={form} onSubmit={sendEmail} className="contact-form">
                    <div className="form-group">
                        <label htmlFor="name">Name</label>
                        <input type="text" id="name" name="user_name" required />
                    </div>

                    <div className="form-group">
                        <label htmlFor="email">Email</label>
                        <input type="email" id="email" name="user_email" required />
                    </div>

                    <div className="form-group">
                        <label htmlFor="subject">Subject</label>
                        <input type="text" id="subject" name="user_subject" required />
                    </div>

                    <div className="form-group">
                        <label htmlFor="message">Message</label>
                        <textarea id="message" name="message" rows="5" required></textarea>
                    </div>

                    <button type="submit" className="submit-button">Send Message</button>
                </form>
            </div>
        </motion.div>
    );
};

export default Contact;
