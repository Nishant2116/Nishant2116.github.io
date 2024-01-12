import React, { useState } from 'react';
import { motion } from 'framer-motion';

function ProcessLabels({title, description, duration}) {
    const [isActive, setIsActive] = useState(false);
    function handleActive() {
        setIsActive(!isActive);
    }

    const divVarients = {
        open: {
            height: 300,
            transition: { duration: 0.75, ease: [0.76, 0, 0.24, 1] }
        },
        closed: {
            height: "104px",
            transition: { duration: 0.75, ease: [0.76, 0, 0.24, 1] }
        }
    }

    const textVarients = {
        initial: {
            opacity: 0,
        },
        enter: {
            opacity: 1,
            transition: {
                delay: 0.45,
                duration: 0.65,
                opacity: { duration: 0.35 },
            }
        },
        exit: {
            opacity: 0,
            transition: { opacity: { duration: 0.35 }, delay: 0.45, duration: 0.65, ease: [0.76, 0, 0.24, 1] }
        }
    }

    const pathVariants = {
        hidden: {
            rotateX: -90
        },
        visible: {
            rotateX: 0,
            transition: {
                ease: "easeInOut"
            }
        }
    }

    return (
        <div className='relative'>
            <motion.div
                onMouseEnter={() => handleActive()}
                onMouseLeave={() => handleActive()}
                variants={divVarients}
                animate={isActive ? "open" : "closed"}
                initial="closed"
                className={`px-8 py-4 bg-second_grey h-[104px] w-[${duration}]`}>
                <div className='flex items-center justify-between'>
                    <h1 className=' font-underated text-[40px] text-black'>{title}</h1>
                    <div className=' ml-20'>
                        <motion.svg
                            width="72" height="72" viewBox="0 0 72 72" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <motion.path
                                variants={pathVariants}
                                animate={isActive ? "hidden" : "visible"}
                                d="M33.4023 17.8764C33.4746 16.513 34.6025 15.4489 35.9679 15.4489C37.4855 15.4489 38.6783 16.7465 38.5569 18.2592C38.1713 23.0664 37.4705 33.0324 37.645 40.1012C37.7483 44.2866 38.2215 50.014 38.5279 53.3909C38.6649 54.9003 37.4789 56.2074 35.9633 56.2074C34.6026 56.2074 33.481 55.1471 33.4177 53.7878C33.1993 49.1022 32.7657 38.6028 32.8789 31.2263C32.9438 26.9916 33.2296 21.1318 33.4023 17.8764Z" fill="#110725" />
                            <motion.path
                                d="M53.7794 33.4025C55.1429 33.4748 56.207 34.6028 56.207 35.9681C56.207 37.4858 54.9094 38.6785 53.3966 38.5572C48.5895 38.1715 38.6235 37.4708 31.5547 37.6452C27.3693 37.7485 21.6419 38.2218 18.265 38.5282C16.7556 38.6651 15.4485 37.4792 15.4485 35.9636C15.4485 34.6028 16.5088 33.4813 17.8681 33.4179C22.5537 33.1996 33.0531 32.766 40.4295 32.8791C44.6643 32.944 50.5241 33.2298 53.7794 33.4025Z" fill="#110725" />
                            <circle cx="35.6637" cy="35.6637" r="33.0341" stroke="#110725" stroke-width="5.25916" />
                        </motion.svg>
                    </div>
                </div>
                {isActive &&
                    <motion.div
                        variants={textVarients}
                        animate="enter"
                        exit="exit"
                        initial="initial"
                        className='w-[90%] flex mt-5 h-[70%]'>
                        <span className='text-[24px] text-justify text-black font-poppin font-semibold leading-[50px]'>
                            {description}
                        </span>
                    </motion.div>
                }
            </motion.div>
        </div>
    )
}

export default ProcessLabels;