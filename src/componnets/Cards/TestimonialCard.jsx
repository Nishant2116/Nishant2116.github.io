import React from 'react';
import Marquee from 'react-fast-marquee';

function TestimonialCard() {
    return (
        <Marquee className='overflow-hidden relative bg-black' pauseOnHover loop={0} autoFill={true} direction='right' gradient={true} gradientColor='black'>
            <div className='ml-20'>
                <div className='h-[469px] w-[544px] border-2 rounded-2xl text-white border-primary p-8 px-12 flex flex-col items-center justify-evenly'>
                    <div className='flex items-center h-fit  w-full'>
                        <div className='rounded-full h-[138px] w-[138px] border'><img className='' /></div>
                        <div className='text-[24px] flex flex-col ml-10'>
                            <span className=' font-underated'>Sandip Jadhav</span>
                            <span className=' font-syne'>founder,Estisource</span>
                        </div>
                    </div>
                    <div>
                        <span className='text-[24px] font-syne'>
                            Serve clients digitaly by providing end to end solution to mitigate
                            their business limitations by means of increasing productivity,
                            scope and achiving goals.
                        </span>
                    </div>
                </div>
            </div>
        </Marquee>
    )
}

export default TestimonialCard