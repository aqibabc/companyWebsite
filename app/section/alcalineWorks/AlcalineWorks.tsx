import AlcalineWorksCard from "@/app/(components)/alcalineWorksCard/AlcalineWorksCard";
import TittleHeading from "@/app/(components)/atom/TittleHeading";
import Image from "next/image";
import line from "../../assets/image/Untitled-1.png";
import React from "react";

export default function AlcalineWorks() {
  return (
    <div>
      <TittleHeading
        firstName="How Development"
        lastName="Through Alcaline Works"
      />
      <div className="flex flex-wrap mt-[80px] justify-around">
        <AlcalineWorksCard />
        <AlcalineWorksCard />
        <AlcalineWorksCard />
      </div>
      <Image
        src={line}
        className="w-full my-[0px] lg:my-[80px] lg:block hidden"
        alt="hello"
      />
      <div className="flex flex-wrap mb-[80px] justify-around">
        <AlcalineWorksCard />
        <AlcalineWorksCard />
        <AlcalineWorksCard />
      </div>
    </div>
  );
}
