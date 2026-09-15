import { NextRequest } from "next/server";
import QUERIES from "../../../../../prisma/query";

export const GET = async () => {
  return Response.json({ "message": "ok" })
}

export const DELETE = async (
  _: NextRequest,
  { params }: { params: Promise<{ userId: string; accountId: string }> },
) => {
  const { userId, accountId } = await params;
  const result = await QUERIES.deleteAccount(userId, accountId);
  if (!result)
    return Response.json(
      { status: false, message: "Failed to delete account or account doesn't exist" },
      { status: 400 },
    );
  return Response.json({ status: true, deletedAccount: result }, { status: 200 });
};

export const PATCH = async (req: NextRequest, { params }: { params: Promise<{ userId: string; accountId: string }> }) => {
  const { userId, accountId } = await params;
  const { updatedAccountName } = await req.json();
  const result = await QUERIES.renameAccountName(userId, accountId, updatedAccountName);
  return result;
}