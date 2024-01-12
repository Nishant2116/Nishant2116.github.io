import React from 'react';
import { Links } from '../../constant/navData';
import { motion } from 'framer-motion';


const perspective = {
    initial: {
        opacity: 0,
        rotateX: 90,
        translateY:80,
        translateX:-10
    },
    enter: (i) => ({
        opacity: 1,
        rotateX: 0,
        translateY:0,
        translateX:0,
        transition: {
            duration: 0.65,
            opacity: { duration: 0.35 },
            delay: 0.5 + (i * 0.1)
        }
    }),
    exit: {
        opacity: 0,
        transition:{duration:0.5 , ease: [0.76 , 0 , 0.24 , 1]}
    }
}


function Nav() {
    return (
        <div className='h-full pt-24 pr-10 pb-12 pl-10 box-border'>
            <div className='flex flex-col gap-1'>
                {
                    Links.map((link, i) => {
                        return (
                            <div key={i} style={{ perspective: "120px", perspectiveOrigin: "bottom" }}>
                                <motion.div
                                    custom={i}
                                    variants={perspective}
                                    animate="enter"
                                    exit="exit"
                                    initial="initial">
                                    <a className='text-black text-[46px] font-syne' href={link.href}>{link.title}</a>
                                </motion.div>
                            </div>
                        )
                    })
                }
            </div>
        </div>
    )
}

export default Nav