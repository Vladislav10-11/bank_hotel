import Image from "next/image";
import { FC } from "react";
import TwinButton from "./TwinButton";

const Twin: FC = () => {
  return (
    <section>
      <div className="container mx-auto py-24">
        <div className="grid grid-cols-2 gap-64">
          <div className="flex flex-col">
            <div className="relative w-full h-[453px]">
              <Image src="/images/twinimg.jpeg" fill alt="" />
            </div>
            <h3 className="font-serif text-textColor text-3xl my-5">
              Superior twin
            </h3>
            <p className="font-sans text-textColor my-2">
              All rooms in Bank Hotel have a special charm achieved through a
              combination of modern functional design and original 20th century
              layout.
            </p>
          </div>

          <div className="flex flex-col">
            <div className="relative w-full h-[600px]">
              <Image src="/images/superiorimg.jpeg" fill alt="" />
            </div>
            <p className="font-sans text-textColor my-10">
              The Superior twin includes two functional zones: a living room
              with the best Italian furniture, and an isolated cozy bedroom with
              a large bed. Here, you will find space both for work and
              comfortable rest. Hotel offers supreme comfort and outstanding
              24-hour room service to make sure that the time you spend here is
              enjoyable and pleasant.
            </p>
          </div>
        </div>
        <div>
          <TwinButton text="/BookRoom" link="/" />
        </div>
      </div>
    </section>
  );
};

export default Twin;
