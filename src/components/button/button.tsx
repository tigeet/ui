import { MouseEventHandler, memo, useCallback } from "react";
import { cn } from "@bem-react/classname";
import clsx from "clsx";
import "./button.css";
import useHover from "@/hooks/useHover";
import usePress from "@/hooks/usePress";
import mergeHandlers from "@/utils/mergeHandlers";
import Icon, { IconName, IconVariant } from "../icon/icon";
import Typography from "../typography/typography";
export type Variant = "primary" | "secondary" | "outline";
export type Size = "sm" | "md" | "lg";

type Props = {
  text?: string;
  icon?: IconName;
  variant?: Variant;
  size?: Size;
  onClick?: MouseEventHandler;
  className?: string;
  as?: JSX.ElementType;
  href?: string;
  disabled?: boolean;
  rounded?: boolean;
};

const mapIconColor: Record<Variant, IconVariant> = {
  primary: "inverse",
  secondary: "secondary",
  outline: "accent",
};
const cnButton = cn("button");
const Button = ({
  className,
  text,
  onClick,
  href = "",
  as = "button",
  icon,
  size = "md",
  variant = "primary",
  disabled = false,
  rounded = false,
}: Props) => {
  const handleClick = useCallback(
    (event: React.MouseEvent) => {
      !disabled && onClick?.(event);
    },
    [disabled, onClick]
  );
  const { hover, hoverHandlers } = useHover();
  const { pressed, pressHandlers } = usePress();

  const ElementTag = href && !disabled ? "a" : as;

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
          pressed,
        })
      )}
      href={href}
      onClick={handleClick}
      {...mergeHandlers(pressHandlers, hoverHandlers)}
    >
      {icon && (
        <Icon
          className="icon"
          name={icon}
          size={size}
          variant={mapIconColor[variant]}
          disabled={disabled}
        />
      )}
      {text && <Typography name={`button-${size}`}>{text}</Typography>}
    </ElementTag>
  );
};
export default memo(Button);
