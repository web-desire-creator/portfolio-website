import React from 'react'
import Image from 'next/image'
import CIRCLE from '../asserts/CIRCLE.png'
import Wrapper from '../asserts/Wrapper'
import Button from '../asserts/Button'

const Herosection = () => {
  return (
    <div className='bg-[#1A1A29]'>
    <Wrapper childern={
    <section className='flex flex-col sm:flex-row text-white justify-items-stretch sm:justify-between sm:items-center'>
    <div className='basis-6/12'>
      <div className='text-2xl pt-8 sm:pt-0 font-medium'>Hello I&apos;m</div>
      <h1 className='text-3xl sm:text-5xl font-semibold'>M. Bilal Nadeem</h1>
      <div className='text-lg font-medium'>I am professional Full-stack developer with additional skills of content writing and graphics design. I create seamless web experiences for end-users.</div>
      <div className='flex justify-center sm:justify-start sm:mt-10 gap-x-6 pt-4'>
      <Button text='About me' border={false}/>
      <Button text='Projects' border={true}/>
      </div>
    </div>
    <div className='mt-8 sm:-mt-0'>
    <Image src= {CIRCLE} alt="background"/>
    </div>
    </section>}
    />
    <div className='bg-[#181824] py-8 '></div>
    </div>
  )
}
export default Herosection