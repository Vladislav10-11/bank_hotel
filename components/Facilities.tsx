import Image from "next/image";
import { FC } from "react";
import michael from "@/images/michael.jpeg";
import barman from "@/images/barman.jpeg";
import iceimg from "@/images/iceimg.jpeg";
import arrowforward from "@/icons/arrowforward.svg";
import FacilitiesCard from "./FacilitiesCard";
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
        <div className="flex flex-row gap-48">
          <div className="flex flex-col justify-center w-1/3">
            <Image src={arrowforward} className="rotate-[90deg]" alt="" />
          </div>
          <div className="flex flex-col justify-around w-1/3">
            <h2 className="text-6xl font-serif text-textColor">01</h2>
            <div>
              <h3 className="text-6xl font-serif text-textColor mb-10">
                Ice Restaurant
              </h3>
              <p className="text-textColor text-lg font-sans text-start items-start">
                The hotel’s exclusive infrastructure is complemented by the
                unique atmosphere of the Safe Restaurant. Author’s menu,
                extensive wine card, and live music will set you for the correct
                mood.
              </p>
            </div>
          </div>
          <div className=" w-[600px] h-[850px]">
            <Image
              src={iceimg}
              width={1284}
              height={849}
              className="object-cover object-left w-full h-full"
              alt=""
            />
          </div>
        </div>
        <div className="flex flex-col gap-16">
          <FacilitiesCard
            image={"/images/conferencehallimg.jpeg"}
            number={"02"}
            title={"conference hall"}
            link={"/"}
          />
          <FacilitiesCard
            image={"/images/winebarimg.jpeg"}
            number={"03"}
            title={"Wine bar “reserve”"}
            link={"/"}
          />
        </div>
      </div>
    </section>
  );
};

export default Facilities;
