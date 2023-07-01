import React from 'react'
import Image from 'next/image'
import Projdisplay from '../asserts/Projdisplay'
import PROJECT from '../asserts/panaversesite.png'
import TODO from '../asserts/todoapp.png'
import Automation from '../asserts/birthday.jpg'
import Text from '../asserts/text.png'
import Notes from '../asserts/notes.png'
import Weather from '../asserts/weather.png'
import Metaversus from '../asserts/meta.png'
import Wrapper from '../asserts/Wrapper'


const projectsArr = [
    {
    title:"Metaversus",
    desc:"A futuristic Metaverse Website Landing Page built with Nextjs13, Framer Motion and Tailwind CSS",
    link:"https://metaversus-rose.vercel.app/",
    image:Metaversus
    },
    {
    title:"Weather App",
    desc:"Weather App built with React and Tailwind CSS",
    link:"https://weatherapp-react-tailwind-bilal.vercel.app/",
    image:Weather
    },
    {
    title:"Notes App",
    desc:"CRUD Notes App built with Nextjs13, Tailwind CSS, Vercel PostgreSQL and Drizzle ORM",
    link:"https://notes-app-postgres.vercel.app/",
    image:Notes
    },
    {
    title:"Text Modifier",
    desc:"Text Manupilating App built with React and Bootstrap",
    link:"https://text-modifier-react.vercel.app/",
    image:Text
    },
    {
    title:"Automation",
    desc:"is project Automatically wishes Birthday at 12am. I used python Selenium Library to build this project",
    link:"https://github.com/web-desire-creator/birthday-project",
    image:Automation
    },
];


const Projects = () => (


    <section id="project" className='py-8 bg-[#1A1A29]'>
        <Wrapper childern={<div>
            <div className=' text-3xl font-semibold text-[#7562E0]'>
                Featured Projects:
            </div>
            <div className='text-white font-medium py-4'>
                I have worked on many projects over the course of being a Web Developer, here are a few of my live, real-world projects
                <div className='flex flex-col md:flex-row flex-wrap gap-y-4 pt-6 sm:gap-8'>
                    {projectsArr.map((project, index) => {
                        return (
                            <Projdisplay key={index} image={project.image} title={project.title} desc={project.desc} link={project.link} />
                        )
                    })}
                </div>
            </div>
        </div>} />
        
    </section>
)

export default Projects