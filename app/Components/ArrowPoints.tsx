import React from 'react';
import Image from 'next/image';
import Arrow from '../../public/images/arrow.png'

interface ArrowPoints {
    heading: string 
    description: string
}

const ArrowPoints = (props: ArrowPoints) => {
  return (
    <div className='flex flex-col space-y-2'>
      <div className='flex space-x-2 items-center text-spickyBlue font-semibold'>
        <Image src={Arrow} alt='Arrow' className='w-[6%] lg:w-[3%]'/>
        <p className='pt-1 lg:pt-[2px] text-[19px] font-semibold'>{props.heading}</p>
      </div>
      <p className='text-darkGray text-[14px] lg:text-[16px]'>{props.description}</p>
    </div>
  )
}

export default ArrowPoints
