"use client";
import { MouseEventHandler, ReactNode, memo, useCallback } from "react";
import { cn } from "@bem-react/classname";
import clsx from "clsx";
type Props = {
  text?: string;
  icon?: ReactNode;
  variant?: "primary" | "secondary" | "outline";
  size?: "sm" | "md" | "lg";
  onClick?: MouseEventHandler;
  className?: string;
  as?: JSX.ElementType;
  href?: string;
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
}: Props) => {
  const handleClick = useCallback(
    (event: React.MouseEvent) => {
      onClick?.(event);
    },
    [onClick]
  );

  return (
    <ElementTag
      className={clsx(
        className,
        cnButton({ size, variant, squared: Boolean(icon) })
      )}
      onClick={handleClick}
    >
      {icon && <span>{icon}</span>}
      <span>{text}</span>
    </ElementTag>
  );
};
export default memo(Button);
