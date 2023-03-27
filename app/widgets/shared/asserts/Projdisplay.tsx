import React from 'react'
import { FC } from 'react'
import Button from './Button'
import Image, { StaticImageData } from 'next/image'
const Projdisplay:FC<{image:StaticImageData, title:string, desc:string, link:string}> = ({image,title, desc, link}) => {
  return (
    <div className='flex flex-col max-w-xs gap-y-2 items-center border py-4 px-4 rounded-md bg-[#31313F] text-white'>
        <div className=''>
        <Image src={image} alt="project"/>
        </div>
        <div className='text-2xl font-semibold text-[#7562E0]'>
        {title}
        </div>
        <div className='text-lg font-medium'>
        {desc}
        </div>
        <Button text='View Project' border={false}/>
    </div>
  )
}

export default Projdisplay