import TittleHeading from "@/app/(components)/atom/TittleHeading";
import Image from "next/image";
import img1 from "../../assets/image/business1.png";
import img2 from "../../assets/image/business2.png";
import img3 from "../../assets/image/business.png";
import man1 from "../../assets/image/business.png";
import man2 from "../../assets/image/business.png";
import man3 from "../../assets/image/business.png";
import Link from "next/link";
import GreatSoftCard from "@/app/(components)/GreatSoft/GreatSoftCard";

export default function GreatSoftware() {
  return (
    <>
      <TittleHeading firstName="Way of building" lastName="Great Software" />
      <div className="my-[80px]">
        <GreatSoftCard
          review="Simform is quick to identify larger problem with the Software so we decided to expand our scope to build new modules"
          tittle="Build the right team to scale"
          description=" Finding the right talent is not easy. We help you find the talent
            that suits your needs, follows your processes, and sticks with you
            long term (not the case with freelancers)."
          des="Our delivery model helps you cut costs and deliver within budget."
          manimg={man1}
          img={img1}
        />
        <div className="lg:flex items-center justify-around mb-8">
          <div className="w-[100%] mb-5 lg:m-0 lg:w-[40%]">
            <Image src={img2} className="w-[100%] h-[100%]" alt="UniqueTech" />
          </div>
          <div className="w-[100%] lg:w-[40%]">
            <h3 className="text-[18px] md:text-[28px] font-semibold mb-[15px] md:mb-[30px]">
              Build the right team to scale
            </h3>
            <p className="mb-[20px] font-normal">
              Finding the right talent is not easy. We help you find the talent
              that suits your needs, follows your processes, and sticks with you
              long term (not the case with freelancers).
            </p>
            <p className="mb-[20px] font-normal">
              Our <span className="text-[#F76680]">delivery model</span> helps
              you cut costs and deliver within budget.
            </p>
            <p className="mb-[25px] ms-[15px] text-[#F76680] italic text-[16px] font-normal">
              "Simform is quick to identify larger problem with the Software so
              we decided to expand our scope to build new modules"
            </p>
            <div className="flex items-center">
              <Image
                src={man2}
                className="rounded-full w-[25px] h-[25px] ml-[10px]"
                alt="UniqueTech"
              />
              <Link href="/" className="text-[#171616] ms-[0.5rem]">
                <p className="text-[16px]">Jeewa Markram</p>
                <span className="text-[#718096] text-[13px]">CEO</span>
              </Link>
            </div>
          </div>
        </div>
        <GreatSoftCard
          review="Simform is quick to identify larger problem with the Software so we decided to expand our scope to build new modules"
          tittle="Build the right team to scale"
          description=" Finding the right talent is not easy. We help you find the talent
            that suits your needs, follows your processes, and sticks with you
            long term (not the case with freelancers)."
          des="Our delivery model helps you cut costs and deliver within budget."
          manimg={man1}
          img={img1}
        />
      </div>
    </>
  );
}
