"use client";
import React, { useState } from "react";
import SideNav from "./_components/SideNav";
import TopHeader from "./_components/TopHeader";
import { ChakraProvider } from "@chakra-ui/react";
import { extendTheme } from "@chakra-ui/react";

function layout({ children }) {
  const [isSideNavVisible, setSideNavVisible] = useState(false);

  const toggleSideNav = () => {
    console.log("Toggling sidebar visibility");
    setSideNavVisible(!isSideNavVisible);
  };

  return (
    <div>
      <ChakraProvider>
        <div
          className={`h-full md:w-64 flex-col fixed inset-y-0 z-50 transform transition duration-200 ease-in-out ${
            isSideNavVisible ? "translate-x-0" : "-translate-x-full"
          } bg-white md:translate-x-0`}
        >
          <SideNav />
        </div>
        <div className="md:ml-64">
          <TopHeader toggleSideNav={toggleSideNav} />
          {children}
        </div>
      </ChakraProvider>
    </div>
  );
}

export default layout;
