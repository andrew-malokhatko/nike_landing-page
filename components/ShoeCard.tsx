import { StaticImageData } from "next/image";
import React from 'react'
import Image from "next/image"

interface ShoeProps {
    thumbnail: any,
    bigShoe: StaticImageData,
}

interface ShoeCardProps {
    imgurl: ShoeProps;
    changeBigShoeImage: React.Dispatch<React.SetStateAction<StaticImageData>>;
    bigShoeImg: any;
}

const ShoeCard = ({ imgurl, changeBigShoeImage, bigShoeImg }: ShoeCardProps) => {
    const handleClick = () => {
        if (imgurl.bigShoe != bigShoeImg){
            changeBigShoeImage(imgurl.bigShoe);
        }
    }

    return (
        <div className={`relative border-2 rounded-xl cursor-pointer max-sm:flex-1
            ${bigShoeImg === imgurl.bigShoe ? 'border-coral-red' : 'border-transparent'}`}
            onClick={handleClick}>
            <div className="flex justify-center items-center rounded-xl bg-card bg-center bg-cover sm:w-40 sm:h-40 max-sm:p-4">
                <Image src={imgurl.thumbnail} alt="big thumbnail shoe"
                    width={127} height={103} className="object-contain" />
            </div>
        </div>
    )
}

export default ShoeCard;