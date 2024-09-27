import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { ArrowCircleLeft, ArrowCircleRight } from "iconsax-react";
import Vector from "@/public/Vector.png";

const Sidebar = () => {
  return (
    <aside className="flex min-h-screen w-1/5 flex-1 flex-col flex-wrap items-center justify-between space-y-6 bg-white p-6">
      <div className="flex flex-col items-center">
        <Image src={Vector} className="mb-2" alt="SmartWave Logo" width={40} height={40} />
        <span className="text-xs font-bold">SmartWave</span>
      </div>

      <nav className="flex flex-col items-center space-y-4 text-gray-600">
        <Link href="#" className="rounded-xl bg-[#FF85671A] px-4 py-1 text-[#FF8667]">Home</Link>
        <Link href="#" className="rounded-xl px-4 py-1 hover:bg-gray-200">Shops</Link>
        <Link href="#" className="rounded-xl px-4 py-1 hover:bg-gray-200">Collections</Link>
        <Link href="#" className="rounded-xl px-4 py-1 hover:bg-gray-200">About us</Link>
        <Link href="#" className="rounded-xl px-4 py-1 hover:bg-gray-200">Contact us</Link>
      </nav>

      <div className="flex flex-col space-y-2">
        <div className="display-around flex items-center justify-between space-x-2">
          <span className="text-xl text-gray-400">01</span>
          <div className="flex flex-row">
            <ArrowCircleLeft className="size-5 border-solid text-[#FF8667]" />
            <ArrowCircleRight className="size-5 border-solid text-[#FF8667]" />
          </div>
        </div>
        <div className="flex space-x-1">
          <div className="h-1 w-12 rounded-md bg-gray-200"></div>
          <div className="h-1 w-12 rounded-md bg-[#FF8667]"></div>
          <div className="h-1 w-12 rounded-md bg-gray-200"></div>
        </div>
      </div>
    </aside>
  );
};

export default Sidebar;
