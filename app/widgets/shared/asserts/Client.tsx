import React from 'react'
import { FC } from 'react'
const Client:FC<{title:string,desc:string}> = ({title,desc}) => {
  return (
    <div className='flex flex-col justify-between border border-solid bg-[#31313F] border-white text-white max-w-sm mb-8 flex-1'>
        <div className=' font-semibold text-lg p-4'>
            {desc}
        </div>
        <div className='text-center text-[#7562E0] font-bold py-4'>
            {title}
        </div>

    </div>
  )
}

export default Client