import moment from "moment";
import { TRANSACTION, TransactionType } from "../types";

const cardBgClass = {
    [TRANSACTION.DEBIT]: "bg-[#f2f2f2] text-gray-700 font-medium",
    [TRANSACTION.CREDIT]: 'bg-[#cfcfcf] text-gray-700 font-medium',
    [TRANSACTION.BALANCE]: "bg-[#6237b3] text-white font-semibold",

} as const;

export const getCardClass = (type: TransactionType):string => cardBgClass[type];

export const getDateToFormat = (providedDate: Date | undefined): string => providedDate ? moment(providedDate).format("DD-MM-YYYY") : "DD-MM-YYYY";

export const isValidObject = (obj: object) => Object.keys(obj).length > 0;