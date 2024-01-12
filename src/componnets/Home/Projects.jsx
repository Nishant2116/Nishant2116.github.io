import React, { useState } from 'react';
import { useScroll, motion, useInView, useTransform } from 'framer-motion';
import ProjectCards from '../Cards/ProjectCards';
import { projects } from '../../constant/projectData';
import { useRef } from 'react';
import { point_arrow } from '../../assets';

function Projects() {
    const container = useRef(null);
    const isInView = useInView(container, { once: true })
    const { scrollYProgress } = useScroll({
        target: container,
        offset: ['start end', 'end end']
    })
    const rotate = useTransform(scrollYProgress, [0, 1], [-90, 120]);

    return (
        <div ref={container}className='relative bg-black p-[64px]'>
            <div style={{ transform: isInView ? "none" : "translateY(50px)", opacity: isInView ? 1 : 0, transition: "all 0.9s cubic-bezier(0.17, 0.55, 0.55, 1) 0.2s" }} className='flex'>
                <h1  className='text-white mt-18 font-syne text-[96px] font-semibold'>Our projects</h1>
                <div className='ml-10 h-[50px] w-[80px]'>
                    <motion.img style={{ rotate }} src={point_arrow} className='mt-10' />
                </div>
            </div>
            <div className='mt-4'  style={{ transform: isInView ? "none" : "translateY(50px)", opacity: isInView ? 1 : 0, transition: "all 0.9s cubic-bezier(0.17, 0.55, 0.55, 1) 0.7s" }} >
                {
                    projects.map((project, i) => {
                        const targetScale = 1 - ((projects.length - i) * 0.1);
                        return <ProjectCards key={`p_${i}`} {...project} i={i} {...project} progress={scrollYProgress} range={[i * 0.1, 2]} targetScale={targetScale} color={project.color} src={project.src} vid_src={project.vid_src} />
                    })
                }
            </div>
        </div>
    )
}

export default Projects;