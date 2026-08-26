import prisma from "@/app/lib/prisma";
import { AccountPayload } from "@/app/types";

const getAccountByUserId = async (userId: string) =>
  await prisma.accounts.findMany({
    where: {
      user_id: userId,
    },
  });

const createAccountByUserId = async (payload: AccountPayload) =>
  await prisma.accounts.create({
    data: { ...payload },
  });

const getUserById = async (userId: string) => await prisma.users.findUnique({ where: { id: userId } });

const QUERIES = {
  getAccountByUserId,
  createAccountByUserId,
  getUserById,
};

export default QUERIES;
