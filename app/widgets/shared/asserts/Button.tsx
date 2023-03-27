import { FC } from 'react'
const Button:FC<{text:string, border:boolean}> = ({text, border}) => {
  return (
    <button className={border?'text-white py-2 px-4 border border-solid border-white rounded-lg':'text-white py-2 px-4 bg-[#7562E0] rounded-lg'}>
      {text}
    </button>
  )
}

export default Button