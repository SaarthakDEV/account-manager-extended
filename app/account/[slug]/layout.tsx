import Link from "next/link";
import "../../globals.css";
import BottomBar from "@/app/components/BottomBar";

const Layout = ({ children }: LayoutProps<"/account/[slug]">) => {
  return (
    <html>
    <body className="flex flex-col h-screen">
      <header className="border-1 min-h-16 flex items-center gap-4 px-4 bg-primary text-white">
        <Link
          href="/"
          className="flex items-center gap-2 hover:opacity-80 transition"
          aria-label="Back to accounts"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="20"
            height="20"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          >
            <path d="M19 12H5M12 19l-7-7 7-7" />
          </svg>
          <span className="font-semibold">Accounts</span>
        </Link>
      </header>
      {children}
        <BottomBar />
    </body>
    </html>
  );
};

export default Layout;