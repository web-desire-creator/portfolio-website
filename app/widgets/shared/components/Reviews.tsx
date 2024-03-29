import React from 'react'
import Client from '../asserts/Client'
import Wrapper from '../asserts/Wrapper'

const Reviews = () => (
    <div id="reviews" className='bg-[#1a1a29]'>
        <Wrapper childern={
        <>
            <div className='text-3xl py-6 font-semibold text-[#7562E0]'>Reviews:</div>
        <div className='flex flex-col sm:flex-row gap-y-10 sm:gap-x-10 items-stretch'>
            <Client title={'jochenbessemans'} desc={'\"This seller responds very quickly and does what you ask for. His input and suggestions in every step added value. One of my best Fiverr experiences so far!\"'} />
            <Client title={'gailforce12'} desc={'\"The communication and revisions were dealt with quickly and to great effect. Will use again and can definitely recommend.\"'}/>
            <Client title={'networkislam'} desc={'\"Thanks for such a quick reponse\"'}/>
            <Client title={'abgcompu'} desc={'\"Excellent and fast. Will definitely hire again.\"'}/>
        </div>

        </>}/>
    </div>
)

export default Reviews