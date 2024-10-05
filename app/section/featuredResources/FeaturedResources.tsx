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
      <div className="my-[80px]">
        <div className="flex px-[84px] py-[50px] rounded-lg justify-around items-center bg-[#E4ECF7]">
          <h1 className="text-[35px] font-semibold">
            Hire the best developers and <p>designers around!</p>
          </h1>
          <div className="text-center">
            <Image src={topi} alt="topi" />
            <button className="bg-gradient-to-b my-12 from-[#FFC656] to-[#F16063] cursor-pointer rounded-[5px] text-white py-1.5 px-3 lg:py-2.5 lg:px-6">
              Hire Top
            </button>
            <Image src={bottomi} alt="topi" />
          </div>
        </div>
      </div>
    </>
  );
}
