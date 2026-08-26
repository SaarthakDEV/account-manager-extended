import { NextRequest } from "next/server";
import QUERIES from "@/prisma/query"

type Params = {
  userId: string;
};

export const GET = async (
  req: NextRequest,
  { params }: { params: Promise<Params> },
) => {
  const { userId } = await params;
  const userAccounts = await QUERIES.getAccountByUserId(userId);
  return Response.json({ message: "ok", accounts: userAccounts });
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
  const addedAccount = await QUERIES.createAccountByUserId(newAccount)
  return Response.json({ account: addedAccount, message: "Account added successfully"})
};
