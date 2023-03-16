import Tilt from 'react-tilt';
import { motion } from 'framer-motion';

import { styles } from '../styles';
import { github, demo } from '../assets';
import { SectionWrapper } from '../hoc';
import { projects } from '../constants';
import { fadeIn, textVariant } from '../utils/motion';

const ProjectCard = ({ index, name, description, tags, image, source_code_link, deployed_link }) => {
  return (
    <motion.div variants={fadeIn("up", "spring", index * 0.5, 1)}>
      <Tilt
        options={{
          max: 45,
          scale: 1,
          speed: 450
        }}
        className='bg-tertiary p-5 rounded-2xl sm:w-[360px] w-full'
      >
        <div className='relative w-full h-[230px]'>
          <img
            src={image}
            alt={name}
            className='w-full h-full object-cover rounded-2xl' />
          <div className='absolute inset-0 flex justify-end m-3 card-img_hover'>
          {/* GITHUB LINK */}
            <div
              onClick={() => window.open(source_code_link, '_blank')}
              className='black-gradient w-10 h-10 rounded-full flex justify-center items-center cursor-pointer'>
              <img
                src={github}
                alt='github'
                className='w-1/2 h-1/2 object-contain hover:scale-150 transition-transform duration-300 ease-in-out' />
            </div>
            {/* DEPLOYED LINK */}
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


      </Tilt>
    </motion.div>
  )
}

const Works = () => {
  return (
    <>
      <div variants={textVariant()}>
        <p className={styles.sectionSubText}>Fingers crossed hope it still loads</p>
        <h2 className={styles.sectionHeadText}>Projects.</h2>
      </div>

      <div className='w-full flex'>
        <motion.p
          variants={fadeIn("", "", 0.1, 1)}
          className='mt-3 text-secondary text-[17px] max-w-3xl leading-[30px]'>
          Following projects showcases my skills and experience throughout my never-ending coding journey. Hover over the cards for more details.
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

export default SectionWrapper(Works, "");