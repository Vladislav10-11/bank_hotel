import Image from "next/image";
import { FC } from "react";
import MainInput from "./MainInput";
import MainButton from "./MainButton";

const GetIn: FC = () => {
  return (
    <section>
      <div className="container mx-auto py-24">
        <div className="flex flex-row">
          <p className="font-sans text-6xl text-textColor underline">
            +38 032 297 50 20
          </p>
        </div>
        <div className="flex flex-row  my-24 gap-20">
          <div className=" justify-center flex flex-row items-center gap-12">
            <h1 className="text-11xl font-serif text-textColor uppercase">
              Get in
            </h1>
            <Image src="/icons/star.svg" width={100} height={100} alt="" />
          </div>
          <div className="flex flex-col items-center justify-center">
            <div className="relative w-[443px] py-16 ">
              <address className="font-sans text-2xl text-textColor mb-10 not-italic">
                8 Lystopadovoho Chynu,Lviv
              </address>
              <Image
                src="/images/getinimg.jpeg"
                height={660}
                width={445}
                alt=""
                className="w-full object-cover"
              />
              <h1 className="text-11xl font-serif text-secondaryColor uppercase absolute bottom-0">
                touch
              </h1>
            </div>
          </div>
        </div>
        <div className="flex">
          <MainInput text="Check In" className="" />
          <MainInput text="Check Out" />
          <MainButton text="Book Room" className="uppercase font-sans  " />
        </div>
      </div>
    </section>
  );
};

export default GetIn;
