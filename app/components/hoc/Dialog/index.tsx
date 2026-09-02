import { CTAButton } from "@/app/types";
import type { FC, ReactNode } from "react";
import CTA from "./Cta";
import { Cross } from "@/app/icons";

interface DialogProps {
  heading: string;
  title?: string;
  open: boolean;
  needFooter?: boolean;
  onClose?: () => void;
  onConfirm?: () => void;
  children: ReactNode;
  ctaConfig?: CTAButton;
}

const Dialog: FC<DialogProps> = ({
  heading,
  title,
  open,
  needFooter = false,
  ctaConfig = {},
  onClose = () => {},
  children,
}) => {
  if (!open) return <></>;
  return (
    <div className="h-screen w-screen absolute flex justify-center items-center top-0 left-0">
      <div className="static w-[50vw] rounded-xl shadow-2xl flex flex-col bg-gray-50">
        <div className="p-4">
          <div className="flex">
            <h2 className="text-xl flex-1 font-semibold text-gray-900">
              {heading}
            </h2>
            {
              !needFooter && <Cross
              SVG={{
                className: "cursor-pointer text-red-500 hover:text-red-400 transition",
                onClick: onClose,
              }}
            />}
          </div>
          <p className="mt-1 text-sm text-gray-500">{title}</p>
        </div>

        <div className="flex-1 p-4">{children}</div>
        {needFooter && (
          <footer className="h-16 flex justify-center items-center gap-10 bg-gray-100 rounded-b-xl">
            <CTA {...ctaConfig} />
          </footer>
        )}
      </div>
    </div>
  );
};

export default Dialog;
