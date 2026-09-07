"use client";
import MobileSidebar from "../components/MobileSidebar";
import SearchBar from "../components/SearchBar";
import { AccountDataProvider } from "../context/AccountDataContext";
import "../globals.css";
import AddButton from "./AddButton";
import Sidebar from "../components/Sidebar";
import { Provider } from "react-redux";
import store from "@/redux/store";
import AccountOverviewList from "@/components/AccountOverviewList";

export default function Home() {

  return (
    <Provider store={store}>
      <AccountDataProvider>
      <nav className="min-h-16 text-white flex items-center px-4 bg-primary">
        <MobileSidebar />
        <span className="font-semibold">Accounts</span>
        <SearchBar />
        <AddButton />
      </nav>
      <section className="w-full flex overflow-hidden flex-1">
        <nav className="w-80 h-full overflow-y-auto overflow-x-hidden hidden md:block shadow-2xl">
          <Sidebar />
        </nav>
        <div className="flex-3 overflow-y-auto overflow-x-hidden">
          <div className="bg-[#ebebeb] flex flex-col gap-6 p-6">
            <AccountOverviewList />
          </div>
        </div>
      </section>
    </AccountDataProvider>
    </Provider>
  );
}
