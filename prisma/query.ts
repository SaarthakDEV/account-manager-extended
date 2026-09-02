import { Prisma } from "@/app/generated/prisma/client";
import prisma from "@/app/lib/prisma";
import { AccountPayload } from "@/app/types";

const getAccountsByUserId = async (userId: string) =>
  await prisma.accounts.findMany({
    where: {
      user_id: userId,
    },
  });

const createAccountByUserId = async (payload: AccountPayload) => {
  const { name, user_id , credit, debit, balance } = payload
  const data: Prisma.accountsUncheckedCreateInput = {
    name,
    user_id,
    credit,
    debit,
    balance,
  };
  await prisma.accounts.create({ data });
};


const getUserById = async (userId: string) =>
  await prisma.users.findUnique({ where: { id: userId } });

const QUERIES = {
  getAccountsByUserId,
  createAccountByUserId,
  getUserById,
};

export default QUERIES;
