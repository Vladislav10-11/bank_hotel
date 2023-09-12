import { FC } from "react";
import RoundedButton from "../RoundedButton";
import Image from "next/image";

const Standart: FC = () => {
  return (
    <section className="bg-primaryColor overflow-x-hidden">
      <div className="container mx-auto py-24 ">
        <div className="flex">
          <div className="flex flex-col gap-20 items-start">
            <RoundedButton className="text-white" />
            <p className="text-4xl text-white font-serif">
              All suites have a unique design because we want our every guest to
              feel special.
            </p>
          </div>
          <div className="flex flex-row items-end justify-end">
            <p className="font-sans text-white text-base w-1/3">
              The Superior twin would perfectly match the needs of those who
              plan to stay long. The bright and airy room is equipped with
              superior soft Italian furniture. Large windows open a beautiful
              view to the historical part of the city. Contemporary interior
              design and comfortable beds will make your stay cozy and
              delightful.
            </p>
          </div>
        </div>
        <div className="flex mt-28 flex-col">
          <div>
            <p className="text-secondaryColor font-sans text-3xl mb-16">
              Premier Standard
            </p>
          </div>
          <div className="relative h-[900px] w-full">
            <Image
              src="/images/standartimg.jpeg"
              className="object-contain"
              fill
              alt=""
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Standart;
