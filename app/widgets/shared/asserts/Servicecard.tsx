import React from 'react'
import { FC } from 'react'
const Servicecard:FC<{title:string,desc:string,color:boolean}> = ({title,desc,color}) => {
  return (
    <div className={color?'flex flex-col items-center py-20 p-4 border border-solid rounded-xl border-[#7562E0] text-white basis-1/3':'flex flex-col items-center text-white border-white p-4 py-20 border border-solid rounded-xl basis-1/3'}>
    <div className='font-bold text-[#7562E0] pb-4 text-2xl'>{title}</div>
    <div className='font-bold'>{desc}</div>
    </div>
  )
}

export default Servicecard