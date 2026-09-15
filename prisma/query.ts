import { Prisma } from "@/generated/prisma/client";
import prisma from "@/lib/prisma";
import { AccountPayload } from "@/types";

const getAccountsByUserId = async (userId: string) =>
  await prisma.accounts.findMany({
    where: {
      user_id: userId,
    },
  });

const createAccountByUserId = async (payload: AccountPayload) => {
  const { name, user_id, credit, debit, balance } = payload;
  const data: Prisma.accountsUncheckedCreateInput = {
    name,
    user_id,
    credit,
    debit,
    balance,
  };
  const addedAccount = await prisma.accounts.create({ data });
  return addedAccount;
};

const getUserById = async (userId: string) =>
  await prisma.users.findUnique({ where: { id: userId } });

const deleteAccount = async (userId: string, accountId: string) => {
  const account = await prisma.accounts.findFirst({
    where: {
      user_id: userId,
      id: accountId,
    },
  });
  if (account) {
    await prisma.accounts.delete({
      where: {
        user_id: userId,
        id: accountId,
      },
    });
  }
  return account;
};

const renameAccountName = async (
  userId: string,
  accountId: string,
  newName: string,
) =>
  await prisma.accounts.update({
    where: {
      id: accountId,
      user_id: userId,
    },
    data: {
      name: newName,
    },
  });

const QUERIES = {
  getAccountsByUserId,
  createAccountByUserId,
  getUserById,
  deleteAccount,
  renameAccountName,
};

export default QUERIES;
