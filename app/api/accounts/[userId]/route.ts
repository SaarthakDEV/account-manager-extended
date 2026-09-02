import { NextRequest } from "next/server";
import QUERIES from "@/prisma/query";
import { TRANSACTION } from "@/app/types";

type Params = {
  userId: string;
};

export const GET = async (
  req: NextRequest,
  { params }: { params: Promise<Params> },
) => {
  const { userId } = await params;
  const userAccounts = await QUERIES.getAccountsByUserId(userId);
  return Response.json({
    message: "ok",
    accounts: userAccounts.map((userAccount) => ({
      ...userAccount,
      record: {
        [TRANSACTION.CREDIT]: userAccount.credit,
        [TRANSACTION.DEBIT]: userAccount.debit,
      },
    })),
  });
};

export const POST = async (
  req: NextRequest,
  { params }: { params: Promise<Params> },
) => {
  const { userId } = await params;
  const { accountName } = await req.json();
  const newAccount = {
    user_id: userId,
    name: accountName,
  };
  const addedAccount = await QUERIES.createAccountByUserId(newAccount);
  return Response.json({
    account: addedAccount,
    message: "Account added successfully",
  });
};
