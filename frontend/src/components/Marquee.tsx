"use client";

import React from "react";
import skillList from "../resources/marquee_data"; // make sure this file exists and exports an array
import type { IconType } from "react-icons";

type Skill = {
  name: string;
  icon: IconType;
};

type MarqueeProps = {
  skills?: Skill[];
};

const Marquee: React.FC<MarqueeProps> = ({ skills = skillList }) => {
  return (
    <div className="relative overflow-hidden flexbg-gradient-to-r from-[#011627] via-[#062B48] to-[#011627]">
      <div className="flex w-max gap-10 px-6 py-8 whitespace-nowrap animate-marquee">
        {[...skills, ...skills].map(({ name, icon: Icon }, idx) => (
          <div
            key={idx}
            className="flex items-center gap-3 text-[#607B96] text-xl lg:text-2xl"
          >
            <Icon className="text-3xl lg:text-4xl" />
            <span className="hidden sm:inline">{name}</span>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Marquee;
