import SearchBox from "./SearchBox";
import ChatList from "./ChatList";
import SidebarHeader from "./SidebarHeader";

const ChatSidebar = () => {
  return (
    <div className="p-4">
      <SidebarHeader />

      <div className="mt-6 p-4 rounded-2xl bg-white space-y-4">
        <SearchBox />
        <ChatList />
      </div>
    </div>
  );
};

export default ChatSidebar;
