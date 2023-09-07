import { FC } from "react";
import RoundedButton from "../RoundedButton";

const Standart: FC = () => {
  return (
    <section className="bg-primaryColor">
      <div className="container mx-auto flex py-24 ">
        <div className="flex flex-col gap-20 items-start">
          <RoundedButton className="text-white" />
          <p className="text-4xl text-white font-serif">
            All suites have a unique design because we want our every guest to
            feel special.
          </p>
        </div>
        <div className="flex flex-row items-end justify-end">
          <p className="font-sans text-white text-base w-1/3">
            The Superior twin would perfectly match the needs of those who plan
            to stay long. The bright and airy room is equipped with superior
            soft Italian furniture. Large windows open a beautiful view to the
            historical part of the city. Contemporary interior design and
            comfortable beds will make your stay cozy and delightful.
          </p>
        </div>
      </div>
    </section>
  );
};

export default Standart;
