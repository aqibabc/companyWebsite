import Image from "next/image";
import arrow from "../../assets/image/arrow.png";
import React from "react";
import { StaticImageData } from "next/image";

type Cardprops = {
  img: string | StaticImageData; // Update this line
};
export default function FeaturedResourcesCard({ img }: Cardprops) {
  return (
    <div className="w-[100%] md:w-[30%] lg:w-[230px] text-[16px] relative">
      <Image src={img} className="h-[170px] w-[100%]" alt="UniqueTech" />
      <p className="mt-[25px] mb-[35px]">
        How to Build a Scalable Application up to 1 Million Users on AWS
      </p>
      <button className="text-[#57007B] flex justify-end absolute bottom-1 right-3 gap-4">
        Read More
        <Image src={arrow} className="" alt="UniqueTech" />
      </button>
    </div>
  );
}
