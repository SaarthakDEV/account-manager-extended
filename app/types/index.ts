import { MouseEventHandler, ReactNode } from "react";
import { CTAs } from "../components/hoc/Dialog/Cta";

export interface AccountOverview {
  id: string | number;
  account_name: string;
  record: {
    [key in TransactionType]: number;
  }
}

export const TRANSACTION = {
  CREDIT: "credit",
  DEBIT: "debit",
  BALANCE: "balance",
} as const;

export type TransactionItem = {
  amount: string;
  account_id: string;
  transaction_id: string;
  description: string;
  type: TransactionType;
  transaction_at: Date;
  balance?: string;
}

export type TransactionType = (typeof TRANSACTION)[keyof typeof TRANSACTION];

export type DialogCTA = {
  label: ReactNode;
  color: string;
  icon?: SVGElement;
};

export type CTATypeKey = (typeof CTAs)[keyof typeof CTAs];

export type CTAButton = {
  [key in CTATypeKey]?: {
    title: string;
    className?: string;
    icon?: SVGSVGElement;
    onClick: MouseEventHandler;
  };
};

export type AccountPayload = {
  name: string,
  credit?: number,
  debit?: number,
  balance?: number,
  user_id?: string,
}