import Image from "next/image";
import { FC } from "react";
import star from "@/icons/star.svg";

const RoundedButton: FC = () => {
  return (
    <div
      className="flex justify-center items-center py-4 px-12 rounded-full bg-transparent 
    border border-stone-500 text-white gap-6 font-sans text-xl"
    >
      <Image src={star} alt="" />
      Since 1973
    </div>
  );
};

export default RoundedButton;
