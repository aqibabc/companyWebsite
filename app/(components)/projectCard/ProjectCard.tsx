import Image from "next/image";
import React from "react";
import arrow from "../../assets/image/arrow.png";
import { StaticImageData } from "next/image";

type Cardprops = {
  img: string | StaticImageData; // Update this line
  bg: string; // Update this line
  des: string; // Update this line
  tittle: string; // Update this line
};
export default function ProjectCard({ img, bg, tittle, des }: Cardprops) {
  return (
    <div className="lg:flex mb-8 border-2 shadow-xl">
      <div className="w-[100%] lg:w-[50%]">
        <Image src={img} className="w-[100%] h-[100%]" alt="UniqueTech" />
      </div>
      <div
        className="md:py-16 px-4 py-[30px] md:px-12 w-[100%] lg:w-[50%] relative"
        style={{ backgroundColor: bg }}
      >
        <h3 className="md:text-[28px] text-[13px] font-bold mb-[18px] md:mb-[20px]">
          {tittle}
        </h3>
        <p className="md:text-[20px] mb-2 text-[13px]">{des}</p>
        <button className="text-[#57007B] flex absolute md:bottom-[40px] right-[40px] gap-4">
          Read More
          <Image src={arrow} className="" alt="UniqueTech" />
        </button>
      </div>
    </div>
  );
}
