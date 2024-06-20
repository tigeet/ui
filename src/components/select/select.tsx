import { cn } from "@bem-react/classname";
import "./select.css";
import clsx from "clsx";
import useHover from "@/hooks/useHover";
import {
  ReactNode,
  memo,
  useCallback,
  useEffect,
  useMemo,
  useRef,
  useState,
} from "react";
import useOutsideClick from "@/hooks/useOutsideClick";
import Icon from "../icon/icon";
import Typography from "../typography/typography";
import { TOption } from "./types";
import { SelectContext } from "./providers/selectProvider";
import useFocus from "@/hooks/useFocus";
import useKeyPress from "@/hooks/useKeyPress";
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
  const [open, setOpen] = useState(false);
  const [options, setOptions] = useState<TOption[]>([]);
  const [hoverIndex, setHoverIndex] = useState<number | null>(null);

  const handleClose = useCallback(() => {
    setOpen(false);
  }, []);

  const { hover, hoverHandlers } = useHover();
  const { focusHandlers, focused } = useFocus();

  const buttonRef = useRef<HTMLButtonElement | null>(null);
  const ignore = useMemo(() => [buttonRef], []);
  const dropdownRef = useOutsideClick<HTMLDivElement>({
    onClick: handleClose,
    ignore,
  });

  const handleOpen = useCallback(() => setOpen(true), [setOpen]);

  const handleSelect = useCallback(
    (clicked: string) => {
      onChange?.(clicked === value ? undefined : clicked);
      handleClose();
    },
    [handleClose, onChange, value]
  );

  const register = useCallback(
    (option: TOption) => {
      if (options.find(({ value }) => value === option.value)) return;
      setOptions((options) => [...options, option]);
    },
    [options]
  );

  const selectNext = useCallback(
    (e?: KeyboardEvent) => {
      if (!open) return;
      e?.preventDefault();
      setHoverIndex((hoverIndex) =>
        hoverIndex === null ? 0 : Math.min(hoverIndex + 1, options.length - 1)
      );
    },
    [open, options.length]
  );

  const selectPrev = useCallback(
    (e?: KeyboardEvent) => {
      if (!open) return;

      e?.preventDefault();
      setHoverIndex((hoverIndex) =>
        hoverIndex === null ? null : Math.max(0, hoverIndex - 1)
      );
    },
    [open]
  );

  const handleEnter = useCallback(
    (event?: KeyboardEvent) => {
      if (!open) return;
      if (hoverIndex === null) return;
      handleSelect(options[hoverIndex].value);
      event?.preventDefault();
    },
    [open, hoverIndex, handleSelect, options]
  );

  const handleHover = useCallback(
    (value: string) =>
      setHoverIndex(
        () => options.findIndex((option) => option.value === value) ?? null
      ),
    [options]
  );

  useKeyPress({
    callback: selectNext,
    keys: "ArrowDown",
  });

  useKeyPress({
    callback: selectPrev,
    keys: "ArrowUp",
  });

  useKeyPress({
    callback: handleClose,
    keys: "Escape",
  });

  useKeyPress({
    callback: handleEnter,
    keys: "Enter",
  });

  const label = useMemo(
    () => options.find((option) => option.value === value)?.label,
    [value, options]
  );

  return (
    <SelectContext.Provider
      value={{
        options,
        register,
        selected: value,
        select: handleSelect,
        hovered: hoverIndex === null ? null : options[hoverIndex],
        hover: handleHover,
      }}
    >
      <div className={clsx(className, cnSelect())}>
        <button
          ref={buttonRef}
          {...hoverHandlers}
          {...focusHandlers}
          className={cnSelect("base", { hover, focused: open || focused })}
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
        </button>
        {open && (
          <div className={cnSelect("dropdown", { open })} ref={dropdownRef}>
            <div className={cnSelect("options")}>{children}</div>
          </div>
        )}
      </div>
    </SelectContext.Provider>
  );
};

export default memo(Select);
