import React from 'react'
import { FC } from 'react'
import { faStar } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
const Client:FC<{title:string,desc:string}> = ({title,desc}) => {
  return (
    <div className='flex flex-col justify-between border border-solid bg-[#31313F] border-white text-white max-w-sm mb-8 flex-1'>
        <div className=' font-semibold text-lg p-4'>
            {desc}
        </div>
        <div className='flex flex-col items-center text-center text-[#7562E0] font-bold py-4'>
        <div className='flex gap-1'>
        <FontAwesomeIcon className="w-3 cursor pointer duration-300 hover:opacity-40 cursor-pointer" icon={faStar} style={{color: "#edcf07",}} />
        <FontAwesomeIcon className="w-3 cursor pointer duration-300 hover:opacity-40 cursor-pointer" icon={faStar} style={{color: "#edcf07",}} />
        <FontAwesomeIcon className="w-3 cursor pointer duration-300 hover:opacity-40 cursor-pointer" icon={faStar} style={{color: "#edcf07",}} />
        <FontAwesomeIcon className="w-3 cursor pointer duration-300 hover:opacity-40 cursor-pointer" icon={faStar} style={{color: "#edcf07",}} />
        <FontAwesomeIcon className="w-3 cursor pointer duration-300 hover:opacity-40 cursor-pointer" icon={faStar} style={{color: "#edcf07",}} />
        </div>
        <div>
            {title}
        </div>
        </div>
        
    </div>
  )
}

export default Client