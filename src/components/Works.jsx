import Tilt from 'react-tilt';
import { motion } from 'framer-motion';

import {styles} from '../styles';
import { github } from '../assets';
import {SectionWrapper } from '../hoc';
import { projects } from '../constants';
import { fadeIn, textVariant } from '../utils/motion';

const Works = () => {
  return (
    <>
      <motion.div variants={textVariant()}>
        <p className={styles.sectionSubText}>Fingers crossed hope it still loads</p>
        <h2 className={styles.sectionHeadText}>Projects.</h2>
      </motion.div>

      <div className='w-full flex'>
        <motion.p
          varients={fadeIn("", "", 0.1, 1)}
          className='mt-3 text-secondary text-[17px] max-w-3xl leading-[30px]'>
            Following projects showcases my skills and experience throughout my never-ending coding journey. Hover over the cards for more details.
          </motion.p>
          <div className='mt-20 flex'>

          </div>
      </div>
    </>
      )
}

export default SectionWrapper(Works, "");