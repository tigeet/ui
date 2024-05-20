"use client";
import { useUser } from "@auth0/nextjs-auth0/client";
import { FormEvent, memo, useCallback } from "react";

const Page = async () => {
  const { user } = useUser();

  if (!user) throw Error("Unauthorized");

  return <form></form>;
};

export default memo(Page);
