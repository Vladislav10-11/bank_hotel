import Image from "next/image";
import Link from "next/link";
import { FC } from "react";
import rooms from "@/icons/buttonrooms.svg";

const RoomsButton: FC = () => {
  return (
    <Link href="#">
      <Image className="w-full" src={rooms} alt="" />
    </Link>
  );
};

export default RoomsButton;
