import { motion } from 'framer-motion';

import { styles } from '../styles';
import { ComputersCanvas } from './canvas';

const Hero = () => {
  return (
    <section className='relative w-full h-screen mx-auto z-0'>
      <div className={`${styles.paddingX} absolute inset-0 pt-20 max-w-7xl mx-auto flex flex-row items-start gap-5`}>
        <div className='flex flex-col justify-center items-center mt-5'>
          <div className='w-5 h-5 rounded-full bg-[#f2c300]' />
          <div className='w-1 sm:h-80 h-40 yellow-gradient' />
        </div>
        <div>
          <h1 className={`${styles.heroHeadText} text-white`}>Hi, I am  <span className='text-[#f2c300]'>Shannon</span></h1>
          <p className={`${styles.heroSubText} mt-2 text-white-100`}>I develop web applications, UI/UX, and <br className='sm:block hidden' />I'm looking for a job.</p>
        </div>
      </div>
      <ComputersCanvas />

{/* added blob to let users go to the next section */}
      <div className='absolute xs:bottom-10 bottom-32 w-full flex justify-center items-center'>
        <a href="#about">
          <div className='w-[30px] h-[45px] rounded-3xl border-2 border-secondary flex justify-center items-start p-2'>
            <motion.div
              animate={{
                y: [0, 15, 0]
              }}
              transition={{
                duration: 3,
                repeat: Infinity,
                repeatType: 'loop',
              }}
              className='w-3 h-3 rounded-full bg-secondary mb-1'
            />
          </div>
        </a>
      </div>
    </section>
  )
}

export default Hero