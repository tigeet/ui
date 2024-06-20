import { cn } from "@bem-react/classname";
import "./select.css";
import clsx from "clsx";
import useHover from "@/hooks/useHover";
import { useCallback, useMemo, useRef, useState } from "react";
import useOutsideClick from "@/hooks/useOutsideClick";
import Icon from "../icon/icon";
import Option from "./option/option";
import Typography from "../typography/typography";
const cnSelect = cn("select");

export type Option<T> = {
  label: string;
  value: T;
};

type Props<T> = {
  options: Option<T>[];
  className?: string;
  value?: T;
  onChange?: (value?: T) => void;
  placeholder: string;
};

const Select = <T,>({
  className,
  options,
  value,
  onChange,
  placeholder,
}: Props<T>) => {
  const { hover, hoverHandlers } = useHover();
  const buttonRef = useRef<HTMLDivElement | null>(null);
  const [open, setOpen] = useState(false);
  const handleClose = useCallback(() => setOpen(false), []);
  const handleOpen = useCallback(() => setOpen(true), []);
  const ignore = useMemo(() => [buttonRef], []);
  const dropdownRef = useOutsideClick<HTMLDivElement>({
    onClick: handleClose,
    ignore,
  });

  const label = useMemo(
    () => options.find((option) => option.value === value)?.label,
    [value, options]
  );

  const handleSelect = (clicked: T) => {
    onChange?.(clicked === value ? undefined : clicked);
    handleClose();
  };

  return (
    <div className={clsx(className, cnSelect())}>
      <div
        ref={buttonRef}
        {...hoverHandlers}
        className={cnSelect("base", { hover, focused: open || hover })}
        onClick={handleOpen}
      >
        <Typography name="select-value" className={cnSelect("value")}>
          {label ?? placeholder}
        </Typography>

        <Icon
          variant="secondary"
          className={cnSelect("icon")}
          name="chevron-down"
        />
      </div>
      {open && (
        <div className={cnSelect("dropdown")} ref={dropdownRef}>
          <div className={cnSelect("options")}>
            {options.map((option) => (
              <Option
                label={option.label}
                onClick={() => handleSelect(option.value)}
                selected={option.value === value}
                key={option.label}
              />
            ))}
          </div>
        </div>
      )}
    </div>
  );
};

export default Select;
