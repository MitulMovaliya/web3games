import Link from "next/link";
import { FaYoutube } from "react-icons/fa";
import { AiFillInstagram } from "react-icons/ai";
import { FaDiscord } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";

export function Footer() {
  return (
    <div className="relative mt-10 text-center bg-[#191919]">
      <div className="uppercase bg-custom-gradient flex justify-between px-[300px] h-[100px]">
        <Link className="flex items-center gap-2" href="/">
          <FaYoutube size={24} />
          <div>youtube</div>
        </Link>
        <Link className="flex items-center gap-2" href="/">
          <AiFillInstagram size={24} />
          <div>Instagram</div>
        </Link>
        <Link className="flex items-center gap-2" href="/">
          <FaDiscord size={24} />
          <div>Discord</div>
        </Link>
        <Link className="flex items-center gap-2" href="/">
          <FaLinkedin size={24} />
          <div>Linkedin</div>
        </Link>
      </div>
      <div className="h-[60px] flex items-center justify-center">
        support@xyz.com
      </div>
      <div className=" py-[5px] relative text-center">
        COPYRIGHT © ALL RIGHTS RESERVED BY M2P ESPORTS
      </div>
    </div>
  );
}
