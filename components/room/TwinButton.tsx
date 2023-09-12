import { link } from "fs";
import Link from "next/link";
import { FC } from "react";

interface ITwinButton {
  className?: string;
  text: string;
  link: string;
}

const TwinButton: FC<ITwinButton> = ({ className, text, link }) => {
  return (
    <Link
      href={link}
      className={`${className} px-12 py-6 border border-primaryColor border-opacity-25 rounded-full text-textColor font-sans uppercase`}
    >
      {text}
    </Link>
  );
};

export default TwinButton;
