import React from 'react'
import Wrapper from '../widgets/shared/asserts/Wrapper'
const Header = () => {
  return (
    <div className='bg-[#181824]'>
    <Wrapper childern={<div className='flex py-4 text-white '>
    <div className='basis-8/12 text-[#7562E0]'>
    M. Bilal Nadeem
    </div>
    <div className='flex gap-x-4'>
      <button className='basis-1/4 hover:text-[#7562E0]'>Home</button>
      <button className='basis-2/4 hover:text-[#7562E0]'>About us</button>
      <button className='basis-1/4 hover:text-[#7562E0]'>Projects</button>
      <button className='basis-1/4 hover:text-[#7562E0]'>Reviews</button>
    </div>
  </div>}/>
  </div>
  )
}

export default Header