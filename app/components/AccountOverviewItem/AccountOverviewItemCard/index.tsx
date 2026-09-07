import { TransactionType } from "@/types";
import { getCardClass } from "@/utils";

const AccountOverviewItemCard = ({ item, value }: { item: string; value: number }) => {
  return (
    <div className={`flex-1 rounded-md ${getCardClass(item.toLowerCase() as TransactionType)} flex flex-col items-center justify-center`}>
      <span className="capitalize text-xl">{item}</span>
      <span className="text-2xl">{`$${value}`}</span>
    </div>
  );
};

export default AccountOverviewItemCard;

