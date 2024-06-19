import { cn } from "@bem-react/classname";
import clsx from "clsx";
import React, { ChangeEventHandler } from "react";
import "./checkbox.css";
import useHover from "@/hooks/useHover";
import Icon from "../icon/icon";

type Props = {
  className?: string;
  checked: boolean;
  onChange?: ChangeEventHandler;
  disabled?: boolean;
};
const cnCheckbox = cn("checkbox");
const Checkbox = ({
  className,
  checked,
  onChange,
  disabled = false,
}: Props) => {
  const { hover, hoverHandlers } = useHover();

  return (
    <span
      className={clsx(
        className,
        cnCheckbox({ disabled, checked, hover: !disabled && hover })
      )}
      {...hoverHandlers}
    >
      <input
        type="checkbox"
        className={cnCheckbox("control")}
        checked={checked}
        disabled={disabled}
        onChange={(event) => !disabled && onChange?.(event)}
      />

      {checked && (
        <Icon
          name="check"
          disabled={disabled}
          className={cnCheckbox("tick")}
          variant="inverse"
          size="sm"
        />
      )}
    </span>
  );
};

export default Checkbox;
