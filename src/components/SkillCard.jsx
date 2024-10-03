import React from 'react'
import { motion } from 'framer-motion'

const SkillCard = ({ skill, imgSrc }) => {
    return (
        <motion.li
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
            transition={{ duration: 0.5 }}

            initial={{ opacity: 0, x:150 , y:10 }}
            whileInView={{ opacity: 1, x: 0  , y:0}}
        >
            <img src={imgSrc} alt="Skill" />
            <p>{skill}</p>
        </motion.li>
    )
}

export default SkillCard
