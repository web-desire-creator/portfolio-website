import React from 'react'
import Client from '../asserts/Client'
import Wrapper from '../asserts/Wrapper'

const Reviews = () => (
    <div className='bg-[#1a1a29]'>
        <Wrapper childern={
        <>
            <div className='text-3xl py-6 font-semibold text-[#7562E0]'>Reviews:</div>
        <div className='flex flex-col sm:flex-row gap-y-10 sm:gap-x-10 items-stretch'>
            <Client title={'jochenbessemans'} desc={'&Prime;This seller responds very quickly and does what you ask for. His input and suggestions in every step added value. One of my best Fiverr experiences so far!&Prime;'} />
            <Client title={'gailforce12'} desc={'&Prime;The communication and revisions were dealt with quickly and to great effect. Will use again and can definitely recommend.&Prime;'}/>
            <Client title={'networkislam'} desc={'&Prime;Thanks for such a quick reponse&Prime;'}/>
            <Client title={'abgcompu'} desc={'&Prime;Excellent and fast. Will definitely hire again.&Prime;'}/>
        </div>

        </>}/>
    </div>
)

export default Reviews