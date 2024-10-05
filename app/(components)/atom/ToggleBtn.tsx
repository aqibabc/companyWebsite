"use client";
import React, { useState } from "react";

export default function ToggleBtn() {
  return (
    <div>
      <button className="bg-gradient-to-b from-[#6675F7] to-[#57007B] block lg:hidden cursor-pointer rounded-[5px] text-white py-1.5 px-3 lg:py-2.5 lg:px-6">
        X
      </button>
    </div>
  );
}
