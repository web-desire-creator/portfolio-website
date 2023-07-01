'use client'
import React from 'react'
import Link from 'next/link'
import { useRouter } from 'next/navigation'
import Wrapper from '../widgets/shared/asserts/Wrapper'
const Header = () => {
  const router = useRouter();
  return (
    <div className='sticky top-0 bg-[#181824]'>
    <Wrapper childern={<div className='flex py-4 gap-x-4 items-center text-white '>
    <div className='text-lg basis-8/12 font-bold text-[#7562E0]'>
    <a href="#">
    <button>M. Bilal Nadeem</button>
    </a>
    </div>
    <div className='flex font-semibold gap-x-4'>
      <a href="#">
      <button className='basis-1/4 hover:text-[#7562E0]'>Home</button>
      </a>
      <a href="#about">
      <button className='basis-1/4 hover:text-[#7562E0]'>About</button>
      </a>
      <a href="/#project">
      <button className='basis-1/4 hover:text-[#7562E0]'>Projects</button>
      </a>
      <a href="#reviews">
      <button className='basis-1/4 hover:text-[#7562E0]'>Reviews</button>
      </a>
      <a href="#Contact">
      <button className='basis-1/4 hover:text-[#7562E0]'>Contact</button>
      </a>
    </div>
  </div>}/>
  </div>
  )
}

export default Header