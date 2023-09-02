import Image from "next/image";
import Link from "next/link";
import { FC } from "react";

interface IFacilitiesCard {
  image: string;
  number: string;
  title: string;
  link: string;
}

const FacilitiesCard: FC<IFacilitiesCard> = ({
  image,
  number,
  title,
  link,
}) => {
  return (
    <Link href={link} className="flex justify-between">
      <div className="w-[284px] h-[284px] flex ">
        <Image
          src={image}
          alt=""
          className="object-none"
          width={346}
          height={511}
        />
      </div>
      <div className="flex gap-24 items-center justify-center">
        <p className="font-serif text-6xl text-textColor">{number}</p>
        <p className="font-serif text-6xl text-textColor">{title}</p>
      </div>
      <div className="flex items-center justify-center">
        <Image src="/icons/arrowhall.svg" alt="" height={20} width={40} />
      </div>
    </Link>
  );
};

export default FacilitiesCard;
