import { MouseEventHandler, ReactNode } from "react";
import { CTAs } from "../components/Dialog/Cta";

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
  BALANCE: "balance",
} as const;

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
