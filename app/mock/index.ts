import { type RowData, TRANSACTION } from "../types";

export const mock: RowData[] = [
  {
    id: 1,
    name: "Enriqueta",
    transaction: {
      debit: 3.28,
      balance: 4.71,
      credit: 2.59,
    },
  },
  {
    id: 2,
    name: "Alys",
    transaction: {
      debit: 2.22,
      balance: 7.73,
      credit: 0.02,
    },
  },
  {
    id: 3,
    name: "Nehemiah",
    transaction: {
      debit: 8.1,
      balance: 4.04,
      credit: 2.28,
    },
  },
  {
    id: 4,
    name: "Linoel",
    transaction: {
      debit: 9.31,
      balance: 6.77,
      credit: 8.13,
    },
  },
  {
    id: 5,
    name: "Vilhelmina",
    transaction: {
      debit: 3.98,
      balance: 6.07,
      credit: 1.2,
    },
  },
];
