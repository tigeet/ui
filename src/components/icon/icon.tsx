import { cn } from "@bem-react/classname";
import clsx from "clsx";
import X from "./svg/x.svg";
import ChevronUp from "./svg/chevron-up.svg";
import ChevronDown from "./svg/chevron-down.svg";
import ChevronLeft from "./svg/chevron-left.svg";
import ChevronRight from "./svg/chevron-right.svg";
import { ReactNode } from "react";
import "./icon.css";
export const iconNames = [
  "x",
  "chevron-up",
  "chevron-down",
  "chevron-left",
  "chevron-right",
] as const;

type IconName = (typeof iconNames)[number];
const icons: Record<IconName, ReactNode> = {
  x: <X />,
  "chevron-up": <ChevronUp />,
  "chevron-down": <ChevronDown />,
  "chevron-left": <ChevronLeft />,
  "chevron-right": <ChevronRight />,
};

type Props = {
  size?: "sm" | "md" | "lg";
  variant?: "primary" | "secondary" | "outline";
  className?: string;
  name: IconName;
};

const cnIcon = cn("icon");
const Icon = ({ className, variant = "primary", size = "md", name }: Props) => {
  return (
    <span className={clsx(className, cnIcon({ variant, size }))}>
      {icons[name]}
    </span>
  );
};

export default Icon;
