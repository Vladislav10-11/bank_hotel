import { FC } from "react";
import RoomsButton from "../RoomsButton";
import Image from "next/image";
import CircleButton from "../CircleButton";

const Hero: FC = () => {
  return (
    <section className="">
      <div className="relative w-full h-[900px]">
        <Image src="/images/bed.jpeg" fill alt="" />
        <h1 className="text-9xl absolute top-10 left-10 text-secondaryColor font-serif w-1/4">
          Superior twin
        </h1>
        <p className="absolute bottom-10 left-10 text-2xl text-secondaryColor font-sans uppercase w-1/4">
          All room decoration was made with ecological certified and safe
          materials.
        </p>
        <CircleButton
          text="Book Now"
          className="absolute bottom-10 right-10 h-48 w-48"
        />
      </div>
    </section>
  );
};

export default Hero;
