import Btn from "@/app/(components)/atom/Btn";
import Image from "next/image";
import hero from "../../assets/image/hero.png";

export default function Hero() {
  return (
    <div className="md:flex items-center justify-center md:h-[80vh] lg:h-[90vh] mt-12 md:m-0">
      <div>
        <h1 className="text-[25px] md:text-[35px] lg:text-[53px] text-center md:text-left capitalize">
          Great <span className="text-[#DE4396]">Product</span> is
          <p className="font-bold">
            built by great <span className="text-[#DE4396]">teams</span>
          </p>
        </h1>
        <span className="mt-[28px] text-[18px] text-center md:text-left">
          We help build and manage a team of world-class developers
          <p>to bring your vision to life</p>
        </span>
        <div className="text-center mt-[25px] md:text-left">
          <Btn title="Let’s get started!" bg={"#3D63EA"} />
        </div>
      </div>
      <div>
        <Image
          src={hero}
          alt="UniqueTech"
          className="w-[100%] md:w-[400px] md:h-[430px] lg:w-[600px] lg:h-[530px]"
        />
      </div>
    </div>
  );
}
