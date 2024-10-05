"use client";
import Image from "next/image";
import logo from "../../assets/image/logo.png";
import menuimg from "../../assets/image/menu.png";
import closeimg from "../../assets/image/cross.png";
import { useState } from "react";

const Header = () => {
  let [open, setOpen] = useState(true);
  return (
    <header className="lg:flex px-5 justify-between items-center">
      <div className="flex items-center cursor-pointer">
        <Image src={logo} alt="UniqueTech Logo" className="w-[29px] h-[22px]" />
        <p className="UniqueTech font-normal ml-[4.6px] text-[24px]">
          UniqueTech
        </p>
      </div>
      <div
        onClick={() => setOpen(!open)}
        className="text-3xl absolute right-8 top-6 cursor-pointer lg:hidden"
      >
        {/* <ion-icon name={open ? "close" : "menu"}></ion-icon> */}
        {open ? (
          <Image src={closeimg} className="w-[20px]" alt="Menu" />
        ) : (
          <Image src={menuimg} className="w-[20px]" alt="Menu" />
        )}
      </div>
      <nav className="bg-white">
        <ul
          className={`lg:flex lg:items-center border-y-2 border-[#DE4396] lg:border-0 md:pb-0 pb-12   md:static bg-white absolute left-0 w-full md:w-auto md:pl-0 pl-9 transition-all duration-100 ease-in ${
            open ? "top-20 " : "top-[-100%]"
          }`}
        >
          <li className="font-medium hover:text-[#DE4396] transition-all duration-100 ease-in my-5 lg:my-0 text-base cursor-pointer text-[#4A5568]">
            About Us
          </li>
          <li className="lg:ml-[48px] hover:text-[#DE4396] transition-all duration-100 ease-in font-medium my-5 lg:my-0  text-base cursor-pointer text-[#4A5568]">
            Services
          </li>
          <li className="lg:ml-[48px] hover:text-[#DE4396] transition-all duration-100 ease-in font-medium my-5 lg:my-0  text-base cursor-pointer text-[#4A5568]">
            Case Studies
          </li>
          <li className="lg:ml-[48px] hover:text-[#DE4396] transition-all duration-100 ease-in font-medium my-5 lg:my-0  text-base  cursor-pointer text-[#4A5568]">
            Blog
          </li>
          <li className="lg:ml-[48px] hover:text-[#DE4396] transition-all duration-100 ease-in font-medium my-5 lg:my-0  text-base cursor-pointer text-[#4A5568]">
            How it Works
          </li>
          <li className="lg:ml-[48px] hover:text-[#DE4396] transition-all duration-100 ease-in font-medium my-5 lg:my-0  text-base  cursor-pointer text-[#4A5568]">
            Hire
          </li>
          <button className="bg-gradient-to-b from-[#6675F7] to-[#57007B] lg:hidden block cursor-pointer rounded-[5px] text-white py-1.5 px-3 lg:py-2.5 lg:px-6">
            Contact Us
          </button>
        </ul>
      </nav>
      <div>
        <button className="bg-gradient-to-b from-[#6675F7] to-[#57007B] hidden lg:block cursor-pointer rounded-[5px] text-white py-1.5 px-3 lg:py-2.5 lg:px-6">
          Contact Us
        </button>
      </div>
    </header>
  );
};

export default Header;
