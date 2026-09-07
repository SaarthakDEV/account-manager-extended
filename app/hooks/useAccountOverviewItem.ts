import { CTAs } from "@/components/hoc/Dialog/Cta";
import { AccountOverview } from "@/types";
import { useRouter } from "next/navigation";
import { ChangeEvent, MouseEventHandler, useEffect, useMemo, useRef, useState } from "react";
import { DialogState } from "./useConfirmationModal";

const useAccountOverviewItem = (rowData: AccountOverview, confirm: (value: DialogState) => Promise<boolean>) => {
  const router = useRouter();
  const {
    account_name,
    id,
    record: { credit, debit },
  } = rowData;
  const accountNameRef = useRef<HTMLInputElement>(null);
  const [isEditMode, setIsEditMode] = useState(false);
  const [accountName, setAccountName] = useState(account_name);

  const transaction = useMemo(
    () => ({
      credit,
      debit,
      balance: credit + debit,
    }),
    [credit, debit],
  );

  const handleAccountOverviewItemClick = () => {
    if(isEditMode) return;
    router.push(`/account/${id}?name=${account_name}`);
  };

  const handleActionsClick: MouseEventHandler<HTMLDivElement> = (e) => {
    e.stopPropagation();
  };

  const handleAccountRenameClick: MouseEventHandler<HTMLDivElement> = (e) => {
    setIsEditMode(true);
  };

  const handleRenameCancelClick: MouseEventHandler<HTMLDivElement> = (e) => {
    setIsEditMode(false);
    setAccountName(account_name);
  };

  const handleRenameConfirmClick: MouseEventHandler<HTMLDivElement> = async () => {
    if(accountName === account_name) return;
    const result = await confirm({
        message: `Are you want to change account name from ${account_name} to ${accountName}?`,
        title: `Confirm to proceed`,
        cta: [CTAs.CONFIRM, CTAs.CANCEL]
    })
  };

  const handleAccountNameEdit = (e: ChangeEvent<HTMLInputElement>) => {
    setAccountName(e.target.value);
  }

  useEffect(() => {
    if (isEditMode) {
      accountNameRef.current?.focus();
    }
  }, [isEditMode]);

  return {
    isEditMode,
    accountName,
    accountNameRef,
    handleAccountOverviewItemClick,
    transaction,
    handleActionsClick,
    handleAccountRenameClick,
    handleRenameConfirmClick,
    handleRenameCancelClick,
    handleAccountNameEdit,
  };
};

export default useAccountOverviewItem;
