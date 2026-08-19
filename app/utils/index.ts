import { TRANSACTION, TransactionType } from "../types";

const cardBgClass = {
    [TRANSACTION.CREDIT]: 'bg-[#cfcfcf]',
    [TRANSACTION.BALANCE]: "bg-[#6237b3]",
    [TRANSACTION.DEBIT]: "bg-[#f2f2f2]",

} as const;

// type cardBgClassType = (typeof cardBgClass)[keyof typeof cardBgClass];

export const getCardClass = (type: TransactionType):string => cardBgClass[type];