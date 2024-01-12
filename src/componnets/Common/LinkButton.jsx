import React, {useState} from 'react';
import { arro_2, arrow } from '../../assets';
import { motion } from 'framer-motion';
import Magnetic from './Magnetic';

function LinkButton() {
    const [isHovered, setIsHovered] = useState(false);

    function setHovered(flag) {
        setIsHovered(flag);
    }
    const arrow_1 = {
        enter: {
            top: 0,
            right: 0,
            transition: { duration: 0.75, delay: 0.35, ease: [0.76, 0, 0.24, 1] }
        },
        exit: {
            top: 56,
            right: 56,
            transition: { duration: 0.75, ease: [0.76, 0, 0.24, 1] }
        }
    }
    const arrow_2 = {
        enter: {
            top: -56,
            right: -56,
            transition: { duration: 0.55, delay: 0.35, ease: [0.76, 0, 0.24, 1] }
        },
        exit: {
            top: 0,
            right: 0,
            transition: { duration: 0.55, delay: 0.35, ease: [0.76, 0, 0.24, 1] }
        }
    }
  return (
    <Magnetic>
    <motion.div onMouseEnter={() => setHovered(true)} onMouseLeave={() => setHovered(false)} className='rounded-full h-20 w-20 bg-primary ml-5 relative overflow-hidden flex items-center justify-center'>
        <div className='relative h-16 w-16'>
            <motion.img variants={arrow_2} animate={isHovered ? 'enter' : 'exit'} className='absolute h-16 w-16' src={arro_2}></motion.img>
            <motion.img variants={arrow_1} animate={isHovered ? 'enter' : 'exit'} className=' absolute h-16 ' src={arro_2}></motion.img>
        </div>
    </motion.div>
</Magnetic>
  )
}

export default LinkButton