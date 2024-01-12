import React, {useRef} from 'react';
import Spline from '@splinetool/react-spline';
import { motion, useInView } from 'framer-motion';


function Hero() {
    const ref = useRef(null);
    const isInView = useInView(ref, {once: true})
    return (
        <div className='h-scree w-screen relative overflow-hidden'>
            <div className='h-screen overflow-hidden'>
            <Spline scene="https://prod.spline.design/R2MCTjEgJ30S97Cu/scene.splinecode" />
  );
            
            </div>
            <div
             ref={ref}
             style={{ transform: isInView ? " none": "translateX(200px)", opacity: isInView? 1 : 0 , 
                    transition: "all 0.9s cubic-bezier(0.17, 0.55, 0.55, 1) 0.5s"}}
             className="w-[411px] h-32 absolute bottom-20 right-20 text-right text-xl text-white text-[20px] font-normal font-stretch_pro">
                DRIVEN BY DESIGN <br />EMPOWERED BY <br /> TECHNOOLOGY<br />INNOVATIVE BY NATURE
            </div>
        </div>
    )
}

export default Hero;