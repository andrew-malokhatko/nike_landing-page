import React from 'react'
import Image from 'next/image';

interface PopularProductCardProps{
    imgURL: any;
    name: string;
    price: string;
}

const PopularProductCard = ({imgURL, name, price}: PopularProductCardProps) => {
  return (
    <div className='flex flex-1 flex-col w-full max-sm:w-full'>
        <Image src={imgURL} alt={name} width={280} height={280} />

        <div className="w-[280px] mt-8 flex justify-start gap-2.5">
            <Image src="icons/star.svg" alt="star" width={24} height={24} className='object-contain' />
            <p className='font-montserrat text-xl leading-normal text-slate-gray'>4.5</p>
        </div>
        <h3 className='p-1 font-semibold font-palanquin text-2xl leading-normal'>
            {name}
            <p className='text-coral-red text-base font-montserrat'>{price}</p>
        </h3>
    </div>
  )
}

export default PopularProductCard