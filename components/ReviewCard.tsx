import Image from "next/image";

interface ReviewCardProps{
    imgURL: any;
    customerName: string;
    rating: number;
    feedback: string;
}

const ReviewCard = ({imgURL, customerName, rating, feedback}: ReviewCardProps) => {
  return (
    <div className='flex flex-col justify-center items-center flex-1'>
        <h3 className="text-center font-bold text-2xl font-palanquin">
            {customerName}
        </h3>
        <Image src={imgURL} alt={`${customerName} review`} className="m-4 object-contain max-w-24 rounded-full w-full" width={50} height={50}/>
        <p className="font-montserrat text-slate-gray text-center max-w-sm">
            {feedback}
        </p>

        <div className="flex justify-start gap-1">
            <Image src="icons/star.svg" alt="star" width={24} height={24} className='object-contain' />
            <p className='font-montserrat leading-normal text-slate-gray text-lg'>({rating})</p>
        </div>
    </div>
  )
}

export default ReviewCard