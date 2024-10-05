import Image, { StaticImageData } from "next/image";
import Link from "next/link";
import React from "react";
type CardPrpps = {
  title: string;
  description: string;
  icon: string | StaticImageData;
};
const ServiceCard = ({ title, description, icon }: CardPrpps) => {
  return (
    <Link
      href="#"
      className="border-2 border-[#212020] rounded-lg transition-all ease-in-out w-[100%] md:w-[50%] lg:w-[32%] hover:text-[#F76680] hover:border-[#F76680] px-4 py-8"
    >
      <div>
        <Image
          src={icon}
          alt="service icon"
          className="border-2 border-[#F76680] p-2 w-[40px] rounded-full"
        />
      </div>

      <h4 className="mb-4 mt-3 text-[20px] font-bold">{title}</h4>

      <p className="text-[17px] text-[#4C5656]">{description}</p>
    </Link>
  );
};

export default ServiceCard;
