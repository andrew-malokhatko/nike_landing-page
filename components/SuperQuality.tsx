import Image from "next/image"
import { Button } from "."

const SuperQuality = () => {
  return (
    <section id="about-us"
    className="flex justify-between items-center max-lg:flex-col w-full max-container">
    <div className="flex flex-1 flex-col">
      <h2 className="text-4xl font-palanquin font-bold">
          We Provide You <span className="text-orange-500">Super Quality</span> Shoes
        </h2>
        <p className="lg:max-w-xl mt-6 font-montserrat text-slate-gray">
          Experience top-notch quality and style with our sought-after selections.
          Ensuring premium comfort and style, our meticulously crafted footwear
          is designed to elevate your experience, providing you with unmatched
          quality, innovation, and a touch of elegance.</p>
          <p className="lg:max-w-xl mt-6 mb-10 font-montserrat text-slate-gray">
          Our dedication to detail and excellence ensures your satisfaction
          </p>

          <Button label="View Details" sectionLink="#home"/>
      </div>

      <div className="relative flex flex-1 justify-center items-center">
        <Image src="/images/shoe8.svg" alt ="Super quality shoe" width={570} height={570} className="object-contain"/>
      </div>
    </section>
  )
}

export default SuperQuality