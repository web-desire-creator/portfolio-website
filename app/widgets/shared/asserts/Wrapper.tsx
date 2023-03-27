import { FC } from 'react'
const Wrapper:FC<{childern:React.ReactNode}> = ({childern}) => {
  return (
    <div className='max-w-[400px] sm:max-w-screen-lg mx-auto'>
        {childern}
    </div>
  )
}

export default Wrapper