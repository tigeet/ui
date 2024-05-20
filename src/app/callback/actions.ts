"use server";
import prisma from "@/db";
import { getSession } from "@auth0/nextjs-auth0";

export default async function getUser() {
  const session = await getSession();
  const sub = session?.user?.sub;
  if (!sub) return { status: false };
  const dbUser = await prisma.user.findUnique({ where: { auth0id: sub } });
  if (!dbUser) {
    //  add user to database
  }
  return { status: true };
}
