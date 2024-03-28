import Link from "next/link"
import Image from "next/image"
import { socialMedia, footerLinks } from "@/constants"
import { copyrightSign } from "@/public/icons"

const Footer = () => {
  return (
    <footer className='max-container'>
      <div className='flex justify-between items-start gap-20 flex-wrap max-lg:flex-col'>
        <div className='flex flex-col items-start'>
        <Link href="./">
          <Image src="images/footer-logo.svg" alt="header logo" width={150} height={46} className="object-contain"/>
        </Link>
        <p className="mt-6 text-white-400 leading-7 font-montserrat sm:max-w-sm">
          Get shoes ready for the new term in your nearest Nike store. Find your perfect size in store. Get rewards
        </p>

        <div className="flex items-center gap-5 mt-8">
          {socialMedia.map((icon)=>(
            <div className="bg-white flex justify-center items-center w-12 h-12 rounded-full">
              <Image src={icon.src} alt={icon.alt} width={24} height={24}/>
            </div>
          ))}
        </div>
        </div>

        <div className="flex flex-1 justify-between lg:gap-10 gap-20 flex-wrap">
            {footerLinks.map((section)=>(
              <div key={section.title}>
                <h4 className="text-white font-montserrat text-2xl leading-normal mb-6">{section.title}</h4>
                <ul>
                  {section.links.map((link)=>(
                    <li key={link.name} className="cursor-pointer text-white mt-2.5 font-montserrat leading-normal hover:text-slate-gray">
                      <Link href="/">
                        {link.name}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
        </div>
      </div>
      <div className="flex justify-between text-white mt-24 max-sm:flex-col max-sm:items-center">
        <div className="flex flex-1 justify-start items-center gap-2 font-montserrat cursor-pointer">
          <Image src={copyrightSign} alt="copyright sign" width={20} height={20} className="rounded-full m-0"/>
          <p>Copyright. All rights reserved</p>
        </div>
          <p className="font-montserrat cursor-pointer">Terms & Conditions</p>
      </div>
    </footer>
  )
}

export default Footer