import React from 'react';
import { Navbar, Footer } from '../componnets';
import { skin_bg, skin_logo, esti_bg, esti_logo, green_bg, green_logo, photo_bg, photo_logo, coffe_bg, coffe_logo, brain_bg, brain_logo } from '../assets/project pages';
import ThumbnailCard from '../componnets/Cards/ThumbnailCard';


function Project() {
    return (
        <div className='bg-black h-fit overflow-hidden'>
            <div className='px-[64px]  mt-[200px]'>
                <div className='flex justify-center items-center'>
                    <span className='relative  w-full flex items-center justify-center'>
                        <h1 className='absolute z-10 font-syne text-[64px] text-white'>Explore the projects</h1>
                        <svg className='relative top-8 right-[-100px]' width="442" height="45" viewBox="0 0 442 45" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M412.747 3.32213C435.692 -6.63061 187.013 17.197 17.7468 40.8223C-10.1444 44.7152 1.75986 42.4121 17.7467 43.3226C27.1365 43.8574 36.2467 45.3227 40.7467 43.3226C45.2466 41.3226 355.155 9.19943 412.747 21.3222C470.339 33.445 422.747 7.32217 419.247 6.32217C415.747 5.32217 389.802 13.2749 412.747 3.32213Z" fill="#CDE648" stroke="#CDE648" />
                        </svg>
                    </span>
                </div>
                <div className='h-fit flex mt-[80px] gap-4'>
                    <div className='w-full flex flex-col gap-4'>
                        <ThumbnailCard bg_image={skin_bg} logo={skin_logo} logo_h={'83'} logo_w={'201'} hight={'677'} link={'Biosens'}/>
                        <ThumbnailCard bg_image={coffe_bg} logo={coffe_logo} logo_h={'117'} logo_w={'117'} hight={'543'} link={'Olienda'}/>
                    </div>
                    <div className='w-full flex flex-col gap-4'>
                        <ThumbnailCard bg_image={esti_bg} logo={esti_logo} logo_h={'107'} logo_w={'122'} hight={'364'} link={'Estisource'}/>
                        <ThumbnailCard bg_image={green_bg} logo={green_logo} logo_h={'149'} logo_w={'18'} hight={'860'} link={'Morehealthcare'} />
                    </div>
                    <div className='w-full flex flex-col gap-4'>
                        <ThumbnailCard bg_image={photo_bg} logo={photo_logo} logo_h={'87'} logo_w={'100'} hight={'677'} />
                        <ThumbnailCard bg_image={brain_bg} hight={'543'} title={'Braincheck'} description={'We are a team of engineering students specializing in machine learning and deep learning. Our focus is on developing projects that make a positive impact on the community. Our work ranges from creating predictive models for healthcare to image recognition systems for security purposes'} />
                    </div>
                </div>
            </div>
            <div className='w-full p-[64px] mt-[100px]'>
                <div className='w-full h-[1px] bg-second_grey' />
            </div>
        </div>
    )
}

export default Project