import React from 'react';
import { motion } from 'framer-motion';

function MenuButton({isActive , setActive}) {

  return (
    <div onClick={() => {setActive()}} className='h-[40px] w-[100px] absolute top-[21.5px] right-0 rounded-3xl bg-black  cursor-pointer overflow-hidden'>
        <motion.div className='w-full h-full relative'
        animate={{top: isActive ? "-100%" : "0"}}
        transition={{duration: 0.5, ease:[0.76, 0, 0.24 , 1]}}>
        <div className='w-full text-black h-full flex items-center justify-center bg-primary'>
            <PerspectiveText label="Menu" />
        </div>
        <div className='w-full absolute h-full flex bg-black items-center justify-center top-full'>
            <PerspectiveText label="Close" />
        </div>
        </motion.div>
    </div>
  )
}

export default MenuButton;


function PerspectiveText({label}) {
    return (
        <div className='w-full h-full flex flex-col justify-center items-center text-[18px]' style={{transition:'transform 0.75s cubic-bezier(0.76, 0 , 0.24 , 1)', transformStyle:'preserve-3d'}}>
            <p>{label}</p>
        </div>
    )
}