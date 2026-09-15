import HorizontalRule from "@/components/HorizontalRule";
import { RootState } from "@/redux/store";
import { AccountOverview, LedgerTransactionType, TRANSACTION } from "@/types";
import { useMemo } from "react";
import { useSelector } from "react-redux";

const PassbookBox = () => {
  const { accounts, searchQuery } = useSelector(
    (state: RootState) => state.accounts,
  );
  const { prefferedCurrency } = useSelector((state: RootState) => state.user);
  const passbookLedger = useMemo(() => {
    const filteredAccounts = searchQuery
      ? accounts.filter((account: AccountOverview) =>
          account.account_name
            .toLowerCase()
            .includes(searchQuery.toLowerCase()),
        )
      : accounts;

    const { debit, credit } = filteredAccounts.reduce(
      (acc, account: { debit: number; credit: number }) => ({
        debit: Number(acc.debit) + Number(account.debit),
        credit: Number(acc.credit) + Number(account.credit),
      }),
      {
        debit: 0,
        credit: 0,
      },
    );

    return {
      [TRANSACTION.CREDIT]: {
        label: "credit(+)",
        value: credit,
      },
      [TRANSACTION.DEBIT]: {
        label: "debit(-)",
        value: debit,
      },
    };
  }, [searchQuery, accounts]);

  return (
    <div className="w-full p-2 bg-[#6e48bb]">
      {(Object.keys(passbookLedger) as LedgerTransactionType[]).map(
        (key, index) => (
          <div key={index} className="w-full flex justify-between font-medium">
            <span>{prefferedCurrency}{passbookLedger[key].label}</span>
            <span>{prefferedCurrency}{passbookLedger[key].value}</span>
          </div>
        ),
      )}
      <HorizontalRule classes="mt-1" />
      <div className="w-full flex justify-between">
        <span>Balance</span>
        <span>
          {prefferedCurrency}
          {passbookLedger[TRANSACTION.DEBIT].value +
            passbookLedger[TRANSACTION.CREDIT].value}
        </span>
      </div>
    </div>
  );
};

export default PassbookBox;
