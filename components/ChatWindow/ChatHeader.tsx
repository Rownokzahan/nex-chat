import Image from "next/image";
import { BsThreeDotsVertical } from "react-icons/bs";

const ChatHeader = () => {
  return (
    <header className="flex items-center justify-between">
      <div className="flex items-center gap-2">
        <Image
          width={40}
          height={40}
          src={"https://randomuser.me/api/portraits/men/17.jpg"}
          alt=""
          className="size-11 rounded-full"
        />

        <div className="text-sm">
          <p className="font-semibold">David Jason</p>
          <p className="flex items-center text-xs">
            <span className="inline-block me-1 size-2 rounded-full bg-green-700" />
            Online now
          </p>
        </div>
      </div>

      <button className="size-6 grid place-items-center">
        <BsThreeDotsVertical />
      </button>
    </header>
  );
};

export default ChatHeader;
