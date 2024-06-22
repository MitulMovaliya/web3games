"use client";
import Image from "next/image";
export function Navbar() {
  return (
    <>
      <div className="sticky z-10 top-0 w-full h-[100px] flex items-center  bg-[#1e1f22]/80  text-white justify-between">
        <div className="flex flex-col gap-2 items-center text-[15px]">
          <Image src="/logo2.png" width={"100"} height={"80"}></Image>
          M2P ESPORTS
        </div>
        <div className="flex uppercase gap-7">
          <a href="/">Home</a>
          <a href="#about">About</a>
          <a href="#events">Events</a>
          <a href="">Contact</a>
        </div>
      </div>
    </>
  );
}
