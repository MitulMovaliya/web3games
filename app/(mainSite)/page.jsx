import Image from "next/image";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import { EventBox } from "./_eventBox";

export default function Home() {
  return (
    <>
      <section
        id="home"
        className="top-[-100px] px-[50px] relative h-screen uppercase flex items-center justify-between"
      >
        <div className="">
          <div className="text-[60px]">M2p esports</div>
          <div className="text-xl">Live the Esports Dream</div>
        </div>
        <div>
          {" "}
          <Image src={"/logo2.png"} width={"300"} height={"300"}></Image>
        </div>
      </section>
      <section id="about" className="h-screen">
        <div className="h-[130px]"></div>
        <div className=" box-border h-[500px] rounded-xl bg-custom-gradient p-[100px] flex flex-col ">
          <div className="text-center top-[-40px] p-1 relative rounded-xl border-[1px]	w-[100px] items-center">
            About Us
          </div>
          <div className="uppercase text-5xl mb-5 items-center">
            M2P esports
          </div>
          <div>
            <p className="">
              M2P ESPORTS is an Indian esports organization founded in March
              2021 with a mission to promote esports and gaming in India. The
              organization is focused on building a strong community of esports
              enthusiasts in India and providing opportunities for talented
              gamers to showcase their skills on a global stage. M2P ESPORTS is
              an Indian esports organization founded in March 2021 with a
              mission to promote esports and gaming in India. The organization
              is focused on building a strong community of esports enthusiasts
              in India and providing opportunities for talented gamers to
              showcase their skills on a global stage. M2P ESPORTS is an Indian
              esports organization founded in March 2021 with a mission to
              promote esports and gaming in India. The organization is focused
              on building a strong community of esports enthusiasts in India and
              providing opportunities for talented gamers to showcase their
              skills on a global stage.
            </p>
          </div>
          <div>
            <Link href="">
              <Button
                className="hover:text-white uppercase text-s rounded text-black bg-[#cbfffb] mt-5"
                variant={"secondary"}
              >
                Join Discord
              </Button>
            </Link>
          </div>
        </div>
      </section>
      <section id="events" className="mt-[20px]">
        <div className="h-[130px]"></div>
        <div className="text-[50px]">Events</div>

        <EventBox
          data={{
            imageLink: "/M2P_Events_1.jpg",
            EventName: "Battle for Rewards",
            EventPrize: "2000Rs",
            EventParticipants: "240",
            EventDescription:
              "Our recently concluded event, featuring a staggering INR 15 lakhs prize pool, registered over 2,60,000 players from across India. The event showcased the pinnacle of skill and passion within the Indian esports community. Stay tuned as we continue to forge new paths in the realm of gaming excellence!",
          }}
        />
        <EventBox
          data={{
            imageLink: "/M2P_Events_2.png",
            EventName: "Amateur Showdown",
            EventPrize: "1500Rs",
            EventParticipants: "240",
            EventDescription:
              "Our recently concluded event, featuring a staggering INR 15 lakhs prize pool, registered over 2,60,000 players from across India. The event showcased the pinnacle of skill and passion within the Indian esports community. Stay tuned as we continue to forge new paths in the realm of gaming excellence!",
          }}
        />
      </section>
    </>
  );
}
