"use client"

import Link from "next/link"
import Image from "next/image"
import { navLinks } from "@/constants"

const Nav = () => {
  return (
    <header className="absolute w-full padding-x py-8 z-20">
      <nav className="flex justify-between items-center">
        <Link href="./">
          <Image src="images/header-logo.svg" alt="header logo" width={130} height={29} className="object-contain"/>
        </Link>

        <ul className="flex-1 flex justify-end items-center gap-16 max-lg:hidden px-6">
          {navLinks.map((link)=>(
            <li key={link.label}>
              <Link href={link.href} className="leading-normal cursor-pointer font-montserrat text-lg text-slate-gray">
                {link.label}
              </Link>
            </li> 
          ))}
        </ul>

          <div className="lg:hidden block">
            <Image src="icons/hamburger.svg" width={25} height={25} alt="Hamburger Menu"/>
          </div>
       </nav>
    </header>
  ) 
}

export default Nav