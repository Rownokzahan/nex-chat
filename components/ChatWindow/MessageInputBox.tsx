import { PiPaperPlaneTiltFill } from "react-icons/pi";

const MessageInputBox = () => {
  return (
    <footer className="flex items-end gap-2">
      <label
        htmlFor="message"
        className="flex-1 px-6 pt-2 pb-0.5 rounded-[36px] shadow bg-white"
      >
        <div className="max-h-32 h-max overflow-y-auto">
          <textarea
            id="message"
            rows={1}
            placeholder="Type a message..."
            className="size-full outline-none field-sizing-content resize-none leading-6"
          />
        </div>
      </label>

      <button className="size-10 shrink-0 rounded-full bg-primary grid place-items-center">
        <PiPaperPlaneTiltFill size={22} className="text-white" />
      </button>
    </footer>
  );
};

export default MessageInputBox;
