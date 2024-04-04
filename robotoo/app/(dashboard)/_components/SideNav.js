import { File, Save } from "lucide-react";
import Image from "next/image";
import React from "react";

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
  return (
    <div>
      <div className="p-5 border-b">
        <Image src="logo.svg" width={130} height={130} />
      </div>
      <div className="flex flex-col float-left w-full">
        {menuList.map((item, index) => (
          <button
            key={item.id}
            className="flex gap-2 p-4 px-6 hover:bg-gray-100 w-full text-gray-500"
          >
            <item.icon />
            <h2>{item.name}</h2>
          </button>
        ))}
      </div>
    </div>
  );
}

export default SideNav;
