import React from 'react'

function ServiceCard({icon , title , description}) {
  return (
    <div className='h-[408px] flex flex-col justify-around border border-card_border rounded-xl p-8 hover:border-primary transition-all ease-linear duration-150'>
        <div className='flex w-full items-center'>
            <div className='h-[81px] w-[81px]'><img  src={icon}/></div>
            <div className='ml-10'>
                <h1 className='text-white font-underated text-[24px]'>{title}</h1>
            </div>
        </div>
        <div>
            <span className='text-white text-[24px] font-poppin flex text-start'>
                {description}
            </span>
        </div>
    </div>
  )
}

export default ServiceCard