import React, { useRef } from 'react';
import { motion, useTransform, useScroll } from 'framer-motion';

function AboutMission() {
    const container = useRef(null);
    const { scrollYProgress, scrollY } = useScroll({
        target: container,
        offset: ["start start", "end end"]
    });

    const circle1Position = 4500; // Adjust the position of the first circle
    const circle2Position = 1500; // Adjust the position of the second circle
    const circle3Position = 2000;
    const circle4Position = 2500;

    const circle1Fill = scrollY.get >= circle1Position ? '#6435E3' : 'black';
    const circle2Fill = scrollY >= circle2Position ? '#6435E3' : 'black';
    const circle3Fill = scrollY >= circle3Position ? '#6435E3' : 'black';
    const circle4Fill = scrollY >= circle4Position ? '#6435E3' : 'black';

    console.log(scrollY);
    // Adjust the start and end points of the scrollYProgress range for each path
    const path1Progress = useTransform(scrollYProgress, [0, 0.3], [0, 1]);
    const circleFill1 = useTransform(scrollYProgress, [0, 0.4, 1], ['black', 'black', '#6435E3']);
    const path2Progress = useTransform(scrollYProgress, [0.1, 0.4], [0, 1]);
    const circleFill2 = useTransform(scrollYProgress, [0, 0.7, 1], ['black', 'black', '#6435E3']);
    const path3Progress = useTransform(scrollYProgress, [0, 0.2, 0.4, 0.6, 0.8, 1], ['#CBC9D1', '#CBC9D1', '#CBC9D1', '#CBC9D1', '#CBC9D1', '#CBC9D1']);
    const circleFil3 = useTransform(scrollYProgress, [0, 0.3, 1], ['black', 'black', '#6435E3']);
    const circleFill4 = useTransform(scrollYProgress, [0, 0.1, 1], ['black', 'black', '#6435E3']);
    // Stagger the start times of the paths
    const stagger = 0; // Adjust the stagger time
    const path1Start = 0;
    const path2Start = stagger;

    const circleFill = useTransform(scrollYProgress, [0, 0.2, 0.8, 1], ['black', 'black', 'black', '#6435E3']);
    return (
        <div ref={container} className='h-fit flex justify-center overflow-hidden mt-[100px]'>
            <div className='relative'>
                <svg width="1150" height="1561" viewBox="0 0 1150 1561" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path
                        d="M241 174.737C1183.27 380.395 1306.42 507.527 930 617.237"
                        stroke="#E0DEDF"
                        strokeWidth="3"
                        opacity={0.3}

                    />
                    <path
                        d="M933.5 616.237C50.1506 861.707 -125 940.237 109.5 1018.74"
                        stroke="#E0DEDF"
                        strokeWidth="3"
                        opacity={0.3}

                    />
                    <path
                        d="M842.129 1552.46L859.419 1551.43L849.89 1536.97L842.129 1552.46ZM854.241 1546.27C886.824 1523.58 905.197 1498.85 901.46 1469.33C897.75 1440.01 872.269 1406.62 819.16 1366.4C712.825 1285.87 494.217 1176.83 110.075 1017.35L108.925 1020.12C493.119 1179.62 711.369 1288.53 817.349 1368.79C870.399 1408.97 894.94 1441.7 898.484 1469.7C902.001 1497.5 884.859 1521.29 852.527 1543.81L854.241 1546.27Z"
                    />
                    <motion.path
                        d="M241 174.737C1183.27 380.395 1306.42 507.527 930 617.237"
                        stroke="#CDE648"
                        strokeWidth="3"
                        style={{ pathLength: path1Progress, pathStart: path1Start }}
                    />
                    <motion.path
                        d="M933.5 616.237C50.1506 861.707 -125 940.237 109.5 1018.74"
                        stroke="#CDE648"
                        strokeWidth="3"
                        style={{ pathLength: path2Progress, pathStart: path2Start }}
                    />
                    <motion.path
                        d="M842.129 1552.46L859.419 1551.43L849.89 1536.97L842.129 1552.46ZM854.241 1546.27C886.824 1523.58 905.197 1498.85 901.46 1469.33C897.75 1440.01 872.269 1406.62 819.16 1366.4C712.825 1285.87 494.217 1176.83 110.075 1017.35L108.925 1020.12C493.119 1179.62 711.369 1288.53 817.349 1368.79C870.399 1408.97 894.94 1441.7 898.484 1469.7C902.001 1497.5 884.859 1521.29 852.527 1543.81L854.241 1546.27Z"
                        style={{ fill: path3Progress }}
                    />

                    <motion.circle cx="69.5" cy="1009.5" r="52.5" fill="#6435E3" stroke="#CBC9D1" strokeWidth="20" style={{ fill: circleFill1 }} />
                    <motion.circle cx="666.5" cy="1279.5" r="52.5" fill="#6435E3" stroke="#CBC9D1" strokeWidth="20" style={{ fill: circleFill2 }} />
                    <motion.circle cx="1040.5" cy="555.737" r="52.5" fill="#6435E3" stroke="#CBC9D1" strokeWidth="20" style={{ fill: circleFil3 }} />
                    <motion.circle cx="624.5" cy="262.5" r="52.5" fill="#6435E3" stroke="#CBC9D1" strokeWidth="20" style={{ fill: circleFill4 }} />
                </svg>
                <div className='absolute h-full w-full top-0'>
                    <motion.div  className='relative font-stretch_pro text-white text-[100px] top-24'>02</motion.div>
                    <motion.div className='relative font-syne text-white text-[25px] text-left w-[667px] top-[-100px] left-[53%]'>Expand the wings in the digital sky to emerge as a emblem of excellence in information
                        technology helping firms,individuals ,students,businessmans to climb the ladders of success in the age of vast technology.</motion.div>
                    <motion.div className='relative font-syne text-white text-[25px] text-right w-[667px] top-[150px] left-[23%]'>Expand the wings in the digital sky to emerge as a emblem of excellence in information
                        technology helping firms,individuals ,students,businessmans to climb the ladders of success in the age of vast technology.</motion.div>
                    <motion.div className='relative font-syne text-white text-[25px] text-left w-[817px] top-[430px] left-[15%]'>Serve clients digitaly by providing end to end
                        solution to mitigate their business limitations
                        by means of increasing productivity, scope and achiving goals through providing ability to survive and competate in digital world.</motion.div>
                    <motion.div className='relative font-syne text-white text-[25px] text-right w-[571px] top-[640px]'>Serve clients digitaly by providing end to end
                        solution to mitigate their business limitations
                        by means of increasing productivity, scope and achiving goals through providing ability to survive and competate in digital world.</motion.div>
                </div>
                <div>
                    <h1 className=' font-underated text-[64px] text-white text-right mr-[330px] leading-[60px] mt-[-53px]'>Our <br /> Mission</h1>
                </div>
                <div className='mt-[100px]'>
                    <div className='flex items-center'>
                        <div className='w-[80%] h-1 bg-primary'></div>
                        <div className='text-[100px] w-[25%] text-white font-stretch_pro text-right'>03</div>
                    </div>
                    <div className='mt-[100px] flex '>
                        <div className='w-full flex flex-col items-start'>
                            <h1 className='text-primary text-[64px] font-stretch_pro ml-16'>10+</h1>
                            <p className=' font-underated text-[48px] text-center text-white'>project <br/> finished</p>
                        </div>
                        <div className='w-full flex flex-col items-center'>
                            <h1 className='text-primary text-[64px] font-stretch_pro'>7+</h1>
                            <p className=' font-underated text-[48px] text-center text-white'> happy <br/> clients </p>
                        </div>
                        <div className='w-full flex flex-col items-end'>
                            <h1 className='text-primary text-[64px] font-stretch_pro mr-16'>4.5+</h1>
                            <p className=' font-underated text-[48px] text-center text-white'> excellent <br/>rating</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default AboutMission