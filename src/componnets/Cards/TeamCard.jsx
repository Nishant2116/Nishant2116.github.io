import React from 'react';
import Spline from '@splinetool/react-spline';
import Magnetic from '../Common/Magnetic';
import { insta, linkedIn_icon } from '../../assets';

function TeamCard({ Name, intro, instaLink, linkedIn, skills, scene, role }) {
    return (
        <div className=' h-fit bg-black  px-[64px] flex relative mt-[120px]' >
            <div className='w-[55%] flex flex-col relative'>
                <span>
                    <h1 className=' font-underated text-primary text-[44px]'>{Name}</h1>
                    <p className=' font-underated text-[22px] text-primary'>{role}</p>
                </span>
                <p className=' font-syne text-[16px] text-white w-[70%] mt-12'>Meet Ashish, a valued member of our EndlessUX team, contributing as a skilled developer. With a focus on creating seamless digital experiences,
                    Ashish brings a wealth of expertise to the team.
                    His dedication to crafting high-quality solutions and collaborative approach make him an integral part of our project success.
                </p>
                <div className=' gap-4 flex mt-12'>
                    <Magnetic>
                        <div className='h-16 w-16 p-2 flex items-center justify-center rounded-full hover:bg-primary transition-all ease-in-out duration-100'>
                            <img className='h-10 w-10' src={insta} />
                        </div>
                    </Magnetic>
                    <Magnetic>
                        <div className='h-16 w-16 p-2 flex items-center justify-center rounded-full hover:bg-primary transition-all ease-in-out duration-100'>
                            <img className='h-10 w-10' src={linkedIn_icon} />
                        </div>
                    </Magnetic>
                </div>
            </div>
            {( Name === "Ashish Shedage" &&
                <div className='w-[50%] relative flex  justify-end'>
                    <div className='w-[446px] h-[300px] border-[5px] border-primary'></div>
                    <div className='absolute w-[276px] h-[276px] rounded-full bg-primary bottom-0 left-0 flex items-center justify-center'>
                        <div className='w-[230px] h-[230px] rounded-full bg-blue-400 flex items-center justify-center'>
                            <div className='w-[180px] h-[180px] rounded-full bg-purple-500'>

                            </div>
                        </div>
                    </div>
                </div>
            )
            }
            {(
                Name === "Nishant Deshmukh" && 
                <div className='w-[50%]  relative flex  justify-start items-end'>
                    <div className='w-[446px] h-[300px] border-[5px] border-primary'></div>
                    <div className='absolute w-[276px] h-[276px] rounded-full bg-primary top-0 right-0 flex items-center justify-center'>
                        <div className='w-[230px] h-[230px] rounded-full bg-blue-400 flex items-center justify-center'>
                            <div className='w-[180px] h-[180px] rounded-full bg-purple-500'>

                            </div>
                        </div>
                    </div>
                </div>
            )}
            {(
                Name === "Amol Mohite" && 
                <div className='w-[50%]  relative flex  justify-end'>
                    <div className='w-[446px] h-[300px] border-[5px] border-primary'></div>
                    <div className='absolute w-[276px] h-[276px] rounded-full bg-primary bottom-0 left-0 flex items-center justify-center'>
                        <div className='w-[230px] h-[230px] rounded-full bg-blue-400 flex items-center justify-center'>
                            <div className='w-[180px] h-[180px] rounded-full bg-purple-500'>

                            </div>
                        </div>
                    </div>
                </div>
            )}
        </div>
    )
}

export default TeamCard