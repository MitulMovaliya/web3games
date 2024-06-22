import Image from "next/image";

export function EventBox({ data }) {
  console.log(data);
  const imageStyle = {
    maxWidth: "400px",
  };
  return (
    <div className="mt-5 mb-5 flex box-border items-center rounded-xl p-[40px] bg-[#191919]">
      <div className="">
        <Image
          className="rounded-xl"
          src={data.imageLink}
          width={400}
          height={400}
          alt={data.EventName}
          style={imageStyle}
        ></Image>
      </div>
      <div className="ml-[40px] flex flex-col ">
        <div className="text-[32px] font-extrabold">{data.EventName}</div>
        <div className="text-[16px]">{data.EventDescription}</div>
        <div>
          <div>
            <div className="text-[grey] mt-5 text-[14px]">Players Reg.</div>
            <div className="text-bold text-[#FFA500] text-[16px]">
              {data.EventParticipants}+
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
