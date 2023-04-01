import React from 'react'
import Wrapper from '../asserts/Wrapper'

const About = () => {
  return (
    <section id="about" className='bg-[#1A1A29] text-white'>
      <Wrapper childern={<>
        <h2 className='text-2xl text-[#7562E0] font-semibold pt-10'>
          About Me:
        </h2>
        <p className='text-base sm:text-xl font-medium'>Hi, my name is Muhammad Bilal Nadeem, I am a certified Full-stack web developer and graphics designer. I have majored JavaScript NEXTjs Framework. I can make elegant web applications using TailwindCSS and Typescript.</p>
        <div className='py-2 flex gap-x-3 items-center'>
          <div className='text-6xl sm:text-8xl font-semibold text-[#7562E0]'>
            2+
          </div>
          <div className='text-xl sm:text-2xl'>
            Years of experience. Specialized in building web apps, while ensuring a seamless
            web experience for end users.
          </div>
        </div>
      </>
      } />
    </section>
  )
}

export default About
