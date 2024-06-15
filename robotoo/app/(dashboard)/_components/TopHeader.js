import { UserButton } from "@clerk/nextjs";
import { AlignJustify } from "lucide-react";
import React from "react";
import Image from "next/image";

function TopHeader({toggleSideNav}) {
  return (
    <div className="flex p-5 border-b items-center justify-between md:justify-end">
      <Image src="/icon.svg" width={50} height={50} className="md:hidden" />
      <UserButton />
      <AlignJustify className="md:hidden" onClick={toggleSideNav} />
    </div>
  );
}

export default TopHeader;
