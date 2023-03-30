import React from 'react'
import Image from 'next/image'
import Projdisplay from '../asserts/Projdisplay'
import PROJECT from '../asserts/project.png'
import Wrapper from '../asserts/Wrapper'
const Projects = () => (

    <div className=' py-8 bg-[#1A1A29]'>
        <Wrapper childern={<section>
            <div className=' text-3xl font-semibold text-[#7562E0]'>
                Featured Projects:
            </div>
            <div className='text-white font-medium py-4'>
                I have worked on many projects over the course of being a Web Developer, here are a few of my live, real-world projects
                <div className='flex flex-col sm:flex-row justify-center gap-y-4 pt-6 sm:gap-8'>
                    <Projdisplay image={PROJECT} title='Panaverse Dao' desc='A website made for well-known educational institute of Pakistan' link='https://panaverse-dao-website-ebon.vercel.app/' />
                    <Projdisplay image={PROJECT} title='Todo App' desc='An app which performs all CRUD Functions and involves working with database' link='https://todo-for-you.vercel.app/' />
                    <Projdisplay image={PROJECT} title='Automation' desc='This project Automatically wishes Birthday at 12am. I used python Selenium Library to build this project' link='https://github.com/web-desire-creator/birthday-project' />
                </div>
            </div>
        </section>} />
        
    </div>
)

export default Projects