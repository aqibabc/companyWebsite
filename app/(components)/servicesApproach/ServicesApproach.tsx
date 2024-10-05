import React from "react";
import TittleHeading from "../atom/TittleHeading";
import image1 from "../../assets/image/Rocket_perspective_matte.png";
import image2 from "../../assets/image/Code_perspective_matte.png";
import image3 from "../../assets/image/Heart_rate_perspective_matte.png";
import image4 from "../../assets/image/Shield_perspective_matte.png";
import image5 from "../../assets/image/Success_perspective_matte.png";
import image6 from "../../assets/image/Padlock_perspective_matte.png";
import ServicesCard from "../servicesCard/ServicesCard";
import ServicesApproachCard from "../servicesApproachCard/ServicesApproachCard";

export default function ServicesApproach() {
  return (
    <div className="my-[80px]">
      <TittleHeading
        firstName="Our Design And"
        lastName="Development Approach"
      />
      <div className="flex flex-wrap justify-center gap-5 mt-[80px]">
        <ServicesApproachCard
          bg="#212529"
          description="Unlike other companies, we are a UX first development company. Projects are driven by designers and they make sure design and experiences translate to code."
          tittle="UX Driven Engineering."
          img={image1}
        />
        <ServicesApproachCard
          bg="#68DBF2"
          description="Unlike other companies, we are a UX first development company. Projects are driven by designers and they make sure design and experiences translate to code."
          tittle="Developing Shared Understanding."
          img={image2}
        />
        <ServicesApproachCard
          bg="#FF92AE"
          description="Unlike other companies, we are a UX first development company. Projects are driven by designers and they make sure design and experiences translate to code."
          tittle="Proven Experience and Expertise."
          img={image3}
        />
        <ServicesApproachCard
          bg="#24E795"
          description="Unlike other companies, we are a UX first development company. Projects are driven by designers and they make sure design and experiences translate to code."
          tittle="UX Driven Engineering"
          img={image4}
        />
        <ServicesApproachCard
          bg="#F7936F"
          description="Unlike other companies, we are a UX first development company. Projects are driven by designers and they make sure design and experiences translate to code."
          tittle="UX Driven Engineering"
          img={image5}
        />
        <ServicesApproachCard
          bg="#57007B"
          description="Unlike other companies, we are a UX first development company. Projects are driven by designers and they make sure design and experiences translate to code."
          tittle="UX Driven Engineering"
          img={image6}
        />
      </div>
    </div>
  );
}
