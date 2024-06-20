import { cn } from "@bem-react/classname";
import clsx from "clsx";
import React, { ChangeEventHandler, useCallback, useMemo, useRef } from "react";
import useHover from "@/hooks/useHover";
import "./toggle.css";
import Typography from "../typography/typography";

type Props = {
  className?: string;
  checked?: boolean;
  onChange?: ChangeEventHandler;
  disabled?: boolean;
  label?: string;
  labelPosition?: "left" | "right";
};

const cnToggle = cn("toggle");
const Toggle = ({
  className,
  checked,
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
          cnToggle("box", { disabled, checked, hover: !disabled && hover })
        )}
        {...hoverHandlers}
        onClick={(e) => e.stopPropagation()}
      >
        <input
          ref={controlRef}
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
    ),
    [checked, className, disabled, hover, hoverHandlers, onChange]
  );

  if (!label) return box;

  return (
    <div className={cnToggle({ labelPosition })} onClick={handleClick}>
      {label && (
        <Typography
          as="label"
          className={cnToggle("label")}
          name="checkbox-label"
        >
          {label}
        </Typography>
      )}
      {box}
    </div>
  );
};

export default Toggle;
