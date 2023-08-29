import Image from "next/image";
import { FC } from "react";
import arrowdown from "@/icons/arrowdown.svg";

interface IMainInput {
  text: string;
  className?: string;
}

const MainInput: FC<IMainInput> = ({ text, className }) => {
  return (
    <div className="flex justify-between bg-primaryColor bg-opacity-60 px-10 items-center gap-32">
      <p className="font-sans text-sm text-white uppercase">{text}</p>
      <Image src={arrowdown} alt="" />
    </div>
  );
};

export default MainInput;
