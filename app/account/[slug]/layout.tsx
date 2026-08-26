"use client";
import Link from "next/link";
import "../../globals.css";
import BottomBar from "@/app/components/BottomBar";
import Dialog from "@/app/components/Dialog";
import AddAccountEntry from "@/app/components/AddAccountEntry";
import { useRef, useState } from "react";
import { Plus } from "@/app/icons";
import { CTAs } from "@/app/components/Dialog/Cta";

const Layout = ({ children }: LayoutProps<"/account/[slug]">) => {
  const [openAddAccountEntryDialog, setOpenAddAccountEntryDialog] =
    useState<boolean>(false);
  const addTransactionFormRef = useRef<HTMLFormElement | null>(null);

  const onClickDialogConfirm = () => {
    addTransactionFormRef?.current?.requestSubmit();
  };

  return (
    <html>
      <body className="flex flex-col h-screen">
        <header className="border-1 min-h-16 flex justify-between items-center gap-4 px-4 bg-primary text-white">
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
          <div className="border-1 text-sm flex gap-1 border-white rounded-sm whitespace-nowrap font-semibold hover:opacity-80 p-2 cursor-pointer" onClick={() => setOpenAddAccountEntryDialog((prev) => !prev)}>
            Add new entry <Plus svg={{ className: "cursor-pointer"}}/>
          </div>
        </header>
        {children}
        <BottomBar />
        <Dialog
          heading="Add Account Entry"
          title="Add a credit or debit transaction to your account."
          needFooter
          onConfirm={onClickDialogConfirm}
          onClose={() => setOpenAddAccountEntryDialog(false)}
          open={openAddAccountEntryDialog}
          ctaConfig={{
            [CTAs.CONFIRM]: {
              title: "Confirm",
              onClick: () => {},
            },
            [CTAs.CANCEL]: {
              title: "Cancel",
              onClick: () => {},
            }}
          }
        >
          <AddAccountEntry addTransactionFormRef={addTransactionFormRef} />
        </Dialog>
      </body>
    </html>
  );
};

export default Layout;
