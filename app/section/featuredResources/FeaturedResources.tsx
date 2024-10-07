import TittleHeading from "@/app/(components)/atom/TittleHeading";
import React from "react";
import cardimg1 from "../../assets/image/card-1.png";
import cardimg2 from "../../assets/image/card-2.png";
import cardimg3 from "../../assets/image/card-3.png";
import cardimg4 from "../../assets/image/card-4.png";
import topi from "../../assets/image/Group 38.png";
import bottomi from "../../assets/image/Group 39.png";
import FeaturedResourcesCard from "@/app/(components)/featuredResourcesCard/FeaturedResourcesCard";
import Image from "next/image";

export default function FeaturedResources() {
  return (
    <>
      <div className="my-[80px]">
        <TittleHeading firstName="Featured" lastName="Resources" />
        <div className="flex flex-wrap justify-between mt-[66px]">
          <FeaturedResourcesCard img={cardimg1} />
          <FeaturedResourcesCard img={cardimg2} />
          <FeaturedResourcesCard img={cardimg3} />
          <FeaturedResourcesCard img={cardimg4} />
        </div>
      </div>
    </>
  );
}
