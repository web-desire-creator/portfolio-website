import React from 'react'
import { FC } from 'react'
const Cards:FC<{text:string}> = ({text}) => {
  return (
      <div className='border border-solid bg-[#1A1A29] hover:bg-[#7562E0] py-20 border-white basis-4/12 text-center font-bold text-white'>{text}</div>
  )
}

export default Cards