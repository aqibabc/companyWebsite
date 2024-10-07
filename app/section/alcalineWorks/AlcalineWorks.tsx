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
      <div className="flex flex-wrap my-[80px] justify-around">
        <AlcalineWorksCard />
        <AlcalineWorksCard />
        <AlcalineWorksCard />
      </div>
      <Image src={line} className="w-full" alt="hello" />
      <div className="flex flex-wrap my-[80px] justify-around">
        <AlcalineWorksCard />
        <AlcalineWorksCard />
        <AlcalineWorksCard />
      </div>
    </div>
  );
}
