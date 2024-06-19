import { cn } from "@bem-react/classname";
import clsx from "clsx";
import React, { ChangeEventHandler } from "react";
import useHover from "@/hooks/useHover";
import "./toggle.css";

type Props = {
  className?: string;
  checked: boolean;
  onChange?: ChangeEventHandler;
  disabled?: boolean;
};

const cnToggle = cn("toggle");
const Toggle = ({ className, checked, onChange, disabled = false }: Props) => {
  const { hover, hoverHandlers } = useHover();

  return (
    <span
      className={clsx(
        className,
        cnToggle({ disabled, checked, hover: !disabled && hover })
      )}
      {...hoverHandlers}
    >
      <input
        type="checkbox"
        className={cnToggle("control")}
        checked={checked}
        disabled={disabled}
        onChange={(event) => !disabled && onChange?.(event)}
      />
      <span className={cnToggle("whitespace", { checked })} />
      <span
        className={cnToggle("pin", { checked, hover: !disabled && hover })}
      ></span>
    </span>
  );
};

export default Toggle;
