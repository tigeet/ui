import { cn } from "@bem-react/classname";
import "./option.css";
import clsx from "clsx";
import useHover from "@/hooks/useHover";
import { useCallback, useMemo, useRef, useState } from "react";
import useOutsideClick from "@/hooks/useOutsideClick";
import Icon from "../icon/icon";
import Typography from "@/components/typography/typography";
const cnOption = cn("option");

type Props = {
  onClick?: () => void;
  label: string;
  selected: boolean;
};

const Option = ({ onClick, label, selected }: Props) => {
  const { hover, hoverHandlers } = useHover();

  return (
    <div
      key={label}
      className={cnOption({
        selected,
        hover,
      })}
      onClick={onClick}
      {...hoverHandlers}
    >
      <Typography className={cnOption("label")} name="select-option">
        {label}
      </Typography>
    </div>
  );
};

export default Option;
