import { createContext } from "react";
import { TOption } from "../types";

type Context = {
  options: TOption[];
  selected: string | undefined;
  // hovered: string | undefined;
  register: (option: TOption) => void;
  select: (value: string) => void;
  // hover: (value: string) => void;
};

export const SelectContext = createContext<Context | null>(null);
