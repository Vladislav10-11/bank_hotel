import { FC } from "react";

interface ICircleButton {
  text: string;
  className?: string;
}

const CircleButton: FC<ICircleButton> = ({ className, text }) => {
  return (
    <button
      style={{
        clipPath:
          "polygon(50% 0, 80% 10%, 99% 34%, 99% 65%, 81% 90%, 50% 100%, 20% 90%, 1% 66%, 0 36%, 19% 10%)",
      }}
      className={` ${className} flex   justify-center items-center focus:outline-none focus:ring focus:ring-blue-300 bg-secondaryColor focus:ring-opacity-50 cursor-pointer`}
    >
      <p className="text-textColor text-lg font-sans italic">{text}</p>
    </button>
  );
};

export default CircleButton;
