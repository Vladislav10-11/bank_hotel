import Image from "next/image";
import { FC } from "react";
import defaultbutton from "@/icons/buttondefault.svg";

const DefaultButton: FC = () => {
  return (
    <div>
      <Image src={defaultbutton} alt="" />
    </div>
  );
};

export default DefaultButton;
