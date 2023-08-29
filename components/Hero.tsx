import { FC } from "react";
import RoundedButton from "./RoundedButton";
import DefaultButton from "./DefaultButton";
import Front from "./Front";

const Hero: FC = () => {
  return (
    <section className="bg-primaryColor">
      <div className="container flex flex-col mx-auto">
        <div className=" flex flex-row justify-between gap-64">
          <div className="flex justify-center items-start flex-col">
            <h1 className="font-serif text-11xl  text-white ">
              Bank<span className="text-yellow-500">Hotel</span>
            </h1>
            <p className="text-yellow-500 font-sans uppercase py-6">
              rooms // restaurant // congress hall // wine bar
            </p>
          </div>
          <div className="flex flex-col justify-between items-stretch">
            <div className="flex justify-between">
              <RoundedButton />
              <DefaultButton />
            </div>
            <p className="text-white font-sans w-4/5 my-24 text-base">
              The luxurious hotel in the most beautiful European city with an
              exclusive restaurant, conference-hall, and art-bar.
            </p>
          </div>
        </div>
        <Front />
      </div>
    </section>
  );
};

export default Hero;
