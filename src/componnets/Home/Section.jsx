import React, {useRef} from 'react'
import Slider from '../Common/Slider'
import Marquee from "react-fast-marquee";
import { logos } from '../../assets/company logos';
import { useInView } from 'framer-motion';


function Section() {

    const ref = useRef(null);
    const isInView = useInView(ref, {once: true})
    
    return (
        <div className='bg-black relative overflow-hidden'>
            <Slider/>
            <div ref={ref} className='mt-[120px]'>
                <span className='text-[148px] flex flex-col text-white font-underated font-extrabold leading-[170px]'>
                    <span style={{transform: isInView ? "none" : "translateY(50px)", opacity:isInView? 1 : 0, transition: "all 0.9s cubic-bezier(0.17, 0.55, 0.55, 1) 0.2s"}}>GOOD</span>
                    <span style={{transform: isInView ? "none" : "translateY(50px)", opacity:isInView? 1 : 0, transition: "all 0.9s cubic-bezier(0.17, 0.55, 0.55, 1) 0.5s"}}>DESIGN</span>
                    <span className=' font-stretch_pro' style={{transform: isInView ? "none" : "translateY(50px)", opacity:isInView? 1 : 0, transition: "all 0.9s cubic-bezier(0.17, 0.55, 0.55, 1) 0.7s"}}>MADEEASY</span>
                </span>
            </div>
            <div className='mt-[100px] h-32  bg-black'>
                <Marquee className='h-full overflow-hidden' loop={0} autoFill={true} direction='right' gradient={true} gradientColor='black'>
                    {logos.map((logo, index) =>{
                        return (
                            <div className>
                                <img key={index} style={{aspectRatio:'3/2', objectFit:'contain', mixBlendMode:'color-burn'}} className='h-32 mx-8'  src={logo}/>
                            </div>
                        )
                    })}
                </Marquee>
            </div>
        </div>
    )
}

export default Section