import Image from "next/image";
import { FC } from "react";
import michael from "@/images/michael.jpeg";
import barman from "@/images/barman.jpeg";

const Facilities: FC = () => {
  return (
    <section className="bg-white">
      <div className="container mx-auto py-72">
        <div className="flex justify-between gap-24">
          <div className="flex flex-col justify-between text-textColor text-2xl font-sans uppercase">
            <p>Art & Congress hall</p>

            <Image src={michael} width={470} height={313} alt="" />
          </div>
          <div className="flex flex-col justify-between ">
            <h2 className="text-textColor text-10xl font-serif uppercase">
              Our faci lities
            </h2>
            <p className="text-textColor text-lg font-sans w-1/3">
              Bank Hotel offers you a wide range of additional services and
              facilities. Visit our restaurant to try exclusive meals, book a
              conference hall to organize a business meeting, or relax in the
              art-bar.
            </p>
          </div>
          <div className="flex flex-col justify-center">
            <Image src={barman} width={470} height={313} alt="" />
          </div>
        </div>
        <div></div>
      </div>
    </section>
  );
};

export default Facilities;
