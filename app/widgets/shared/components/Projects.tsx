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
                    <Projdisplay image={PROJECT} title='TWINDER' desc='A live Geolocation app for finding tweets and twitter users around you' link='https://www.google.com/search?q=trpc&oq=trpc+&aqs=chrome..69i57j0i67i650j0i512l5j69i61.1525j0j7&sourceid=chrome&ie=UTF-8' />
                    <Projdisplay image={PROJECT} title='TWINDER' desc='A live Geolocation app for finding tweets and twitter users around you' link='https://www.google.com/search?q=trpc&oq=trpc+&aqs=chrome..69i57j0i67i650j0i512l5j69i61.1525j0j7&sourceid=chrome&ie=UTF-8' />
                    <Projdisplay image={PROJECT} title='TWINDER' desc='A live Geolocation app for finding tweets and twitter users around you' link='https://www.google.com/search?q=trpc&oq=trpc+&aqs=chrome..69i57j0i67i650j0i512l5j69i61.1525j0j7&sourceid=chrome&ie=UTF-8' />
                </div>
            </div>
        </section>} />
        
    </div>
)

export default Projects