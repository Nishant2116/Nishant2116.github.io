import React, { useEffect, useRef } from 'react';
import { gsap } from 'gsap';

import ScrollTrigger from 'gsap/dist/ScrollTrigger';
import ProcessLabels from './ProcessLabels';

gsap.registerPlugin(ScrollTrigger);

function ProcessCard() {
  const sectionRef = useRef(null);
  const triggerRef = useRef(null);

  useEffect(() => {
    const pin = gsap.fromTo(
      sectionRef.current,
      {
        translateX: 0,
      },
      {
        translateX: "-209vw",
        ease: "none",
        duration: 1,
        scrollTrigger: {
          trigger: triggerRef.current,
          start: "top top",
          end: "2000 top",
          scrub: 0.6,
          pin: true,
        },
      }
    );
    return () => {
      {/* A return function for killing the animation on component unmount */ }
      pin.kill();
    };
  }, []);

  return (
    <section className=" overflow-hidden bg-secondary relative px-[64px]">
      {/* The section up act just as a wrapper. If the trigger (below) is the
          first jsx element in the component, you get an error on route change */}

      {/* The div below act just as a trigger. As the doc suggests, the trigger and 
          the animation should alway be two separated refs */}

      <div ref={triggerRef} className='text-white'>
        <div ref={sectionRef} className="flex flex-row h-[100vh] relative w-[400vw] border-t-2">
          <div className="w-[100vw] flex flex-col">
            <div className='mt-5 font-stretch_pro text-2xl flex justify-between'>
              <span>WEEK 1</span>
              <span>WEEK 2</span>
            </div>
            <div className='flex w-full relative mt-3'>
              <div className='flex absolute z-10 w-full'>
                <div className='w-[40%]'>
                  <ProcessLabels
                    title={"CONCEPTING"}
                    description={"We are looking for visuals and metaphors. Creating two concepts of page so you can choose"}
                    duration={'651px'}
                  />
                </div>
                <div className='ml-12 w-[80%]'>
                  <ProcessLabels
                    title={"DESIGN"}
                    description={"We are looking for visuals and metaphors. Creating two concepts of page so you can choose"}
                    duration={'720px'}
                  />
                </div>
              </div>
            </div>
            <div>
              <div className='mt-[150px] ml-12 flex w-full relative' >
                <div className='absolute w-[300vw] flex'>
                  <div className='w-[20%]'>
                    <ProcessLabels
                      title={"CONTENT CREATION"}
                      description={"We are looking for visuals and metaphors. Creating two concepts of page so you can choose"}
                      duration={'850px'}
                    />
                  </div>
                  <div className='ml-12 w-[78%]'>
                    <ProcessLabels
                      title={"DEVELOPMENT"}
                      description={"We are looking for visuals and metaphors. Creating two concepts of page so you can choose"}
                      duration={'1000px'}
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="w-[100vw] flex flex-col">
            <div className='mt-5 ml-10 font-stretch_pro text-2xl flex justify-end items-end'>
              <span>WEEK 3</span>
            </div>
          </div>
          <div className="w-[100vw] flex flex-col">
            <div className='mt-5 ml-10 font-stretch_pro text-2xl flex justify-end items-end'>
              <span>WEEK 4</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default ProcessCard;