import { CTAs } from "@/components/Dialog/Cta";
import { AccountOverview } from "@/types";
import { useRouter } from "next/navigation";
import { ChangeEvent, MouseEventHandler, useEffect, useMemo, useRef, useState } from "react";
import { DialogState } from "@/hooks/useConfirmationModal";
import useAppDispatch from "@/hooks/useAppDispatch";
import { deleteAccount, renameAccount } from "../services";

const useAccountOverviewItem = (rowData: AccountOverview, confirm: (value: DialogState) => Promise<boolean>) => {
  const router = useRouter();
  const dispatch = useAppDispatch();
  const {
    account_name,
    id,
    record: { credit, debit },
  } = rowData;
  const accountNameRef = useRef<HTMLInputElement>(null);
  const [isEditMode, setIsEditMode] = useState(false);
  const [accountName, setAccountName] = useState(account_name);
  const [selectedAccountId, setSelectedAccountId] = useState<string | null>(null);

  const transaction = useMemo(
    () => ({
      credit: Number(credit),
      debit: Number(debit),
      balance: Number(credit) + Number(debit),
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

  const handleAccountRenameClick = (accountId: string) => {
    setIsEditMode(true);
    setSelectedAccountId(accountId);
  };

  const handleRenameCancelClick = () => {
    setIsEditMode(false);
    setAccountName(account_name);
    setSelectedAccountId(null);
  };

  const handleRenameConfirmClick: MouseEventHandler<HTMLDivElement> = async () => {
    console.log(selectedAccountId);
    if(!selectedAccountId) return;
    if(accountName === account_name) return;
    const result = await confirm({
        message: `Are you want to change account name from ${account_name} to ${accountName}?`,
        title: `Confirm to proceed`,
        cta: [CTAs.CONFIRM, CTAs.CANCEL]
    })
    if(result){
      dispatch(renameAccount({ userId: process.env.NEXT_PUBLIC_USER_ID!, accountId: selectedAccountId, accountUpdatedName: accountName}));
    }
    setIsEditMode(false);
    setAccountName("")
    setSelectedAccountId(null);
  };

  const handleAccountNameEdit = (e: ChangeEvent<HTMLInputElement>) => {
    setAccountName(e.target.value);
  }

  const handleAccountDeleteClick = async (accountId: string) => {
    const result = await confirm({
      message: 'Are you sure you want to delete this account permanently?',
      title: "Confirm to delete",
      cta: [CTAs.CONFIRM, CTAs.CANCEL]
    });
    if(result){
      dispatch(deleteAccount({ userId: process.env.NEXT_PUBLIC_USER_ID!, accountId: accountId }));
    }
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
    handleAccountDeleteClick,
  };
};

export default useAccountOverviewItem;
