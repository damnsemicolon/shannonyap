import { BallCanvas } from './canvas';
import { SectionWrapper } from '../hoc';
import { technologies } from '../constants';
import { styles } from '../styles';
import { textVariant } from '../utils/motion';


const Tech = () => {
  return (
<>
    <div variants={textVariant()}>
    <p className={styles.sectionSubText}>The Journey Never Ends</p>
    <h2 className={styles.sectionHeadText}>Tech Skills.</h2>
  </div>

    <div className='flex flex-row flex-wrap justify-center gap-5'>
      {technologies.map((technology) => (
        <div
        className='w-28 h-28'
        key={technology.name}>
          <BallCanvas icon={technology.icon} />
        </div>
      ))}
    </div>
</>
  )
}

export default SectionWrapper(Tech, "");