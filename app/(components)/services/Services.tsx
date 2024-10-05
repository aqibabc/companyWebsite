"use client";
import React from "react";
import ServiceCard from "../servicesCard/ServicesCard";
import img1 from "../../assets/image/Mobile_app_perspective_matte.png";
import img2 from "../../assets/image/Code_perspective_matte.png";
import img3 from "../../assets/image/Dashboard_perspective_matte.png";
import arrow from "../../assets/image/arrow.png";
import line from "../../assets/image/Deco-line.png";
import image from "../../assets/image/about.png";
import useEmblaCarousel from "embla-carousel-react";
import Autoplay from "embla-carousel-autoplay";
import Image from "next/image";

export default function Services() {
  const [emblaRef, emblaApi] = useEmblaCarousel({ loop: false }, [
    Autoplay({ playOnInit: true, delay: 3000 }),
  ]);

  return (
    <>
      <div className="mb-[80px]">
        <h1 className="lg:text-[35px] sm:text-[30px] mb-[68px] text-center text-[20px] font-bold">
          Services we offer
        </h1>
        <div className="embla" ref={emblaRef}>
          <div className="embla__container">
            <div className="embla__slide flex flex-wrap justify-between items-center gap-4">
              <ServiceCard
                title="Mobile App Development"
                description="A Website is an extension of yourself and we can help you to express it properly. Your website is your number one marketing asset because we live in a digital age."
                icon={img1}
              />
              <ServiceCard
                title="Web App Development"
                description="A Website is an extension of yourself and we can help you to express it properly. Your website is your number one marketing asset because we live in a digital age."
                icon={img2}
              />
              <ServiceCard
                title="Software Testing Service"
                description="A Website is an extension of yourself and we can help you to express it properly. Your website is your number one marketing asset because we live in a digital age."
                icon={img3}
              />
            </div>
            <div className="embla__slide flex flex-wrap justify-between items-center gap-4">
              <ServiceCard
                title="Mobile App Development"
                description="A Website is an extension of yourself and we can help you to express it properly. Your website is your number one marketing asset because we live in a digital age."
                icon={img1}
              />
              <ServiceCard
                title="Web App Development"
                description="A Website is an extension of yourself and we can help you to express it properly. Your website is your number one marketing asset because we live in a digital age."
                icon={img2}
              />
              <ServiceCard
                title="Software Testing Service"
                description="A Website is an extension of yourself and we can help you to express it properly. Your website is your number one marketing asset because we live in a digital age."
                icon={img3}
              />
            </div>
            <div className="embla__slide flex flex-wrap justify-between items-center gap-4">
              <ServiceCard
                title="Mobile App Development"
                description="A Website is an extension of yourself and we can help you to express it properly. Your website is your number one marketing asset because we live in a digital age."
                icon={img1}
              />
              <ServiceCard
                title="Web App Development"
                description="A Website is an extension of yourself and we can help you to express it properly. Your website is your number one marketing asset because we live in a digital age."
                icon={img2}
              />
              <ServiceCard
                title="Software Testing Service"
                description="A Website is an extension of yourself and we can help you to express it properly. Your website is your number one marketing asset because we live in a digital age."
                icon={img3}
              />
            </div>
          </div>
        </div>
      </div>

      <div className="flex flex-wrap-reverse justify-around my-[80px]">
        <div className="w-[100%] lg:w-[40%] py-[20px]">
          <Image
            src={line}
            className="w-[18%] sm:w-[10%] lg:w-[15%]"
            alt="UniqueTech"
          />
          <h3 className="text-[20px] md:text-[34.5px] font-normal mb-[15px] md:mb-[25px]">
            Leading companies trust us
            <span className="font-semibold"> to develop software</span>
          </h3>
          <p className="mb-[30px] text-[14px] md:text-[18px] font-normal">
            We <span className="text-[#F76680]">add development capacity </span>
            to tech teams. Our value isn’t limited to building teams but is
            equally distributed across the project lifecycle. We are a custom
            software development company that guarantees the successful delivery
            of your project.
          </p>
          <button className="text-[#57007B] flex gap-4">
            See more Informations
            <Image src={arrow} className="" alt="UniqueTech" />
          </button>
        </div>
        <div className="w-[100%] lg:w-[40%]">
          <Image src={image} className="w-[100%] h-[100%]" alt="UniqueTech" />
        </div>
      </div>
    </>
  );
}
