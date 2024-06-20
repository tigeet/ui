import { cn } from "@bem-react/classname";
import "./option.css";
import clsx from "clsx";
import useHover from "@/hooks/useHover";
import { memo, useCallback, useEffect, useMemo, useRef, useState } from "react";
import useOutsideClick from "@/hooks/useOutsideClick";
import Icon from "../icon/icon";
import Typography from "@/components/typography/typography";
import useSelect from "../hooks/useSelect";
const cnOption = cn("option");

type Props = {
  label: string;
  value: string;
};

const Option = ({ label, value }: Props) => {
  const { hover, hoverHandlers } = useHover();
  const { selected, select, register } = useSelect();
  useEffect(() => register({ label, value }), []);
  return (
    <div
      key={label}
      className={cnOption({
        selected: selected === value,
        hover,
      })}
      onClick={() => select(value)}
      {...hoverHandlers}
    >
      <Typography className={cnOption("label")} name="select-option">
        {label}
      </Typography>
    </div>
  );
};

export default memo(Option);
