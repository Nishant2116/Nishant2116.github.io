import React from 'react'
import Slider from '../Common/Slider';
import ProcessCard from '../Cards/ProcessCard';
import Character from '../Common/Character';


function Process() {
    const para_1 = "Four weeks of design and development start from the moment you fill up the brief";
    const para_2 = "We have a no-code and no-time-to-lose approach so that you get your page ASAP";
    return (
        <div className=' bg-secondary overflow-hidden relative h-fit'>
            <div className='absolute  bg-black w-screen h-20'></div>
            <div className='relative bg-black top-[160px]'>
                <div className=' -rotate-3 overflow-hidden w-screen absolute opacity-[85%]'>
                    <Slider direction={'left'} />
                </div>
                <div className='rotate-6 w-screen  overflow-hidden mt-[-80px]'>
                    <Slider direction={'right'} />
                </div>
            </div>
            <div className='relative top-[300px] p-[64px]'>
                <div className='text-white flex  justify-start gap-[100px] p-4'>
                    <span className='w-[45%] text-[32px] font-underated text-left'>
                        <Character paragraph={para_1} />
                    </span>
                    <span className='w-[45%] text-[32px] font-underated text-left'>
                        <Character paragraph={para_2} />
                    </span>
                </div>
                <div className=' text-second_grey font-underated text-[170px] px-4 mt-[50px]'>
                    PROCESS
                </div>
            </div>
            <div className='mt-[200px]'>
                <ProcessCard />
            </div>
        </div>
    )
}

export default Process;