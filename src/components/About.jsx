import React from 'react';
import { motion } from 'framer-motion';

import { styles } from '../styles';
import { services } from '../constants';
import { fadeIn, textVariant } from '../utils/motion';
import { SectionWrapper } from '../hoc'

const ServiceCard = ({ index, title, icon }) => {
  return(
    <div className='xs:w-[250px] w-full flex mx-auto'>
      <motion.div 
      variants={fadeIn("right", "spring", 0.5 * index, 0.75)}
      className='w-full green-pink-gradient p-[1px] rounded-[20px]'>
        <div className='bg-tertiary rounded-[20px] py-5 px-12 min-h-[280px] flex justify-evenly items-center flex-col'
        >
          <img src={icon} alt={title} className='w-16 h-16 object-contain' />
          <h3 className='text-secondary text-[20px] font-bold text-center'>{title}</h3>
        </div>
      </motion.div>
    </div>
  )
}

const About = () => {
  return (
    <>
      <div variants={textVariant()}>
        <p className={styles.sectionSubText}>Introduction</p>
        <h3 className={styles.sectionHeadText}>Overview.</h3>
      </div>

      <div className='w-full flex'>
      <motion.p
      variants={fadeIn("", "", 0.1, 1)}
      className='mt-4 text-secondary text-[17px] max-w-3xl leading-[30px]'>
        Hi, I'm an aspiring front-end developer with 10 years of experience in sales, marketing, and risk & compliance. I'm passionate about creating dynamic, user-friendly, efficient web solutions that drive business growth. I'm also a quick learner and collaborate closely with clients. I have a strong knowledge of React, Node.js, Three.js and responsive design. Let's work together to bring your ideas to life!
      </motion.p>
      </div>

      <div className='mt-20 flex flex-wrap gap-7'>
        {services.map((service, index) => (
          <ServiceCard key={service.title} index={index} {...service} 
          />
        ))}
      </div>
    </>
  )
}

export default SectionWrapper(About, "about")