import AlcalineWorksCard from "@/app/(components)/alcalineWorksCard/AlcalineWorksCard";
import TittleHeading from "@/app/(components)/atom/TittleHeading";
import React from "react";

export default function AlcalineWorks() {
  return (
    <div>
      <TittleHeading
        firstName="How Development"
        lastName="Through Alcaline Works"
      />
      <div className="flex flex-wrap my-[80px] justify-between">
        <AlcalineWorksCard />
        <AlcalineWorksCard />
        <AlcalineWorksCard />
      </div>
      <div className="flex flex-wrap mb-[80px] justify-between">
        <AlcalineWorksCard />
        <AlcalineWorksCard />
        <AlcalineWorksCard />
      </div>
    </div>
  );
}
