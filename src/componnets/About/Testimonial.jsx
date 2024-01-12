import React from 'react';
import Marquee from 'react-fast-marquee';
import TestimonialCard from '../Cards/TestimonialCard';

function Testimonial() {
  return (
    <div className='flex flex-col h-fit bg-black mt-[150px]'>
        <div className='w-full h-[15vh] bg-secondary flex items-center justify-center'>
            <span className=' font-underated text-[48px] text-primary'>Hear from them</span>
        </div>
        <div className='mt-20'>
            <TestimonialCard />
        </div>
    </div>
  )
}

export default Testimonial;