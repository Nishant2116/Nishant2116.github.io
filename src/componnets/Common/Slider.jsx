import React, { useEffect, useRef } from 'react'
import Marquee from "react-fast-marquee";

function Slider({direction}) {
    return (
        <div className='w-[200vh] h-20 bg-primary relative'>
            <Marquee className='h-full gap-3' loop={0} autoFill={true} direction={direction}>
                <span className='text-[20px] flex gap-4 font-poppin font-bold'>
                    <span>·</span>
                    <span> BRANDING </span>
                    <span> · </span>
                    <span> LOGO DESIGN </span>
                    <span>  · </span>
                    <span> SOCIAL MEDIA </span>
                    <span></span>
                </span>
            </Marquee>
        </div>
    )
}

export default Slider