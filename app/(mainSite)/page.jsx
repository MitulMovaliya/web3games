import Image from "next/image";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import { EventBox } from "./_eventBox";
import EventJson from "./events.json";

export default function Home() {
  return (
    <>
      <section
        id="home"
        className="bg-cover bg-center  top-[40px] md:top-[-100px] justify-center px-4 md:px-[50px] relative h-[50vh] md:h-screen uppercase flex flex-col md:flex-row items-center md:justify-between"
      >
        <div className="text-center md:top-[0px]  md:text-left relative">
          <div className="text-5xl tracking-wider		 text-[#1e1f22] text-outline md:text-[80px] font-semibold		">
            M2P ESPORTS
          </div>
          <div className="tracking-wide	 text-lg md:text-xl md:mt-2 font-semibold	">
            Live the Esports Dream
          </div>
        </div>
        <div className="hidden md:flex md:top-0 relative md:mt-0">
          <Image src={"/logo2.png"} width={300} height={300} alt="M2P Logo" />
        </div>
      </section>
      <section id="about" className="h-screen px-4 md:px-0">
        <div className="h-[130px]"></div>
        <div className="box-border h-auto  rounded-xl bg-custom-gradient p-4 md:p-[100px] flex flex-col items-center md:items-start">
          <div className="text-center md:top-[-40px] top-[-5px] p-1 relative rounded-xl border-[1px] w-[100px] items-center">
            About Us
          </div>
          <div className="uppercase text-3xl md:text-5xl mt-5 mb-5 text-center md:text-left">
            M2P ESPORTS
          </div>
          <div className="text-sm md:text-left text-center md:text-base">
            <p>
              Welcome to M2P ESPORTS, an Indian esports organization founded in
              March 2021 with a mission to promote esports and gaming in India.
              We focus on building a robust community of esports enthusiasts and
              providing opportunities for talented gamers to showcase their
              skills globally. <br /> <br />
              Since our inception, we have successfully hosted two major
              tournaments, bringing together some of the best talent in the
              region. In addition to these large-scale events, we organize daily
              and paid scrims, offering a competitive environment for players to
              refine their skills and gain valuable experience.
              <br /> <br />
              At M2P ESPORTS, we are dedicated to fostering the growth of
              esports in India, supporting players at all levels, and elevating
              the gaming landscape to new heights. Join us in our journey to
              make India a powerhouse in esports.
            </p>
          </div>
          <div className="mt-5">
            <Link target="blank" href="https://discord.gg/FbhqQpAza7">
              <Button
                className="hover:text-white uppercase text-s rounded text-black bg-[white]"
                variant={"secondary"}
              >
                Join Discord
              </Button>
            </Link>
          </div>
        </div>
      </section>
      <section id="events" className="px-4 md:px-0">
        <div className="h-[50px] md:h-[130px]"></div>
        <div className="text-3xl md:text-[50px] text-center md:text-left">
          Events
        </div>
        <div>
          {EventJson.map((item) => (
            <EventBox data={item} />
          ))}
        </div>
      </section>
    </>
  );
}
