import { cn } from "@bem-react/classname";
import clsx from "clsx";
import X from "./svg/x.svg";
import ChevronUp from "./svg/chevron-up.svg";
import ChevronDown from "./svg/chevron-down.svg";
import ChevronLeft from "./svg/chevron-left.svg";
import ChevronRight from "./svg/chevron-right.svg";
import Search from "./svg/search.svg";
import Check from "./svg/check.svg";
import { ReactNode } from "react";
import "./icon.css";
export const iconNames = [
  "x",
  "chevron-up",
  "chevron-down",
  "chevron-left",
  "chevron-right",
  "check",
  "search",
] as const;

export type IconName = (typeof iconNames)[number];
const icons: Record<IconName, ReactNode> = {
  x: <X />,
  "chevron-up": <ChevronUp />,
  "chevron-down": <ChevronDown />,
  "chevron-left": <ChevronLeft />,
  "chevron-right": <ChevronRight />,
  check: <Check />,
  search: <Search />,
};

export type IconVariant = "primary" | "secondary" | "accent" | "inverse";
export type IconSize = "sm" | "md" | "lg";
type Props = {
  size?: IconSize;
  variant?: IconVariant;
  className?: string;
  disabled?: boolean;
  name: IconName;
  hover?: boolean;
};

const cnIcon = cn("icon");
const Icon = ({
  className,
  variant = "primary",
  size = "md",
  name,
  hover = false,
  disabled = false,
}: Props) => {
  return (
    <span
      className={clsx(className, cnIcon({ variant, size, disabled, hover }))}
    >
      {icons[name]}
    </span>
  );
};

export default Icon;
