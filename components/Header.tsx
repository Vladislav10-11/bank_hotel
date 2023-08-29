"use client";
import Link from "next/link";
import { FC, use, useState } from "react";
import Image from "next/image";
import menuCloseIcon from "@/icons/menuCloseIcon.svg";
import menuIcon from "@/icons/menuIcon.svg";

const Header: FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen((prev) => !prev);
    isMenuOpen
      ? (document.body.style.overflow = "")
      : (document.body.style.overflow = "hidden");
  };
  const links = [
    {
      name: "Home",
      link: "/",
    },

    {
      name: "About",
      link: "/",
    },
    {
      name: "Rooms",
      link: "/",
    },
    {
      name: "Restaurant",
      link: "/",
    },
    {
      name: "Conference Hall",
      link: "/",
    },
    {
      name: "Contacts",
      link: "/",
    },
  ];

  return (
    <header className=" bg-primaryColor py-7 xl:py-10">
      <div className=" lg:container mx-auto flex flex-wrap justify-between lg:px-8 px-5">
        <Link
          href={"#"}
          className="items-center font-sans text-white lg:text-xl text-base"
        >
          BankHotel
        </Link>
        <button
          className="xl:hidden top-0 right-0 text-white focus:outline-none"
          onClick={toggleMenu}
        >
          <Image src={menuIcon} alt="menu" />
        </button>
        {/* Mobile Menu */}
        <div
          className={`fixed top-0 left-0 right-0 p-5 bottom-0 bg-primaryColor
          bg-fixed z-10 ${isMenuOpen ? "block" : "hidden"}`}
        >
          <nav className="flex flex-col items-start justify-start md:items-center h-full">
            <Link
              href={"#"}
              className="items-center font-sans text-white lg:text-xl text-base"
            >
              BankHotel
            </Link>
            <button
              className="absolute top-5 right-5 text-white focus: outline-none"
              onClick={toggleMenu}
            >
              <Image src={menuCloseIcon} alt="ClouseMenu" />
            </button>
            <ul className="flex mt-24 flex-col gap-6 md:gap-10 text start md:text-center">
              {links.map((item) => (
                <li key={item.name}>
                  <Link
                    className="font-sans text-2xl text-white uppercase
                  hover:text-linkHoverColor duration-500"
                    href={item.link}
                    onClick={toggleMenu}
                  >
                    {item.name}
                  </Link>
                </li>
              ))}
            </ul>
          </nav>
          <div className="absolute bottom-44 left-0 right-0 text-center">
            <Link
              className="underline text-white font-sans mb-5"
              href={`tel: +38 032 297 50 20`}
            >
              +38 032 297 50 20
            </Link>
          </div>
          <p className="absolute bottom-24 left-0 right-0 uppercase text-white text-xl font-sans text-center">
            8 Lystopadovoho Chynu, Lviv
          </p>

          <div className="absolute bottom-8 left-0 right-0 uppercase text-center">
            <ul className="flex gap-8 justify-center text-white font-sans">
              <li>
                <Link className="underline hover:text-linkColor" href="#">
                  Facebook
                </Link>
              </li>
              <li>
                <Link className="underline hover:text-linkColor" href="#">
                  Instagram
                </Link>
              </li>
              <li>
                <Link className="underline hover:text-linkColor" href="#">
                  Twitter
                </Link>
              </li>
            </ul>
          </div>
        </div>
        {/*Desktop Menu*/}
        <nav
          className={` ${
            isMenuOpen ? "block" : "hidden"
          } xl:flex xl:w-auto xl:items-center`}
        >
          <ul
            className="flex flex-col xl:gap-16
          xl:flex-row text-sm items-start xl:pb-0 pb-10"
          >
            {links.map((item) => (
              <li className="xl:mt-0 mt-10" key={item.name}>
                <Link
                  className="block xl:inline-block xl:font-light font-normal font-sans uppercase text-2xl xl:text-sm text-white text-linkHoverCover duration-500"
                  href={item.link}
                  onClick={toggleMenu}
                >
                  {item.name}
                </Link>
              </li>
            ))}
          </ul>
        </nav>
        <div
          className={` ${
            isMenuOpen ? "block" : "hidden"
          } xl:block  items-center font-sans text-white text-base font-light`}
        >
          <Link href={`tel: +38 032 297 50 20`}>+38 032 297 50 20</Link>
        </div>
      </div>
    </header>
  );
};

export default Header;
