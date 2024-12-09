"use client";
import React, { useState } from "react";

const Filter = () => {
  const items = ["All", "Branding", "UX/UI", "Social Media"];
  const [active, setActive] = useState<string>("All");

  return (
    <div className=''>
      {items.map((item, index) => (
        <button
          onClick={() => setActive(item)}
          key={index}
          className={`min-w-[7.32064rem] rounded-full py-[0.58565rem] px-[1.1713rem] text-[1.1713rem] ${active === item ? "text-[#fff]" : "text-[#242424]"} ${
            active === item ? "bg-[#141414]" : "bg-transparent"
          } leading-[1.63982rem] text-center`}>
          {item}
        </button>
      ))}
    </div>
  );
};

export default Filter;
