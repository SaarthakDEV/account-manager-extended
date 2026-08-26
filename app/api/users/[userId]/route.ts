import QUERIES from "@/prisma/query";
import { NextRequest } from "next/server";

type Params = {
  userId: string;
};

export const GET = async (
  _: NextRequest,
  { params }: { params: Promise<Params> },
) => {
  const { userId } = await params;
  const user = await QUERIES.getUserById(userId)
  return Response.json({ user });
};