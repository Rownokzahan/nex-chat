import ChatHeader from "./ChatHeader";
import MessageInputBox from "./MessageInputBox";
import MessageList from "./MessageList";

const ChatWindow = () => {
  return (
    <div className="p-4 h-dvh flex flex-col">
      <ChatHeader />

      <main className="flex-1 overflow-auto">
        <MessageList />
      </main>

      <MessageInputBox />
    </div>
  );
};

export default ChatWindow;
