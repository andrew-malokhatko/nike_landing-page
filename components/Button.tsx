import Image from "next/image";
import Link from "next/link";

interface ButtonProps{
    label: string;
    icon?: string;
    sectionLink: string; 
    backgroundColor?: string;
    textColor?:string;
    borderColor?:string;
}

const Button = ({label, icon, sectionLink, backgroundColor, textColor, borderColor}: ButtonProps) => {
  return (
    <Link href={sectionLink}>
      <button className={`flex justify-center items-center gap-2 px-7 py-4 border font-montserrat
      text-lgtext-center leading-none rounded-full
      
      ${backgroundColor ? `${backgroundColor} ${textColor} ${borderColor}`:
                        `bg-coral-red round text-white border-coral-red`}`}
      >
        
        {label}
        {
          icon && (
            <Image src={icon} alt="button icon" width={20} height={20}/>
          )
        }
        
      </button>
    </Link>
  )
}

export default Button