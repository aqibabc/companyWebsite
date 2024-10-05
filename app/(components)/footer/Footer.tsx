import Image from "next/image";
import logo from "../../assets/image/logo.png";
import googlelogo from "../../assets/image/googlelogo.png";
import facebook from "../../assets/image/facebook.png";
import group from "../../assets/image/Group.png";
import linkedin from "../../assets/image/linkedin.png";
import instagram from "../../assets/image/instagram.png";

export default function Footer() {
  return (
    <div className="border-t-2">
      <div className="flex broder-b-2 flex-wrap justify-around py-[30px] md:py-[61px]">
        <div className="lg:w-[27%] md:w-[35%] w-[100%]">
          <div className="flex items-center cursor-pointer mb-[24px]">
            <Image
              src={logo}
              alt="UniqueTech Logo"
              className="w-[29px] h-[22px]"
            />
            <p className="UniqueTech font-normal ml-[4.6px] text-[24px]">
              UniqueTech
            </p>
          </div>
          <p>
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry
          </p>
          <Image src={googlelogo} alt="UniqueTech Logo" className="mt-[36px]" />
        </div>
        <div className="lg:w-[15%] md:w-[25%] w-[40%]">
          <h4 className="text-[18px] font-bold mb-[24px]">Links</h4>
          <ul className="text-[14px] flex flex-col gap-y-[0.2rem]">
            <li>About Us</li>
            <li>Services</li>
            <li>Case Studies</li>
            <li>How it works</li>
            <li>Blog </li>
            <li>Careers</li>
            <li>Areas We Serve</li>
          </ul>
        </div>
        <div className="lg:w-[17%] md:w-[25%] w-[60%]">
          <h4 className="text-[18px] font-bold mb-[24px]">Contact Us</h4>
          <p className="text-[14px] mb-[20px]">
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry.
          </p>
          <span className="text-[14px] font-thin">+923267876344</span>
        </div>
        <div className="flex items-end mt-4 sm:m-0 gap-4">
          <button className="bg-white shadow-md border-1 rounded-md p-2">
            <Image src={facebook} alt="UniqueTech Logo" />
          </button>
          <button className="bg-white shadow-md border-1 rounded-md p-2">
            <Image src={group} alt="UniqueTech Logo" />
          </button>
          <button className="bg-white shadow-md border-1 rounded-md p-2">
            <Image src={linkedin} alt="UniqueTech Logo" />
          </button>
          <button className="bg-white shadow-md border-1 rounded-md p-2">
            <Image src={instagram} alt="UniqueTech Logo" />
          </button>
        </div>
      </div>
      <div className="text-center py-6">
        <p>© 2024 Copyright by IK Developers. All rights reserved.</p>
      </div>
    </div>
  );
}
