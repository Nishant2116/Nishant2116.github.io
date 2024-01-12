import React from 'react'

import TeamCard from '../componnets/Cards/TeamCard';
import { teamData } from '../constant/teamData';
import { AboutSection, AboutHero , Footer, Testimonial, AboutMission } from '../componnets';
import Spline from '@splinetool/react-spline';

function About() {
  return (
    <div className='bg-black'>
      <div className='border border-[#140629]' style={{backgroundColor:"#140629"}}>
        <AboutHero />
      </div>
        <div className='bg-black h-fit p-[64px]'>
          <div className='flex items-center justify-center text-white text-[64px] font-underated gap-7'>
            <h1 className=''> Our team</h1>
            <div className='w-[602px] h-1 bg-primary'></div>
            <span className='font-stretch_pro'>01</span>
          </div>
          <div>
            {
                teamData.map((member, i) => {
                    return(

                          <div>
                            <TeamCard  Name={member.Name} intro={member.intro} instaLink={member.instaLink} linkedIn={member.linkedIn}  role={member.role} />
                          </div>
                    )
                })
            }
          </div>
        </div>
        <AboutSection />
        <AboutMission />
        <Testimonial />
        <div className='w-full p-[64px] mt-[100px]'>
          <div className='w-full h-[1px] bg-second_grey'/>
        </div>
        <div className='bg-black'>
        </div>
    </div>
  )
}

export default About