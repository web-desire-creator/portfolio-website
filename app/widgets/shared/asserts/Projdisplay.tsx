import React from 'react'
import { FC } from 'react'
import Button from './Button'
import Image, { StaticImageData } from 'next/image'
const Projdisplay:FC<{image:StaticImageData, title:string, desc:string, link:string}> = ({image,title, desc, link}) => {
  return (
    <div className='flex flex-col max-w-s sm:max-w-xs gap-y-2 items-center border py-4 px-4 rounded-md bg-[#31313F] text-white justify-between'>
        <div className='flex flex-col items-center gap-y-2'>
        <div>
        <Image src={image} alt="project" className='object-fill aspect-video'/>
        </div>
        <div className='text-center'>
        <div className='mt-4 text-2xl font-semibold text-[#7562E0]'>
        {title}
        </div>
        <div className='text-lg font-medium'>
        {desc}
        </div>
        </div>
        </div>
        <div>
        <Button text='View Project' link={link} border={false}/>
        </div>
    </div>
  )
}

export default Projdisplay