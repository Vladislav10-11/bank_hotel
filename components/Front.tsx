import Image from "next/image";
import { FC } from "react";
import MainButton from "./MainButton";
import MainInput from "./MainInput";
import Link from "next/link";

const Front: FC = () => {
  return (
    <div>
      <div className="relative overflow-hidden text-center ">
        <div className="absolute top-0 right-0 bottom-auto flex flex-row ">
          <MainInput text="Check In" className="" />
          <MainInput text="Check Out" />
          <MainButton text="Book Room" className="uppercase font-sans  " />
        </div>
        <Image
          src="/images/homeimage.jpeg"
          width={1860}
          height={1241}
          className="h-[31rem] xl:h-[44rem] 2x:h-[50rem] object-cover w-full object-center"
          alt=""
        />
      </div>
      <div className="flex flex-row justify-between my-16">
        <div className="flex flex-col uppercase font-sans text-2xl text-white underline">
          <Link href="#" className="text-secondaryColor">
            +38 032 297 50 20
          </Link>
          <address className="not-italic ">8 Lystopadovoho Chynu,Lviv</address>
        </div>
        <div className="flex flex-col text-white font-sans uppercase text-2xl">
          <p className="">Art & Congress</p>
          <p>Hall</p>
        </div>
      </div>
    </div>
  );
};

export default Front;
