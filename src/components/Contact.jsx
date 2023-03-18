import { useState, useRef } from 'react'
import { motion } from 'framer-motion';
import emailjs from '@emailjs/browser';

import { styles } from '../styles';
import { EarthCanvas } from './canvas';
import { SectionWrapper } from '../hoc';
import { slideIn } from '../utils/motion';


const Contact = () => {
  const formRef = useRef();
  const [form, setForm] = useState({
    name: '',
    email: '',
    message: '',
  });

  const [loading, setLoading] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;

    setForm({ ...form, [name]: value })
  }

  const handleSubmit = (e) => {
    e.preventDefault();
    setLoading(true);

    emailjs.send(
      'service_kw1bnmn',
      'template_e74d9zd',
      {
        from_name: form.name,
        from_email: form.email,
        to_name: 'Shannon',
        to_email: 'shannoninengland@gmail.com',
        message: form.message,
      },
      'gbS-vvntmuBSlFnsi'
      )
      .then(() => {
        setLoading(false);
        alert('Thank you for your message! Live long and prosper🖖.');

        setForm({
          name:'',
          email:'',
          message:'',
        })
      }, (error) => {
        setLoading(false)
        alert("He's dead, Jim! Please try again or send me an email directly at shannoninengland@gmail.com.")
      })
  }

  return (
    <>
    <p className={styles.sectionSubText}>To boldly go...</p>
        <h3 className={styles.sectionHeadText}>Contact.</h3>
    <div className=' xl:flex-row flex-col-reverse flex gap-8 overflow-hidden'>
      {/* Contact modal */}
      
      <motion.div
        variants={slideIn('left', 'tween', 0.2, 1)}
        className='bg-black-100 px-8 pb-8 rounded-2xl'>
       
        <form
          ref={formRef}
          onSubmit={handleSubmit}
          className='mt-12 flex flex-col gap-8'
        >
          {/* Name */}
          <label className='flex flex-col'>
            <span className='text-white font-medium mb-4'>Your Name</span>
            <input
              type='text'
              name='name'
              value={form.name}
              onChange={handleChange}
              placeholder="What's your name?"
              className='bg-tertiary py-4 px-12 placeholder:text-secondary text-white rounded-lg outlined-none border-none font-medium'
            />
          </label>
          {/* Email Address */}
          <label className='flex flex-col'>
            <span className='text-white font-medium mb-4'>Your Email</span>
            <input
              type='email'
              name='email'
              value={form.email}
              onChange={handleChange}
              placeholder="What's your email?"
              className='bg-tertiary py-3 px-12 placeholder:text-secondary text-white rounded-lg outlined-none border-none font-medium'
            />
          </label>
          {/* Message */}
          <label className='flex flex-col'>
            <span className='text-white font-medium mb-4'>Your Message</span>
            <textarea
              rows='7'
              name='message'
              value={form.message}
              onChange={handleChange}
              placeholder="What's your message?"
              className='bg-tertiary py-3 px-12 placeholder:text-secondary text-white rounded-lg outlined-none border-none font-medium'
            />
          </label>

          <button
            type='submit'
            className='bg-tertiary py-3 w-full outline-none text-white font-bold shadow-md shadow-primary rounded-3xl'>
            {loading ? 'Sending...' : 'Send'}
          </button>
        </form>
      </motion.div>
      {/* 3D Earth Modal */}
      <motion.div
        variants={slideIn('right', 'tween', 0.2, 1)}
        className='xl:flex-1 xl:h-[auto] md:h-[550px] h[350px]'>
        <EarthCanvas />
      </motion.div>
    </div>
    </>
  )
}

export default SectionWrapper(Contact, 'contact')