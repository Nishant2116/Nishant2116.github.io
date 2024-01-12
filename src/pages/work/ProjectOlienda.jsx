import React, { useRef } from 'react';
import { square_img, main, info, baner } from '../../assets/project/Olienda assets';
import { motion, useTransform, useScroll, useSpring } from 'framer-motion';
import { Link } from 'react-router-dom';
import { menu } from '../../assets';
import Marquee from 'react-fast-marquee';

export default function ProjectOlienda() {
  const container = useRef(null);
  const second_container = useRef(null);



  const { scrollYProgress: scrollYProgressContainer1 } = useScroll({
    target: container,
    offset: ['start end', 'end end']
  })

  const { scrollYProgress: scrollYProgressContainer2 } = useScroll({
    target: second_container,
    offset: ['start end', 'end end']
  })



  const div_1 = useSpring(useTransform(scrollYProgressContainer1, [0, 1], [-300, 0]))
  const div_2 = useSpring(useTransform(scrollYProgressContainer1, [0, 1], [-300, 0]))
  const div_3 = useSpring(useTransform(scrollYProgressContainer1, [0, 1], [300, 0]))

  const size_1 = useSpring(useTransform(scrollYProgressContainer2, [0, 1], [0, 930]))


  return (
    <div className='bg-black h-fit border border-black'>
      <div className='h-[729px] mt-[200px]'>
        <img className=' object-cover h-full w-full' src={main} />
      </div>
      <div className='px-[64px]'>
        <div className='w-full flex gap-8 mt-14'>
          <div className='w-1/2'>
            <div className='bg-[#171717]'>
              <div className='p-4'><h1 className=' font-underated text-[36px] text-white'>Olienda</h1></div>
              <div className='flex w-full p-4 bg-[#222222]'>
                <span className='w-1/2 flex flex-col gap-2'>
                  <h2 className='text-white font-syne text-[24px]'>Project type</h2>
                  <p className='text-[#ADADAD] font-poppin text-[16px]'>Web Application Development</p>
                </span>
                <span className='flex flex-col gap-2'>
                  <h2 className='text-white font-syne text-[24px]'>Date</h2>
                  <p className='text-[#ADADAD] font-poppin text-[16px]'>May(2023) </p>
                </span>
              </div>
            </div>
          </div>
          <div className='w-1/2'>
            <p className=' font-poppin text-[#ADADAD] text-justify'>
              A Punjab-based singer-songwriter who found fame in India’s pop scene by mixing modern electronic, hip-hop and traditional Punjabi instrumentation and vocals. Buttar’s song ‘Sakhiyan’ was a huge hit with 589M+ views on YouTube.
              Buttar’s song ‘Sakhiyan’ was a huge hit with 589M+ views on YouTube. Being a huge fan of animals and a dog parent, Buttar wanted a Logo that inculcated his two dogs - Jugni and Laddo. On the other hand, he desired to include some design elements to convey his love for music.
              We came up with a smart and elegant solution for Buttar. We created a concept representing his two dogs and incorporated a mic and the letter ‘M’ that illustrated his love for animals and music alongside his initials. The Logo conveyed every bit of the message he wanted along with his initials - a win-win situation for everyone. He loved the idea and we finalised the design with Brandeis Blue as the primary colour for brand identity.
              The Logo conveyed every bit of the message he wanted along with his initials - a win-win situation for everyone. He loved the idea and we finalised the design with Brandeis Blue as the primary colour for brand identity.
            </p>
          </div>
        </div>
        <div className=' flex items-center justify-center w-full mt-[100px]'>
          <div className='flex flex-col gap-12  w-full'>
            <div className=' flex gap-12'>
              <img className='h-[322px] w-3/4' src={square_img[0]} />
              <img className='h-[322px] w-1/2' src={square_img[1]} />
            </div>
            <div className='flex gap-6'>
              <img className='h-[608px] w-6/12' src={square_img[2]} />
              <img className='h-[608px] w-3/5' src={square_img[3]} />
            </div>
          </div>
        </div>
        <div className='h-[10vh] left-[-65px] bg-white w-screen flex items-center justify-center relative mt-[100px]'>
          <Marquee className='absolute left-0' loop={0} autoFill={true} direction='right'>
            <h1 className=' font-poppin text-[36px]'>#With<span className=' font-poppin font-semibold'>Olienda</span> 🧡</h1>
          </Marquee>
        </div>
        <div className='h-[930px] flex gap-6 mt-[100px]'>
          <div className='w-full flex flex-col gap-8'>
            <div ref={container} className='h-[600px] flex flex-col'>
              <div className='w-full h-full flex'>
                <div className='h-full w-full  relative'>
                  <motion.div className='absolute bg-[#FF9F0D] w-full h-full p-5 flex flex-col justify-between z-30'>
                    <h1 className=' font-poppin text-[24px] text-white font-semibold'>Brunette</h1>
                    <span className=' font-poppin text-[16px] text-white'>
                      <p className=' font-semibold'>RGB - <span className=' font-normal'>255 159 13</span></p>
                      <p className=' font-semibold'>HEX - <span className=' font-normal'>FF9F0D</span></p>
                      <p className=' font-semibold'>CMYK - <span className=' font-normal'>0 37 94 0</span></p>
                    </span>
                  </motion.div>
                </div>
                <div className='h-full w-full relative'>
                  <motion.div style={{ x: div_1 }} className='w-full h-full bg-black border border-[#3D3D3D] absolute z-10 p-5 flex flex-col justify-between'>
                    <h1 className=' font-poppin text-[24px] text-white font-semibold'>Black</h1>
                    <span className=' font-poppin text-[16px] text-white'>
                      <p className=' font-semibold'>RGB - <span className=' font-normal'>0 0 0</span></p>
                      <p className=' font-semibold'>HEX - <span className=' font-normal'>000000</span></p>
                      <p className=' font-semibold'>CMYK - <span className=' font-normal'>0 0 0 100</span></p>
                    </span>
                  </motion.div>
                </div>
              </div>
              <div className='w-full h-full flex'>
                <div className='w-full h-full  relative'>
                  <motion.div style={{ x: div_3 }} className='absolute bg-[#3D3D3D] w-full h-full p-5 flex flex-col justify-between z-0'>
                    <h1 className=' font-poppin text-[24px] text-white font-semibold'>Pigment Green</h1>
                    <span className=' font-poppin text-[16px] text-white'>
                      <p className=' font-semibold'>RGB - <span className=' font-normal'>30 30 30</span></p>
                      <p className=' font-semibold'>HEX - <span className=' font-normal'>1E1E1E</span></p>
                      <p className=' font-semibold'>CMYK - <span className=' font-normal'>0 0 0 88</span></p>
                    </span>
                  </motion.div>
                </div>
                <div className='w-full h-full  relative'>
                  <motion.div style={{ y: div_2 }} className='absolute bg-white w-full h-full p-5 flex flex-col justify-between z-10 text-black'>
                    <h1 className=' font-poppin text-[24px]  font-semibold'>White</h1>
                    <span className=' font-poppin text-[16px] '>
                      <p className=' font-semibold'>RGB - <span className=' font-normal'>255 255 255</span></p>
                      <p className=' font-semibold'>HEX - <span className=' font-normal'>FFFFFF</span></p>
                      <p className=' font-semibold'>CMYK - <span className=' font-normal'>0 0 0 0</span></p>
                    </span>
                  </motion.div>
                </div>
              </div>
            </div>
            <div className='h-[300px] w-full bg-white flex flex-col justify-center items-center p-4'>
              <div className='h-full w-full flex items-center justify-center text-[45px] font-poppin'><h1>Poppin Family</h1></div>
              <div className='h-full w-full flex items-center justify-center font-poppin px-6'>
                <h1 className='text-[110px] w-[30%] text-center '>Aa</h1>
                <p className='text-center text-[20px] w-[80%] '>ABCDEFGHIJKLMNOPORSTUVWXYZ ABCdefghijklmnopqrstuvwxyz
                  1234567890!@#$%^§*</p>
              </div>
            </div>
          </div>
          <div ref={second_container} className='h-full w-full bg-[#FF9F0D] flex justify-center'>
            <motion.img style={{ height: size_1 }} src={baner} className=' object-contain h-[95%]' />
          </div>
        </div>
        <div className='mt-[120px]'>
          <img src={info} />
        </div>
        <div className='mt-[200px] mb-[100px]'>
          <div className='w-full h-[1px] bg-white'></div>
          <div className='w-full flex items-center justify-between mt-4 '>
            <Link to='/project/Biosense' className='w-full'>
              <div className='relative w-full px-8 flex flex-col items-start justify-center'>
                <h2 className=' font-poppin text-[16px] text-[#ADADAD] ml-5'>Previous</h2>
                <svg className='absolute z-20 left-0 ' width="19" height="19" viewBox="0 0 19 19" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M11.8752 15.7705L6.71354 10.6088C6.10395 9.99922 6.10395 9.00172 6.71354 8.39214L11.8752 3.23047" stroke="white" stroke-width="1.1875" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round" />
                </svg>
                <h1 className=' font-poppin text-[16px] text-white mt-2 ml-5'>Biosense</h1>
              </div>
            </Link>
            <Link to='/projects' className='w-full'>
              <div className='flex items-center justify-center w-full '>
                <img src={menu} />
              </div>
            </Link>
            <Link to='/projects' className='w-full'>
              <div className='relative w-full  px-8 flex flex-col items-end justify-center'>
                <h2 className=' font-poppin text-[16px] text-[#ADADAD] mr-5'>Next</h2>
                <svg className='absolute z-20 right-0 rotate-180' width="19" height="19" viewBox="0 0 19 19" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M11.8752 15.7705L6.71354 10.6088C6.10395 9.99922 6.10395 9.00172 6.71354 8.39214L11.8752 3.23047" stroke="white" stroke-width="1.1875" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round" />
                </svg>
                <h1 className=' font-poppin text-[16px] text-white mt-2 mr-5'>Apexion Photography</h1>
              </div>
            </Link>
          </div>
        </div>
      </div>
    </div>
  )

}