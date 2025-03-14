'use client'

import React from 'react'
import { StaticImageData } from "next/image"
import Image  from 'next/image'

interface Ideal {
    image: StaticImageData
    idealItem: string 
    reason: string 
}


const Ideal = (props: Ideal) => {
  return (
    <div className='flex flex-col space-y-5 lg:w-[30%]'>
      <Image src={props.image} alt='IdealImage' className='w-[20%]'/>
      <p className='font-bold text-2xl lg:text-[17px] text-spickyBlue'>{props.idealItem}</p>
      <p className='lg:w-[90%] text-[15px] leading-5 tracking-normal text-darkGray'>{props.reason}</p>
    </div>
  )
}

export default Ideal

