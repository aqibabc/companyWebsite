import TittleHeading from "@/app/(components)/atom/TittleHeading";
import ProjectCard from "@/app/(components)/projectCard/ProjectCard";
import ServicesCard from "@/app/(components)/servicesCard/ServicesCard";
import card1 from "../../assets/image/Case-study__image (1).png";
import arrow from "../../assets/image/arrow.png";
import card2 from "../../assets/image/Case-study__image (2).png";
import card3 from "../../assets/image/Case-study__image.png";
import React from "react";
import Image from "next/image";

export default function Project() {
  return (
    <>
      <TittleHeading firstName="Our Recent" lastName="Case Studies" />
      <div className="my-[80px]">
        <ProjectCard
          tittle="Website Design for SCFC Canada."
          des="Born out of a vision, a single-minded objective that puts service
        before anything else, Swift Clearance and Forwarding Corp. surging
          forth to deliver the best services in the shipping and logistics
          scenario. Its meteoric rise stems out of a solid foundation. The
          management boasts of over 20 years of rich and varied experience in
          the shipping and freight forwarding industry."
          img={card3}
          bg="#F1F2FF"
        />
        <ProjectCard
          tittle="Website Design for SCFC Canada."
          des="Born out of a vision, a single-minded objective that puts service
          before anything else, Swift Clearance and Forwarding Corp. surging
          forth to deliver the best services in the shipping and logistics
          scenario. Its meteoric rise stems out of a solid foundation. The
          management boasts of over 20 years of rich and varied experience in
          the shipping and freight forwarding industry."
          img={card2}
          bg="#F0FFF7"
        />
        <ProjectCard
          tittle="Website Design for SCFC Canada."
          des="Born out of a vision, a single-minded objective that puts service
        before anything else, Swift Clearance and Forwarding Corp. surging
        forth to deliver the best services in the shipping and logistics
        scenario. Its meteoric rise stems out of a solid foundation. The
        management boasts of over 20 years of rich and varied experience in
        the shipping and freight forwarding industry."
          img={card1}
          bg="#FFF4F4"
        />
        <button className="text-[#57007B] flex absolute right-12 md:right-8 gap-4">
          Read more case studies
          <Image src={arrow} className="" alt="UniqueTech" />
        </button>
      </div>
    </>
  );
}
