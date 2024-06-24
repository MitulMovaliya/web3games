import Image from "next/image";

export function EventBox({ data }) {
  const imageStyle = {
    maxWidth: "100%", // Ensure the image scales appropriately on smaller screens
  };
  return (
    <div className="mt-5 mb-5 flex flex-col md:flex-row box-border items-center rounded-xl p-4 md:p-[40px] bg-[#191919]">
      <div className="">
        <Image
          className="rounded-xl"
          src={data.imageLink}
          width={600}
          height={600}
          alt={data.EventName}
          style={imageStyle}
        />
      </div>
      <div className="ml-0 md:ml-[40px] mt-4 md:mt-0 flex flex-col text-center md:text-left w-full">
        <div className="text-2xl md:text-[32px] font-extrabold">
          {data.EventName}
        </div>
        <div className="mt-3 text-base md:text-[16px]">
          {data.EventDescription}
        </div>
        <div className="mt-2 md:mt-0">
          <div>
            <div className="text-gray-500 mt-5 text-sm md:text-[14px]">
              Players Reg.
            </div>
            <div className="font-bold text-[#FFA500] text-base md:text-[16px]">
              {data.EventParticipants}+
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
