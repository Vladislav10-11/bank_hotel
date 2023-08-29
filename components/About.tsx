import Image from "next/image";
import { FC } from "react";
import about from "@/images/aboutimg.jpeg";
import space from "@/images/spaceimg.jpeg";
import RoomsButton from "./RoomsButton";

const About: FC = () => {
  return (
    <section className="bg-primaryColor py-16">
      <div className="container mx-auto flex">
        <div className="flex flex-row items-end justify-start">
          <Image src={about} width={600} height={850} alt="" />
          <div className="flex items-center justify-end flex-col">
            <h2 className="text-yellow-500 text-10xl font-serif uppercase text-right">
              About <p className="font-serif text-white">US</p>
            </h2>
            <div className="flex flex-col items-center justify-center">
              <h3 className="font-serif text-white text-6xl my-9">
                High quality
              </h3>
              <p className="font-sans text-stone-300 w-1/3">
                The five-star Bank Hotel was reopened to visitors in 2016. The
                building was renovated and modernized to meet the expectations
                of the most demanding guests. We offer luxurious rooms, numerous
                facilities, and exceptional service.
              </p>
            </div>
          </div>
        </div>
        <div className="flex flex-col items-start justify-between">
          <Image
            src={space}
            width={315}
            height={415}
            className="w-full"
            alt=""
          />
          <RoomsButton />
        </div>
      </div>
    </section>
  );
};

export default About;
