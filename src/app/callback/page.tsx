"use client";
import { useQuery } from "@tanstack/react-query";
import { memo } from "react";
import getUser from "./actions";

const Page = () => {
  const { data } = useQuery({
    queryKey: ["callback"],
    queryFn: async () => await getUser(),
  });

  return <>Auth Callback</>;
};
export default memo(Page);
