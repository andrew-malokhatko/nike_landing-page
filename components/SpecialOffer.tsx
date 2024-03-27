import { Button } from "."
import Image from "next/image"
import { offer } from "@/public/images"

const SpecialOffer = () => {
  return (
    <section className="flex flex-row-reverse items-center justify-wrap max-xl:flex-col-reverse gap-10 py-10">
      <div className="flex flex-1 flex-col">
        <h2 className="text-4xl font-palanquin font-bold">
          <span className="text-coral-red">Special</span> Offer
        </h2>
        <p className="mt-6 font-montserrat text-slate-gray">
          Embark on a shopping journey that redefines your experience with
          unbeatable deals. From premier selections to incredible savings, we
          offer unparalleled value that sets us apart.
          quality, innovation, and a touch of elegance.
        </p>
        <p className="lg:max-w-xl mt-6 mb-10 font-montserrat text-slate-gray">
          Navigate a realm of possibilities designed to fulfill your unique
          desires, surpassing the loftiest expectations. Your journey with us is
          nothing short of exceptional.
        </p>

          <div className="flex gap-4 mt-11 flex-wrap">
            <Button label="Shop Now" icon="/icons/arrow-right.svg" sectionLink="#products"/>
            <Button label="Learn More" sectionLink="#info" textColor="text-slate-gray"
              backgroundColor="bg-white" borderColor="border-slate-gray"/>
          </div>
      </div>

      <div className="flex-1">
        <Image src={offer} alt="Offer Images" width={773} height={687} className="object-contain w-full"/>
      </div>

    </section>
  )
} 

export default SpecialOffer