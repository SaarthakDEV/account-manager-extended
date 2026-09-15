import { TransactionType } from "@/types";
import { getCardClass } from "@/utils";
import { useSelector } from "react-redux";

const AccountOverviewItemCard = ({ item, value }: { item: string; value: number }) => {
  const { prefferedCurrency } = useSelector((state: { user: { prefferedCurrency: string }}) => state.user);
  
  return (
    <div className={`flex-1 rounded-md ${getCardClass(item.toLowerCase() as TransactionType)} flex flex-col items-center justify-center`}>
      <span className="capitalize text-xl">{item}</span>
      <span className="text-2xl">{`${prefferedCurrency}${value}`}</span>
    </div>
  );
};

export default AccountOverviewItemCard;

