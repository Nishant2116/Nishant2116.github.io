import React from 'react';
import LinkButton from '../Common/LinkButton';
import { useTransform, motion, color } from 'framer-motion';



function ProjectCards({ title, description, src, url, i , progress, range, targetScale , color, vid_src}) {
  
    const scale = useTransform(progress, range , [1 , targetScale]);
    
    return (
        <div className='top-0  flex flex-col items-center justify-center' style={{ height: '100vh', position: 'sticky' ,}}>
            <motion.div className='rounded-3xl w-full h-[699px] p-8 flex bg-secondary relative mt-14' style={{ background: `${color}`, top: `calc(-5vh + ${i * 25}px)`, scale}}>
                <div className='h-full w-[70%] flex flex-col p-4 justify-between'>
                    <div className='h-[270px] rounded-2xl'>
                        <img className=' object-fit h-full w-full' src={src} />
                    </div>
                    <div className='text-white font-poppin text-[24px] text-justify'>
                        {description}
                    </div>
                    <div className='flex items-center'>
                        <p className='text-white font-underated text-[84px]'>{title}</p>
                        <LinkButton />
                    </div>
                </div>
                <div className='p-4 w-[30%] flex justify-end'>
                    <div className='border-4 border-primary rounded-md h-full w-[90%]'>
                        <video className='object-cover rounded-sm h-full w-full' muted autoPlay loop>
                            <source src={vid_src} type='video/mp4' />
                        </video>
                    </div>
                </div>
            </motion.div>
        </div>
    )
}

export default ProjectCards