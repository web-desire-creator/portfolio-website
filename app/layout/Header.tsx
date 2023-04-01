'use client'
import React from 'react'
import Link from 'next/link'
import { useRouter } from 'next/navigation'
import Wrapper from '../widgets/shared/asserts/Wrapper'
const Header = () => {
  const router = useRouter();
  return (
    <div className='sticky top-0 bg-[#181824]'>
    <Wrapper childern={<div className='flex py-4 text-white '>
    <div className='text-lg basis-8/12 font-bold text-[#7562E0]'>
    <button onClick={()=>router.push("/")}>M. Bilal Nadeem</button>
    </div>
    <div className='flex font-semibold gap-x-4'>
      <Link href="/" passHref>
      <button className='basis-1/4 hover:text-[#7562E0]'>Home</button>
      </Link>
      <Link href="/#about" passHref>
      <button className='basis-1/4 hover:text-[#7562E0]'>About</button>
      </Link>
      <Link href="/#project" passHref>
      <button className='basis-1/4 hover:text-[#7562E0]'>Projects</button>
      </Link>
      <Link href="/#reviews" passHref>
      <button className='basis-1/4 hover:text-[#7562E0]'>Reviews</button>
      </Link>
    </div>
  </div>}/>
  </div>
  )
}

export default Header