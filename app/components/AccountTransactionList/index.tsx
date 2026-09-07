"use client";

import useRemoveQuery from "@/hooks/useRemoveQuery";
import account from "@/mock/account";
import Table from "../hoc/Table";
import { TableConfig, TableOptions, type TransactionItem } from "@/types";

const AccountTransactionList = ({ id }: { id: string }) => {
  useRemoveQuery(id);

  const getTableConfig = (): TableConfig<TransactionItem> => ({
    rowData: account,
    bodyConfig: [
      {
        accessorKey: "transaction_at",
        header: "Date",
        cell: (info) => {
          const value = info.getValue();

          return typeof value === "string" ? value : null;
        },
      },
      {
        accessorKey: "description",
        header: "Particular",
      },
      {
        accessorKey: "amount",
        header: () => "Amount",
        cell: (info) => <>${info.getValue()}</>,
      },
      {
        accessorKey: "balance",
        header: () => "Amount",
        cell: (info) => <>${info.getValue() ?? 0}</>,
      },
    ],
    options: {
      [TableOptions.ENABLE_ROW_SELECTION]: true
    }
  });

  return (
    <div className="flex-1">
      <Table getTableConfig={getTableConfig} />
    </div>
  );
};

export default AccountTransactionList;
