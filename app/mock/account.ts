import { RowData, TRANSACTION } from "../types";

const account: RowData[] = [
  {
    id: 1,
    description: "Marjie",
    amount: 12,
    type: TRANSACTION.CREDIT,
  },
  {
    id: 2,
    description: "Sloane",
    amount: 23,
    type: TRANSACTION.DEBIT,
  },
  {
    id: 3,
    description: "Tab",
    amount: 435,
    type: TRANSACTION.CREDIT,
  },
  {
    id: 4,
    description: "Charlton",
    amount: 43,
    type: TRANSACTION.DEBIT,
  },
  {
    id: 5,
    description: "Lisha",
    amount: 11,
    type: TRANSACTION.CREDIT,
  },
];
export default account;
