import React from 'react';
import Image from 'next/image';
import Arrow from '../../public/images/arrow.svg'

interface ArrowPoints {
    heading: string 
    description: string
}

const ArrowPoints = (props: ArrowPoints) => {
  return (
    <div className='flex flex-col space-y-2'>
      <div className='flex space-x-2 items-center text-black font-semibold'>
        <Image src={Arrow} alt='Arrow' className='w-[6%] lg:w-[4%]'/>
        <p className='pt-1 lg:pt-[8px] text-[19px] font-semibold'>{props.heading}</p>
      </div>
      <p className='text-lightBlack text-[14px] lg:text-[16px]'>{props.description}</p>
    </div>
  )
}

export default ArrowPoints
