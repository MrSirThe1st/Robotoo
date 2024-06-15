"use client";
import { File, Save } from "lucide-react";
import Image from "next/image";
import React, { useState } from "react";
import Link from "next/link";

function SideNav() {
  const menuList = [
    {
      id: 1,
      name: "File",
      icon: File, // Wrap the component in JSX tags
      path: "/files",
    },
    {
      id: 2,
      name: "Save",
      icon: Save, // Wrap the component in JSX tags
      path: "/save",
    },
  ];

  const [activeIndex, setActiveIndex] = useState();

  return (
    <div className="shadow-sm border-r h-full">
      <div className="p-5 ">
        {/* Adjust the src attribute to point to your logo image */}
        <Image src="/logo.svg" width={130} height={130} />
      </div>
      <div className="flex flex-col float-left w-full">
        {menuList.map((item, index) => (
          <Link key={item.id} href={item.path}>
            <button
              className={`flex gap-2 p-4 px-6 hover:bg-gray-100  w-full text-gray-500 py-2 ${
                activeIndex === index ? " bg-blue-500 text-white" : ""
              }`}
              onClick={() => setActiveIndex(index)}
            >
              <item.icon />
              <h2>{item.name}</h2>
            </button>
          </Link>
        ))}
      </div>
    </div>
  );
}

export default SideNav;
