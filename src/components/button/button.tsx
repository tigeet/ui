"use client";
import { MouseEventHandler, ReactNode, memo, useCallback } from "react";
import { cn } from "@bem-react/classname";
import clsx from "clsx";
import "./button.css";
import useHover from "@/hooks/useHover";
export type Variant = "primary" | "secondary" | "outline";
export type Size = "sm" | "md" | "lg";

type Props = {
  text?: string;
  icon?: ReactNode;
  variant?: Variant;
  size?: Size;
  onClick?: MouseEventHandler;
  className?: string;
  as?: JSX.ElementType;
  href?: string;
  disabled?: boolean;
  rounded?: boolean;
};

const cnButton = cn("button");
const Button = ({
  className,
  text,
  onClick,
  as: ElementTag = "button",
  icon,
  size = "md",
  variant = "primary",
  disabled = false,
  rounded = false,
}: Props) => {
  const handleClick = useCallback(
    (event: React.MouseEvent) => {
      onClick?.(event);
    },
    [onClick]
  );
  const { hover, hoverHandlers } = useHover();
  return (
    <ElementTag
      className={clsx(
        className,
        cnButton({
          size,
          variant,
          squared: Boolean(icon) && !text,
          rounded,
          disabled,
          hover,
        })
      )}
      onClick={handleClick}
      {...hoverHandlers}
    >
      {icon && <span className={cnButton("icon")}>{icon}</span>}
      {text && <span className={cnButton("text")}>{text}</span>}
    </ElementTag>
  );
};
export default memo(Button);
