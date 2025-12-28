import Image from "next/image";
import { BiSolidMessageSquareEdit } from "react-icons/bi";

const SidebarHeader = () => {
  return (
    <div className="w-full px-1 flex justify-between items-center gap-4">
      <Image
        width={40}
        height={40}
        src={"https://randomuser.me/api/portraits/men/22.jpg"}
        alt=""
        className="h-10 rounded-full border border-primary"
      />

      <h3 className="font-semibold text-lg text-center">NexChat</h3>

      <button className="size-9 rounded-full shadow bg-gray-400 grid place-items-center">
        <BiSolidMessageSquareEdit size={20} className="text-white" />
      </button>
    </div>
  );
};

export default SidebarHeader;
