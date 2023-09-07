import Image from "next/image";
import Link from "next/link";
import { FC } from "react";
import rooms from "@/icons/buttonrooms.svg";

interface IRoomsButton {
  className?: string;
}

const RoomsButton: FC<IRoomsButton> = ({ className }) => {
  return (
    <Link href="#" className={`${className}`}>
      <Image className="w-full" src={rooms} alt="" />
    </Link>
  );
};

export default RoomsButton;
