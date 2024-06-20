import { cn } from "@bem-react/classname";
import "./option.css";
import useHover from "@/hooks/useHover";
import { memo, useCallback, useEffect } from "react";
import Typography from "@/components/typography/typography";
import useSelect from "../hooks/useSelect";
const cnOption = cn("option");

type Props = {
  label: string;
  value: string;
};

const Option = ({ label, value }: Props) => {
  const { selected, select, register, hover: setHover, hovered } = useSelect();

  const handleHover = useCallback(() => setHover(value), [setHover, value]);
  const { hover, hoverHandlers } = useHover({ onHover: handleHover });

  useEffect(() => register({ label, value }), [label, register, value]);

  const cssSelected = selected === value && hovered === null;

  return (
    <div
      key={label}
      className={cnOption({
        selected: cssSelected,
        hover: hover || value === hovered?.value,
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
