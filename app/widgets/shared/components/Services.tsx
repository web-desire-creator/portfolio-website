import React from 'react'
import Wrapper from '../asserts/Wrapper'
import Cards from '../asserts/Cards'
import Servicecard from '../asserts/Servicecard'

const Services = () => {
  return (
    <div className='bg-[#1A1A29]'>
      <Wrapper childern={
        <div>
        <div className='flex flex-col sm:flex-row gap-y-4 justify-between  sm:gap-x-4'>
        <Cards text='UI/UX DESIGN'/>
        <Cards text='WEB APP DEVELOPMENT'/>
        <Cards text='API DOCUMENTATION & INTEGRATION'/>
        <Cards text='POSTGRESQL'/>

        </div>
        <div className='text-2xl text-[#7562E0] font-semibold py-4 pt-8'>The Services I offer:</div>
        <div className='flex flex-col sm:flex-row gap-y-10 sm:gap-x-10'>
        <Servicecard title={'UI/UX DESIGN'} desc={'I will design beautiful web interfaces with figma and adobe XD'} color={true}/>
        <Servicecard title={'UI/UX DESIGN'} desc={'I will design beautiful web interfaces with figma and adobe XD'} color={false}/>
        <Servicecard title={'UI/UX DESIGN'} desc={'I will design beautiful web interfaces with figma and adobe XD'} color={true}/>
        </div>
        <div className='flex flex-col sm:flex-row gap-y-10 sm:gap-x-10 pt-10'>
        <Servicecard title={'UI/UX DESIGN'} desc={'I will design beautiful web interfaces with figma and adobe XD'} color={false}/>
        <Servicecard title={'UI/UX DESIGN'} desc={'I will design beautiful web interfaces with figma and adobe XD'} color={true}/>
        <Servicecard title={'UI/UX DESIGN'} desc={'I will design beautiful web interfaces with figma and adobe XD'} color={false}/>
        </div>
        <div className='flex base-4/12 '>
        
        </div>


        </div>
      }
      />
    </div>
  )
}

export default Services