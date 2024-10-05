import React from "react";
type Btnprops = {
  title: string;
  bg: string;
};
export default function Btn({ title, bg }: Btnprops) {
  return (
    <>
      <button
        className={`cursor-pointer rounded-[5px] text-white py-1.5 px-3 lg:py-2.5 lg:px-6`}
        style={{ backgroundColor: bg }}
      >
        {title}
      </button>
    </>
  );
}
