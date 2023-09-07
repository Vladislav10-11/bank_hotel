"use client";

import Image from "next/image";
import { FC, useRef, useState } from "react";

const InputFileld: FC = () => {
  const [isActive, setIsActive] = useState(false);
  const inputRef = useRef<HTMLInputElement | null>(null);

  const toggleInputFocus = () => {
    inputRef.current?.focus();
  };
  const handleFocus = () => {
    setIsActive(true);
  };

  const handleBlur = () => {
    setIsActive(false);
  };
  return (
    <div
      className={`flex justify-between items-center ${
        isActive ? "border-primaryColor" : "border-primaryColor opacity-50"
      }
      bg-white p-4 border-2 cursor-pointer`}
      onClick={toggleInputFocus}
    >
      <input
        ref={inputRef}
        className="border-none text-base font-sans text-textColor placeholder-textColor outline-none p-1 h-full"
        onFocus={handleFocus}
        onBlur={handleBlur}
        type="email"
        placeholder="EMAIL"
      />
      <Image src="/icons/arrowhall.svg" width={20} height={10} alt="" />
    </div>
  );
};

export default InputFileld;
