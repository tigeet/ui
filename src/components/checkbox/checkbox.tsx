import { cn } from "@bem-react/classname";
import clsx from "clsx";
import React, { ChangeEventHandler, useCallback, useMemo, useRef } from "react";
import "./checkbox.css";
import useHover from "@/hooks/useHover";
import Icon from "../icon/icon";
import Typography from "../typography/typography";

type Props = {
  className?: string;
  checked?: boolean;
  label?: string;
  labelPosition?: "left" | "right";
  onChange?: ChangeEventHandler;
  disabled?: boolean;
};
const cnCheckbox = cn("checkbox");
const Checkbox = ({
  className,
  checked = false,
  onChange,
  disabled = false,
  label,
  labelPosition,
}: Props) => {
  const { hover, hoverHandlers } = useHover();
  const controlRef = useRef<HTMLInputElement | null>(null);
  const handleClick = useCallback(
    () => !disabled && controlRef.current?.click(),
    [disabled]
  );
  const box = useMemo(
    () => (
      <span
        className={clsx(
          className,
          cnCheckbox("box", {
            disabled,
            checked,
            hover: !disabled && hover,
          })
        )}
        onClick={(e) => e.stopPropagation()}
        {...hoverHandlers}
      >
        <input
          ref={controlRef}
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
    ),
    [checked, className, disabled, hover, hoverHandlers, onChange]
  );

  if (!label) return box;

  return (
    <div className={cnCheckbox({ labelPosition })} onClick={handleClick}>
      {label && (
        <Typography
          as="label"
          className={cnCheckbox("label")}
          name="checkbox-label"
        >
          {label}
        </Typography>
      )}
      {box}
    </div>
  );
};

export default Checkbox;
