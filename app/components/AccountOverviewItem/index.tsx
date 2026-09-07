"use client";
import AccountOverviewItemCard from "@/components/AccountOverviewItem/AccountOverviewItemCard";

import { AccountOverview, TransactionType } from "@/types";
import { Cross, Delete, Edit, Tick } from "@/icons";
import IconBox, { COLOR } from "@/components/hoc/IconBox";
import useAccountOverviewItem from "@/hooks/useAccountOverviewItem";
import useConfirmationModal from "@/hooks/useConfirmationModal";

const AccountOverviewItem = ({ rowData }: { rowData: AccountOverview }) => {
  const { confirm, CustomDialog } = useConfirmationModal();
  const {
    handleAccountOverviewItemClick,
    accountNameRef,
    isEditMode,
    transaction,
    accountName,
    handleActionsClick,
    handleAccountRenameClick,
    handleRenameConfirmClick,
    handleRenameCancelClick,
    handleAccountNameEdit,
  } = useAccountOverviewItem(rowData, confirm);

  return (
    <>
    <div
      onClick={handleAccountOverviewItemClick}
      className={`bg-white rounded-md min-h-50 p-4 ${!isEditMode && "cursor-pointer"} flex flex-col gap-4`}
    >
      <div className="flex-1 flex items-center justify-between w-full">
        {isEditMode ? (
          <input
            ref={accountNameRef}
            value={accountName}
            onChange={handleAccountNameEdit}
            onClick={handleActionsClick}
            className="focus:outline-primary px-2 py-1 text-2xl font-semibold"
          />
        ) : (
          <div className="text-gray-800 font-semibold px-2 py-1 text-2xl overflow-hidden text-ellipsis flex-1">
            {accountName}
          </div>
        )}
        <div
          className="px-2 py-1 flex justify-center gap-2 items-center rounded-md bg-white"
          onClick={handleActionsClick}
        >
          {isEditMode ? (
            <>
              <IconBox color={COLOR.GREEN} onClick={handleRenameConfirmClick}>
                <Tick />
              </IconBox>
              <IconBox color={COLOR.RED} onClick={handleRenameCancelClick}>
                <Cross />
              </IconBox>
            </>
          ) : (
            <>
              <IconBox color={COLOR.RED}>
                <Delete />
              </IconBox>
              <IconBox color={COLOR.BLUE} onClick={handleAccountRenameClick}>
                <Edit />
              </IconBox>
            </>
          )}
        </div>
      </div>
      <div className="flex flex-3 gap-3">
        {(Object.entries(transaction) as [TransactionType, number][]).map(
          ([key, value], index) => (
            <AccountOverviewItemCard key={index} item={key} value={value} />
          ),
        )}
      </div>
    </div>
    <CustomDialog />
    </>
  );
};

export default AccountOverviewItem;
