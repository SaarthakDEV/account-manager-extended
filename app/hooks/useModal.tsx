import { ReactNode, useRef, useState } from "react";
import Dialog from "../components/Dialog";
import { DialogCTA } from "../types";

type DialogState = {
  message: string;
  icon: SVGElement;
  cta: Array<DialogCTA>;
  title: ReactNode;
};

const useDialog = () => {
  const [dialog, setDialog] = useState<DialogState | null>(null);
  const resolveRef = useRef<((result: boolean) => void) | null>(null);
  const confirm = ({ message, icon, cta, title }: DialogState) => {
    return new Promise((resolve) => {
      resolveRef.current = resolve;

      setDialog({
        message,
        icon,
        cta,
        title,
      });
    });
  };

  const handleConfirm = () => {
    resolveRef.current?.(true);
    resolveRef.current = null;
    setDialog(null);
  };

  const handleCancel = () => {
    resolveRef.current?.(false);
    resolveRef.current = null;
    setDialog(null);
  };

  const CustomDialog = (): ReactNode => {
    if (!dialog) {
      return null;
    }

    return (
      <div className="absolute h-screen w-screen top-0 left-0 flex justify-center items-center">
        <Dialog
          open={true}
        >
          <div></div>
        </Dialog>
      </div>
    );
  };

  return {
    confirm,
    CustomDialog,
  };
};

export default useDialog;
