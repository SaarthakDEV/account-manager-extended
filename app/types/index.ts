import { MouseEventHandler, ReactNode } from "react";
import { CTAs } from "../components/hoc/Dialog/Cta";
import { Moment } from "moment";
import { ColumnDef, RowData, TableFeatures } from "@tanstack/react-table";

export interface AccountOverview {
  id: string | number;
  account_name: string;
  name?: string;
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
  transaction_at: Moment;
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

export const TableOptions = {
  ENABLE_ROW_SELECTION: 'rowSelection',
} as const;

export type TableOptionsType = (typeof TableOptions)[keyof typeof TableOptions];

export interface TableConfig<TData extends RowData> {
  rowData: TData[];
  bodyConfig: ColumnDef<TableFeatures, TData>[];
  options?: Record<TableOptionsType, string | boolean>
}