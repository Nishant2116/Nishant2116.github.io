import React, {useRef} from 'react';
import { rotate_ele } from '../../assets';
import { motion , useInView } from 'framer-motion';
import Spline from '@splinetool/react-spline';

function AboutHero() {
    const container = useRef(null);
    const isInView = useInView(container , {once: true})
    const borderVariant = {
        initial : {
            width: 0,
            
        },
        enter: {
            width: 328,
            transition : {duration: 0.5, ease:[0.76, 0, 0.24 , 1]}
        }
    }

    const data = [
        {
            srNo: "01",
            title: "who are we"
        },
        {
            srNo: "02",
            title: "our mission"
        },
        {
            srNo: "03",
            title: "Key numbers"
        }
    ]

    return (
        <div ref={container} className='h-screen bg-secondary flex flex-col items-center justify-center relative mt-[100px]'>
            <Spline scene="https://prod.spline.design/pCAtMk9YcgHWLM6T/scene.splinecode" />
            <div className='relartive flex items-center justify-center h-full w-full'>
                <div className='absolute top-0 flex flex-col justify-around h-full w-full p-[64px]'>
                    <div className=''>
                        <div className='px-16 relative'>
                            <h1 className='text-white text-[140px] absolute top-[-110px] font-road_rage'>ABOUT</h1>
                        </div>
                        <div className='relative w-full'>
                            <motion.img className='absolute right-0 top-[-30px]' animate={{ rotate: 360 }} transition={{ ease: 'linear', duration: 6, repeat: Infinity }} src={rotate_ele} />
                        </div>
                    </div>
                    <div className='w-full h-14 flex justify-between mt-[150px] px-16'>
                        {
                            data.map((data, i) => {
                                return (
                                    <motion.div className='w-[328px] flex flex-col items-start justify-between'>
                                        <div className='flex items-center text-white font-poppin text-[27px] gap-4'>
                                            <span>{data.srNo}</span>
                                            <span>{data.title}</span>
                                        </div>
                                        <motion.div variants={borderVariant} animate={isInView ? 'enter' : ''} initial='initial'  className='w-full h-[2px] bg-primary'></motion.div>
                                    </motion.div>
                                )
                            })
                        }
                    </div>
                </div>
            </div>
        </div>
    )
}

export default AboutHero