import { MouseEventHandler, memo } from "react";
import { cn } from "@bem-react/classname";
import clsx from "clsx";
import "./iconButton.css";
import useHover from "@/hooks/useHover";
import Icon, { IconName, IconVariant } from "../icon/icon";
export type Variant = "primary" | "secondary" | "outline";
export type Size = "sm" | "md" | "lg";

type Props = {
  className?: string;
  onClick?: MouseEventHandler;
  icon: IconName;
  size?: Size;
  variant: IconVariant;
  disabled?: boolean;
  hover?: boolean;
  rounded?: boolean;
  strong?: boolean;
};

const cnIconButton = cn("iconButton");
const IconButton = ({
  className,
  onClick,
  variant,
  icon,
  strong = false,
  hover: forceHover = false,
  size = "md",
  disabled = false,
  rounded = true,
}: Props) => {
  const { hover, hoverHandlers } = useHover();

  return (
    <button
      className={clsx(
        className,
        cnIconButton({
          hover: hover || forceHover,
          disabled,
          rounded,
          size,
          strong,
        })
      )}
      {...hoverHandlers}
      onClick={onClick}
    >
      <Icon
        className={cnIconButton("icon")}
        name={icon}
        variant={variant}
        size={size}
        hover={hover || forceHover}
        disabled={disabled}
      />
    </button>
  );
};
export default memo(IconButton);
