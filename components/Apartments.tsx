import Image from "next/image";
import { FC } from "react";
import imgsmallapartment from "@/images/apartsment.jpeg";
import arrowforward from "@/icons/arrowforward.svg";
import RoundedButton from "./RoundedButton";
import bed from "@/images/bed.jpeg";
import CircleButton from "./CircleButton";

const Apartments: FC = () => {
  return (
    <section className="bg-white pt-72">
      <div className="container mx-auto">
        <div className="flex flex-row gap-24 ">
          <h2 className="text-10xl font-serif text-textColor uppercase ">
            Rooms & apartments
          </h2>
          <p className="uppercase font-sans text-textColor text-2xl w-1/3">
            All room decoration was made with ecological certified and safe
            materials.
          </p>
        </div>

        <div className="py-56 flex flex-row gap-24">
          <div className="flex flex-col justify-around items-start w-1/3">
            <Image src={imgsmallapartment} width={286} height={429} alt="" />

            <Image src={arrowforward} height={170} width={170} alt="" />
          </div>
          <div className="flex flex-col justify-between items-start w-1/3">
            <RoundedButton className="text-textColor" />

            <div>
              <h3 className="text-3xl font-serif text-textColor mb-10">
                Superior Twin
              </h3>
              <p className="text-base font-sans text-textColor">
                The Superior twin is perfect for those who plan to stay long.
                The spacious and bright room is equipped with deluxe Italian
                furniture and has a beautiful view to the historical part of the
                city. Stylish interior design and comfortable beds will make
                your stay cozy and pleasant.
              </p>
              <div className="flex gap-5 font-sans text-textColor text-1xl mt-12">
                <span>01</span>
                <span>/</span>
                <span>04</span>
              </div>
            </div>
          </div>
          <div className=" relative overflow-hidden w-[760px] h-[1000px]">
            <Image
              src={bed}
              width={1519}
              height={1014}
              className="w-full object-none object-center h-full "
              alt=""
            />
            <CircleButton
              text="Book Room"
              className="absolute bottom-10 right-10"
            />
          </div>
        </div>

        <hr className="border border-gray-500" />
      </div>
    </section>
  );
};

export default Apartments;
