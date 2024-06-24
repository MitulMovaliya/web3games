import Link from "next/link";
import { FaYoutube } from "react-icons/fa";
import { AiFillInstagram } from "react-icons/ai";
import { FaDiscord } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";

export function Footer() {
  return (
    <div className="relative mt-10 text-center bg-[#191919] text-white">
      <div className="capitalize bg-custom-gradient flex flex-col md:flex-row items-center justify-between px-4 md:px-[100px] lg:px-[300px] h-auto md:h-[100px] py-4 md:py-0 gap-4 md:gap-0">
        <Link
          className="flex items-center gap-2"
          target="blank"
          href="https://www.youtube.com/@m2pesports1"
        >
          <FaYoutube size={24} />
          <div>youtube</div>
        </Link>
        <Link
          className="flex items-center gap-2"
          target="blank"
          href="https://www.instagram.com/m2pesports/"
        >
          <AiFillInstagram size={24} />
          <div>Instagram</div>
        </Link>
        <Link
          className="flex items-center gap-2"
          target="blank"
          href="https://discord.gg/EdzGrRgAvh"
        >
          <FaDiscord size={24} />
          <div>Discord</div>
        </Link>
        <Link
          className="flex items-center gap-2"
          target="blank"
          href="https://www.linkedin.com/company/m2pesports"
        >
          <FaLinkedin size={24} />
          <div>Linkedin</div>
        </Link>
      </div>
      <div className="h-[60px] flex items-center justify-center">
        support@xyz.com
      </div>
      <div className="py-4 px-2 relative text-center">© 2024 M2P Esports</div>
    </div>
  );
}
