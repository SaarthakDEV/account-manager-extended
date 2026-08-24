import { ReactNode } from "react";

export interface RowData {
  id: string | number;
  name: string;
  transaction: {
    [key in TransactionType]: number;
  };
}

export const TRANSACTION = {
    CREDIT: "credit",
    DEBIT: "debit",
    BALANCE: "balance"
} as const;

export type TransactionType = typeof TRANSACTION[keyof typeof TRANSACTION];

export type DialogCTA = {
  label: ReactNode,
  color: string,
  icon?: SVGElement
}