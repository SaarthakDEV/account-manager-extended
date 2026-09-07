import { ReactNode, useRef, useState } from "react";
import Dialog from "../components/hoc/Dialog";
import { CTATypeKey } from "../types";
import { CTAs } from "@/components/hoc/Dialog/Cta";

export type DialogState = {
  message: string;
  icon?: SVGElement;
  cta: Array<CTATypeKey>;
  title: ReactNode;
};

const useConfirmationModal = () => {
  const [dialog, setDialog] = useState<DialogState | null>(null);
  const resolveRef = useRef<((result: boolean) => void) | null>(null);
  const confirm = ({ message, icon, cta, title }: DialogState) => {
    return new Promise<boolean>((resolve) => {
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

  const ctaConfig = {
    ...(dialog?.cta.includes(CTAs.CONFIRM) ? {
      [CTAs.CONFIRM]: {
        title: "Confirm",
        onClick: handleConfirm
      }
    } : {}),
    ...(dialog?.cta.includes(CTAs.CANCEL) ? {
      [CTAs.CONFIRM]: {
        title: "Cancel",
        onClick: handleCancel
      }
    } : {})
  }

  const CustomDialog = (): ReactNode => {
    if (!dialog) {
      return null;
    }

    return (
      <div className="absolute h-screen w-screen top-0 left-0 flex justify-center items-center">
        <Dialog
          heading={dialog.title}
          open={true}
          ctaConfig={ctaConfig}
          needFooter
        > 
          {dialog.message}
        </Dialog>
      </div>
    );
  };

  return {
    confirm,
    CustomDialog,
  };
};

export default useConfirmationModal;
