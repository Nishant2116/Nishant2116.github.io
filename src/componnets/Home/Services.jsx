import React, { useEffect, useRef } from 'react';
import { gsap } from 'gsap';

import ScrollTrigger from 'gsap/dist/ScrollTrigger';
import { point_arrow } from '../../assets';
import { progress } from 'framer-motion';
import ServiceCard from '../Cards/ServiceCard';
import { services } from '../../constant/services';
import { useScroll, motion, useTransform, useInView} from 'framer-motion';

gsap.registerPlugin(ScrollTrigger);

function Services() {

  const sectionRef = useRef(null);
  const isInView = useInView(sectionRef, { once: true })
  const {scrollYProgress} = useScroll({
    target: sectionRef,
    offset:['start end', 'end end']
  })

  const rotate = useTransform(scrollYProgress , [0 ,1], [-90, 90])

  return (
    <div ref={sectionRef} className=' bg-black flex flex-col p-[64px]'>
        <div style={{ transform: isInView ? "none" : "translateY(50px)", opacity: isInView ? 1 : 0, transition: "all 0.9s cubic-bezier(0.17, 0.55, 0.55, 1) 0.2s" }}  className='flex' >
            <div className=' font-syne font-semibold text-[96px] text-white' >
              Our Services
            </div>
            <div className='ml-10 h-[50px] w-[80px]'>
                <motion.img style={{rotate}}  src={point_arrow} className='mt-10'/>
            </div>
        </div>
        <div className='mt-14 w-full'>
          <div className='w-full  grid grid-cols-2 gap-20'>
             {
                services.map((service) => {
                   return (
                      <ServiceCard icon={service.icon} title={service.title} description={service.description}/>
                   )
                })
             }
          </div>
        </div>
    </div>
  )
}

export default Services;