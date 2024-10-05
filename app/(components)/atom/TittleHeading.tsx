import Image from "next/image";
import line from "../../assets/image/Deco-line.png";
import React from "react";
type Nameprops = {
  firstName: string;
  lastName: string;
};
export default function TittleHeading({ firstName, lastName }: Nameprops) {
  return (
    <div className="text-center">
      <Image
        src={line}
        className="w-[18%] sm:w-[10%] lg:w-[5%] mx-auto"
        alt="UniqueTech"
      />
      <p className="lg:text-[35px] sm:text-[30px] text-[20px] font-normal">
        {firstName}
      </p>
      <h3 className="lg:text-[35px] sm:text-[30px] text-[20px] font-bold">
        {lastName}
      </h3>
    </div>
  );
}
