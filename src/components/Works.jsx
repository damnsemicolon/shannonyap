import React from 'react';
import { motion } from 'framer-motion';

import { styles } from '../styles';
import { github, demo } from '../assets';
import { projects } from '../constants';
import { fadeIn } from '../utils/motion';
import { SectionWrapper } from '../hoc';

const ProjectCard = ({ index, name, description, tags, image, source_code_link, deployed_link }) => {
  return (
    <div 
    variants={fadeIn("up", "spring", index * 0.75)} 
    className='bg-tertiary p-1 rounded-3xl sm:w-[330px] w-full'
      >
        <div className='h-[330px] '>
          {/* Project Image */}
          <img
            src={image}
            alt={name}
            className=' flex object-cover rounded-3xl' />
          {/* Buttons */}
          <div className='-mt-12 inset-0 flex justify-end m-3 card-img_hover'>
            {/* Github Button */}
            <div
              onClick={() => window.open(source_code_link, '_blank')}
              className='black-gradient w-10 h-10 rounded-full flex justify-center items-center cursor-pointer'>
              <img
                src={github}
                alt='github'
                className='w-1/2 h-1/2 object-contain hover:scale-150 transition-transform duration-300 ease-in-out' />
            </div>
            {/* Deployed Button */}
            <div
              onClick={() => window.open(deployed_link, '_blank')}
              className='black-gradient w-10 h-10 rounded-full flex justify-center items-center cursor-pointer'>
              <img
                src={demo}
                alt='demo'
                className='w-1/2 h-1/2 object-contain hover:scale-150 transition-transform duration-300 ease-in-out' />
            </div>
          </div>
        </div>

        {/* Project name and descriptions */}
        <div className='mt-5'>
          <h3 className='text-white font-bold text-[24px]'>{name}</h3>
          <p className='mt-2 text-secondary text-[14px]'>{description}</p>
        </div>

        {/* Tags for technology used */}
        <div className='mt-4 flex flex-wrap gap-2'>
          {tags.map((tag) => (
            <p key={tag.name} className={`text-[14px] ${tag.color}`}>
              #{tag.name}
            </p>
          ))}
        </div>
    </div>
  )
}

const Works = () => {
  return (
    <>
      <div>
        <p className={styles.sectionSubText}>To seek out new frameworks and new project ideas</p>
        <h2 className={styles.sectionHeadText}>Projects.</h2>
      </div>

      <div className='w-full flex'>
        <motion.p
          variants={fadeIn("", "", 0.1, 1)}
          className='mt-4 text-secondary text-[17px] max-w-3xl leading-[30px]'>
          Following projects showcases my skills and experience throughout my never-ending coding journey.
        </motion.p>
      </div>

      <div className='mt-20 flex flex-wrap gap-7'>
        {projects.map((project, index) => (
          <ProjectCard
            key={`project-${index}`}
            index={index}
            {...project}
          />
        ))}
      </div>
    </>
  )
}

export default SectionWrapper(Works, "projects");