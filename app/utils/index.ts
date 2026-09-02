import moment from "moment";
import { TRANSACTION, TransactionType } from "../types";

const cardBgClass = {
    [TRANSACTION.CREDIT]: 'bg-[#cfcfcf]',
    [TRANSACTION.BALANCE]: "bg-[#6237b3]",
    [TRANSACTION.DEBIT]: "bg-[#f2f2f2]",

} as const;

// type cardBgClassType = (typeof cardBgClass)[keyof typeof cardBgClass];

export const getCardClass = (type: TransactionType):string => cardBgClass[type];

export const getDateToFormat = (providedDate: Date | undefined): string => providedDate ? moment(providedDate).format("DD-MM-YYYY") : "DD-MM-YYYY";

export const isValidObject = (obj: object) => Object.keys(obj).length > 0;