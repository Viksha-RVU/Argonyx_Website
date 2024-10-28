"use client";
import Image from "next/image";
import RvuLogo from "@/public/rvu-logo.png";
import VikshaIcon from "@/public/viksha_logo.png";
import NeuralNexusIcon from "@/public/neural_nexus_logo.png";

import IEEELogo from "@/public/IEEE_RVU_SB.png";
import XLogo from "@/public/X.png";

import * as React from "react";

function Navbar() {
  return (
    <div className="container flex h-14 max-w-screen-2xl items-center pt-2">
      <div className="flex justify-evenly md:justify-start items-center space-x-2 w-full">
        <a href="https://rvu.edu.in/" target="_blank" className="px-3">
          <Image src={RvuLogo} alt="rvu_icon" height={90} width={130} />
        </a>
        <div className="w-full flex md:justify-end items-center">
          <a
            href="https://www.instagram.com/viksha_rvu"
            target="_blank"
            className="md:px-3"
          >
            <Image
              src={VikshaIcon}
              alt="viksha_icon"
              height={100}
              width={130}
            />
          </a>
          <Image src={XLogo} alt="x" height={15} width={15} />
          <a href="https://www.instagram.com/ieee.rvu" target="_blank" className="md:px-3">
            <Image src={IEEELogo} alt="iee_icon" height={130} width={190} />
          </a>
          <Image src={XLogo} alt="x" height={15} width={15} />
          <a
            href="https://www.instagram.com/neuralnexus_rvu"
            target="_blank"
            className="md:px-3"
          >
            <Image
              src={NeuralNexusIcon}
              alt="neural_nexus_icon"
              height={45}
              width={75}
            />
          </a>
        </div>
      </div>
    </div>
  );
}

export default Navbar;
