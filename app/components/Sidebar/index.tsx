import Image from "next/image";
import ImageIcon from "@/assets/logo.png";
import { lazy } from "react";
import HorizontalRule from "@/components/hoc/HorizontalRule";
const PassbookBox = lazy(() => import("@/components/Sidebar/PassbookBox"));

const Sidebar = () => {
  return (
    <>
      <div className="bg-primary h-64 flex flex-col items-center px-3 pt-4 text-white font-bold gap-2 rounded-b-4xl">
        <Image src={ImageIcon} height={100} width={100} alt="app-logo" />
        Account Manager
        <HorizontalRule />
        <PassbookBox />
      </div>
    </>
  );
};

export default Sidebar;
