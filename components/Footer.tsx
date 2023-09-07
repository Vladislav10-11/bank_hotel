import Link from "next/link";
import { FC } from "react";
import InputFileld from "./InputFileld";

const Footer: FC = () => {
  return (
    <footer className="bg-white">
      <hr className="border opacity-70 border-gray-200 mb-24" />
      <div className="container mx-auto pb-24">
        <div className="grid grid-cols-4 gap-48">
          <div className="flex flex-col gap-12">
            <h4 className="font-sans text-textColor text-2xl uppercase">
              <span className="text-secondaryColor">/</span>About us
            </h4>
            <p className="font-sans text-textColor text-lg ">
              The five-star hotel in a beautiful European city with a modern
              restaurant, conference-hall, and art-bar.
            </p>
            <p className="font-sans text-gray-500 text-lg">
              ©2021 All rights reserved. BankHotel
            </p>
          </div>
          <div className="flex flex-col gap-12">
            <h4 className="font-sans text-textColor text-2xl uppercase">
              <span className="text-secondaryColor">/</span>News
            </h4>
            <p className="font-sans text-textColor text-lg ">
              Sign up to our newsletter not to miss exclusive offers and
              information about the upcoming events.
            </p>
            <InputFileld />
          </div>
          <div className="flex flex-col gap-12">
            <h4 className="font-sans text-textColor text-2xl uppercase">
              <span className="text-secondaryColor">/</span>Social
            </h4>
            <div className="flex flex-row gap-12">
              <Link
                href="/"
                className="font-sans text-textColor text-lg font-bold uppercase"
              >
                Facebook
              </Link>
              <Link
                href="/"
                className="font-sans text-textColor text-lg font-bold uppercase"
              >
                Instagram
              </Link>
              <Link
                href="/"
                className="font-sans text-textColor text-lg font-bold uppercase"
              >
                X
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
