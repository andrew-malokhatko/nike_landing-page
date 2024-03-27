"use client"

import { useState } from "react"
import { Button, ShoeCard } from "."
import { statistics, shoes } from "@/constants"
import Image from "next/image"
import { bigShoe1, bigShoe2, bigShoe3 } from "@/public/images"

const Hero = () => {
  const [bigShoeImg, setbigShoeImg] = useState(bigShoe1);

  return (
    <section className="flex xl:flex-row flex-col justify-center min-h-screen max-container w-full">
      <div className="relative xl:w-2/5 flex flex-col justify-center items-start w-full max-xl:padding-x pt-24">
        <p className="text-xl font-montserrat text-coral-red">Our Summer Collections</p>
        <h1 className="mt-10 font-palanquin text-8xl max-sm:text-[55px] max-sm:leading-[82px] font-bold">
          <span className="z-10 pr-10 relative xl:whitespace-nowrap bg-white">
            The New Arrival
          </span>
          <br />
          <span className="text-coral-red inline-block mt-3">Nike</span> Shoes
        </h1>
        <p className="font-montserrat text-slate-gray text-lg leading-8 mt-6 mb-14 max-sm:max-w-sm">
          Discover stylish Nike arrivals, quality comfort and innovationfoir your active life</p>
        <Button sectionLink="#products" label="Show Now" icon="icons/arrow-right.svg"/>
        <div className="flex justify-start items-start flex-col sm:flex-row w-full my-20 gap-8 flex-wrap p-2">
          {statistics.map((item)=>(
            <div className="max-sm:w-full flex flex-1 flex-col items-center rounded-lg shadow-3xl shadow-slate-300 px-5" key={item.label}>
              <p className="text-4xl font-palanquin font-bold">{item.value}</p>
              <p className="leading-7 font-montserrat text-slate-gray">{item.label}</p>
            </div>
          ))}
        </div>
      </div>

      <div className="relative flex-1 flex justify-center items-center xl:min-h-screen max-xl:py-40 bg-primary bg-hero bg-cover bg-center">
        <Image src={bigShoeImg} alt="big shoe 1" width={610} height={500} className="object-contain relative z-10"></Image>
      

        <div className="flex absolute sm:gap-6 gap-4 -bottom-[5%] max-sm:px-6">
          {shoes.map((image, index)=>(
            <div key={index}>
              <ShoeCard imgurl={image} changeBigShoeImage={(shoe)=>{setbigShoeImg(shoe)}} bigShoeImg={bigShoeImg}/>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Hero