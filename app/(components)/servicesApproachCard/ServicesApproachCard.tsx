"use client";
import React, { useState } from "react";
import Image, { StaticImageData } from "next/image";
import Link from "next/link";

type Cardprops = {
  img: string | StaticImageData; // Update this line
  tittle: string;
  bg: string;
  description: string;
};

export default function ServicesApproachCard({
  tittle,
  bg,
  img,
  description,
}: Cardprops) {
  const [hovered, setHovered] = useState(false);

  const linkStyle = {
    color: hovered ? "white" : "black",
    backgroundColor: hovered ? `${bg}` : "transparent",
    textDecoration: "none",
    cursor: "pointer",
    transition: "background-color 0.3s ease-in-out",
  };
  return (
    <Link
      href={"/"}
      className={`lg:flex mb-5 w-[100%] lg:w-[48%] items-center gap-[20px] px-[10px] md:px-[30px] pt-[60px] pb-[40px] bg-[#fefeff] rounded-[10px] shadow-xl`}
      style={linkStyle}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
    >
      <div
        style={{ backgroundColor: bg }}
        className="py-3 w-[50px] md:w-[55px] lg:w-[70px] px-3 mb-10 rounded-full"
      >
        <Image src={img} alt="Service Icon" />
      </div>
      <div>
        <h3 className="md:text-[18px] text-[13px] font-bold">{tittle}</h3>
        <p className="md:text-[16px] text-[12px]  font-normal">{description}</p>
      </div>
    </Link>
  );
}
