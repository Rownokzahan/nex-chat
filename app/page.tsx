import ChatSidebar from "@/components/ChatSidebar";
import ChatWindow from "@/components/ChatWindow";

const HomePage = () => {
  return (
    <div className="h-dvh grid grid-cols-[30%_1fr] bg-gray-200">
      <ChatSidebar />
      <ChatWindow />
    </div>
  );
};

export default HomePage;
