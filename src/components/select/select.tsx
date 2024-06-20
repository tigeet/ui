import { cn } from "@bem-react/classname";
import "./select.css";
import clsx from "clsx";
import useHover from "@/hooks/useHover";
import { ReactNode, memo, useCallback, useMemo, useRef, useState } from "react";
import useOutsideClick from "@/hooks/useOutsideClick";
import Icon from "../icon/icon";
import Typography from "../typography/typography";
import { TOption } from "./types";
import { SelectContext } from "./providers/selectProvider";
const cnSelect = cn("select");

type Props = {
  className?: string;
  value?: string;
  onChange?: (value?: string) => void;
  placeholder: string;
  children?: ReactNode;
};

const Select = ({
  className,
  value,
  onChange,
  placeholder,
  children,
}: Props) => {
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

  const [options, setOptions] = useState<TOption[]>([]);

  const label = useMemo(
    () => options.find((option) => option.value === value)?.label,
    [value, options]
  );

  const handleSelect = (clicked: string) => {
    onChange?.(clicked === value ? undefined : clicked);
    handleClose();
  };

  const register = useCallback(
    (option: TOption) => {
      if (options.find(({ value }) => value === option.value)) return;
      setOptions((options) => [...options, option]);
    },
    [options]
  );

  return (
    <SelectContext.Provider
      value={{ options, register, selected: value, select: handleSelect }}
    >
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
            <div className={cnSelect("options")}>{children}</div>
          </div>
        )}
      </div>
    </SelectContext.Provider>
  );
};

export default memo(Select);
