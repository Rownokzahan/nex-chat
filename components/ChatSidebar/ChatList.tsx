import Image from "next/image";

const ChatList = () => {
  return (
    <div className="h-[calc(100dvh-184px)] overflow-y-auto space-y-2">
      <div className="p-2 rounded-lg flex gap-2 items-center">
        <Image
          width={40}
          height={40}
          src={"https://randomuser.me/api/portraits/women/17.jpg"}
          alt=""
          className="size-11 rounded-full"
        />

        <div className="flex-1 text-sm">
          <div className="min-w-0 flex items-center justify-between gap-2">
            <h3 className="font-medium truncate">Loomi</h3>
            <p className="font-medium text-xs text-neutral-500">9:03 AM</p>
          </div>
          <p className="text-primary font-medium">Typing...</p>
        </div>
      </div>

      <div className="p-2 rounded-lg bg-gray-50 flex gap-2 items-center">
        <Image
          width={40}
          height={40}
          src={"https://randomuser.me/api/portraits/men/17.jpg"}
          alt=""
          className="size-11 rounded-full"
        />

        <div className="flex-1 text-sm">
          <div className="flex items-center justify-between gap-2">
            <h3 className="font-medium truncate">David Jason</h3>
            <p className="font-medium text-xs text-neutral-500">3:11 PM</p>
          </div>
          <p>You: Can we talk?</p>
        </div>
      </div>

      <div className="p-2 rounded-lg flex gap-2 items-center">
        <Image
          width={40}
          height={40}
          src={"https://randomuser.me/api/portraits/men/21.jpg"}
          alt=""
          className="size-11 rounded-full"
        />

        <div className="flex-1 text-sm">
          <div className="flex items-center justify-between gap-2">
            <h3 className="font-medium truncate">Thomas Cooper</h3>
            <p className="font-medium text-xs text-neutral-500">Yesterday</p>
          </div>
          <p className="font-medium">See you there then.</p>
        </div>
      </div>

      <div className="p-2 rounded-lg flex gap-2 items-center">
        <Image
          width={40}
          height={40}
          src={"https://randomuser.me/api/portraits/women/11.jpg"}
          alt=""
          className="size-11 rounded-full"
        />

        <div className="flex-1 text-sm">
          <div className="min-w-0 flex items-center justify-between gap-2">
            <h3 className="font-medium truncate">Jane Doe</h3>
            <p className="font-medium text-xs text-neutral-500">22/11/2025</p>
          </div>
          <p>Yes, come fast</p>
        </div>
      </div>
    </div>
  );
};

export default ChatList;
