import React, {
  ChangeEventHandler,
  HTMLProps,
  MouseEventHandler,
  memo,
  useCallback,
  useRef,
} from "react";
import { cn } from "@bem-react/classname";
import clsx from "clsx";
import "./input.css";
import Icon from "../icon/icon";
import Button from "../button/button";
import useHover from "@/hooks/useHover";
import useFocus from "@/hooks/useFocus";
import IconButton from "../iconButton/iconButton";
import useKeyPress from "@/hooks/useKeyPress";
export type Variant = "primary" | "secondary" | "outline";
export type Size = "sm" | "md" | "lg";

type Props = {
  mobile?: boolean;
  className?: string;
  onChange?: ChangeEventHandler<HTMLInputElement>;
  onClear?: MouseEventHandler;
  value: string;
  disabled?: boolean;
  readOnly?: boolean;
  rounded?: boolean;
  placeholder?: string;
  onSubmit?: () => void;
};

const cnInput = cn("input");
const Input = ({
  className,
  onChange,
  value,
  readOnly = false,
  disabled = false,
  mobile = false,
  rounded = false,
  placeholder,
  onSubmit,
  onClear,
}: Props) => {
  const { hover, hoverHandlers } = useHover();
  const { focusHandlers, focused } = useFocus();
  const controlRef = useRef<HTMLInputElement | null>(null);

  const handleClear = useCallback((e: React.MouseEvent) => {
    focused && controlRef.current?.focus();
    onClear?.(e);
  }, []);

  useKeyPress({
    callback: onSubmit,
    keys: "Enter",
  });
  return (
    <div
      onClick={() => !disabled && controlRef.current?.focus()}
      onSubmit={onSubmit}
      className={clsx(
        className,
        cnInput({
          mobile,
          desktop: !mobile,
          disabled,
          hover,
          focused,
          rounded,
          withButton: mobile || value.length > 1,
        })
      )}
      {...hoverHandlers}
      {...focusHandlers}
    >
      <div className={cnInput("controlWrapper")}>
        <Icon
          hover={hover}
          className={cnInput("searchIcon")}
          name="search"
          variant="secondary"
          size="lg"
        />
        <input
          disabled={disabled}
          ref={controlRef}
          className={cnInput("control", { hover })}
          value={value}
          placeholder={placeholder}
          onChange={onChange}
        />
        {(mobile || value.length > 0) && (
          <IconButton
            onClick={handleClear}
            size="md"
            className={cnInput("clearButton")}
            variant="secondary"
            strong={!mobile}
            icon="x"
            hover={mobile}
          />
        )}
      </div>
      {(mobile || value.length > 1) && (
        <Button
          variant={!mobile || value.length > 1 ? "primary" : "secondary"}
          size={mobile ? "md" : "lg"}
          disabled={disabled}
          className={cnInput("searchButton")}
          text="Найти"
          onClick={onSubmit}
        />
      )}
    </div>
  );
};
export default memo(Input);
