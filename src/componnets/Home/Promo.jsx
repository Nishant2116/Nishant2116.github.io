import React, {useRef} from 'react';
import ReactPlayer from 'react-player';
import { useInView } from 'framer-motion';


function Promo() {
    const container = useRef(null);
    const isInView = useInView(container, {once: true})
  return (
    <div ref={container} className='p-[64px] h-[110vh] flex items-center bg-black'>
        <div style={{opacity: isInView ? 1 : 0 , transition: "all 3s cubic-bezier(0.17, 0.55, 0.55, 1) 0.5s"}} className='w-full h-[673px] border-4 border-primary rounded-2xl mt-20'>
            <video className='object-cover rounded-xl h-full w-full' muted autoPlay loop>
                <source src={''} type='video/mp4' />
            </video>
        </div>
    </div>
  )
}

export default Promo