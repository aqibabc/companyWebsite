import TittleHeading from "@/app/(components)/atom/TittleHeading";
import React from "react";

export default function OurTech() {
  return (
    <div className="my-[80px]">
      <TittleHeading firstName="Our" lastName="Tech Stack" />
      <nav className="w-[50%] mx-auto">
        <ul className="flex justify-between">
          <li className="cursor-pointer uppercase text-[14px] font-medium hover:text-[#57007B]">
            Backend
          </li>
          <li className="cursor-pointer uppercase text-[14px] font-medium hover:text-[#57007B]">
            Frontend
          </li>
          <li className="cursor-pointer uppercase text-[14px] font-medium hover:text-[#57007B]">
            Databases
          </li>
          <li className="cursor-pointer uppercase text-[14px] font-medium hover:text-[#57007B]">
            CMS
          </li>
          <li className="cursor-pointer uppercase text-[14px] font-medium hover:text-[#57007B]">
            CloudTesting
          </li>
          <li className="cursor-pointer uppercase text-[14px] font-medium hover:text-[#57007B]">
            DevOpss
          </li>
        </ul>
      </nav>
    </div>
  );
}
