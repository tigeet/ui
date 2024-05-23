import { cn } from "@bem-react/classname";
import clsx from "clsx";
import X from "./svg/x.svg";
import ChevronUp from "./svg/chevron-up.svg";
import ChevronDown from "./svg/chevron-down.svg";
import ChevronLeft from "./svg/chevron-left.svg";
import ChevronRight from "./svg/chevron-right.svg";
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
] as const;

export type IconName = (typeof iconNames)[number];
const icons: Record<IconName, ReactNode> = {
  x: <X />,
  "chevron-up": <ChevronUp />,
  "chevron-down": <ChevronDown />,
  "chevron-left": <ChevronLeft />,
  "chevron-right": <ChevronRight />,
  check: <Check />,
};

type Props = {
  size?: "sm" | "md" | "lg";
  variant?: "primary" | "secondary" | "outline";
  className?: string;
  disabled?: boolean;
  name: IconName;
};

const cnIcon = cn("icon");
const Icon = ({
  className,
  variant = "outline",
  size = "md",
  name,
  disabled = false,
}: Props) => {
  return (
    <span className={clsx(className, cnIcon({ variant, size, disabled }))}>
      {icons[name]}
    </span>
  );
};

export default Icon;
