import { PiChatCircleDotsFill } from "react-icons/pi";

interface AuthLayoutProps {
  children: React.ReactNode;
}

const AuthLayout = ({ children }: AuthLayoutProps) => {
  return (
    <div className="h-dvh p-6 flex flex-col lg:flex-row items-center justify-center gap-10 lg:gap-28">
      <div className="w-max text-center">
        <PiChatCircleDotsFill size={130} className="mx-auto text-primary" />
        <h2 className="font-bold text-4xl">NexChat</h2>
      </div>

      <div className="w-full max-w-xs p-5 border rounded-lg">
        {children}
      </div>
    </div>
  );
};

export default AuthLayout;
