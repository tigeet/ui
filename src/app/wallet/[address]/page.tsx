import prisma from "@/db";
import { Prisma } from "@prisma/client";
import { memo } from "react";
type Params = {
  address: string;
};
type Props = {
  params: Params;
};
const Page = async ({ params }: Props) => {
  const { address } = params;
  const wallet = await prisma.wallet.findUnique({ where: { id: address } });
  if (!wallet) return <div>Wallet {address} not found</div>;

  return <div>{wallet?.address + " " + wallet?.description}</div>;
};
export default memo(Page);
