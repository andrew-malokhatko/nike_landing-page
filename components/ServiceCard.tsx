import Image from "next/image";

interface ServiceCardProps{
    imgURL: any;
    label: string;
    subtext: string;
}

const ServiceCard = ({imgURL, label, subtext}: ServiceCardProps) => {
  return (
    <div className="flex flex-col flex-1 sm:w-[350px] sm:min-w-[350px] w-full shadow-3xl rounded-2xl px-10 py-10
                    hover:bg-coral-red group transition-all">
        <div className="flex justify-center items-center bg-coral-red rounded-full w-11 h-11 group-hover:bg-black">
            <Image src={imgURL} alt="service card image" width={24} height={24}/>
        </div>

        <h3 className="mt-5 font-palanquin font-bold text-3xl leading-normal">{label}</h3>
        <p className="mt-3 text-slate-gray font-montserrat leading-normal group-hover:text-black">{subtext}</p>
    </div>
  )
}

export default ServiceCard