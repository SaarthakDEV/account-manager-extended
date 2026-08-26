import type { FC, ReactNode } from "react";

interface DialogProps {
  open: boolean;
  needFooter?: boolean;
  onClose?: () => void;
  onConfirm?: () => void;
  children: ReactNode;
}

const Dialog: FC<DialogProps> = ({
  open,
  needFooter = false,
  onClose = () => {},
  onConfirm = () => {},
  children,
}) => {
  if (!open) return <></>;
  return (
    <div className="h-screen w-screen absolute flex justify-center items-center top-0 left-0">
      <div className="static min-h-[40vh] w-[50vw] rounded-xl shadow-2xl flex flex-col bg-gray-50">
        <div className="flex-1 p-4">{children}</div>
        {needFooter && (
          <footer className="h-16 flex justify-center items-center gap-10 bg-gray-100 rounded-b-xl">
            <button
              onClick={onConfirm}
              className="py-1.5 px-6 cursor-pointer bg-green-500 rounded-md text-white shadow-lg"
            >
              Confirm
            </button>
            <button
              onClick={onClose}
              className="py-1.5 px-6 cursor-pointer bg-red-500 rounded-md text-white shadow-lg"
            >
              Cancel
            </button>
          </footer>
        )}
      </div>
    </div>
  );
};

export default Dialog;
