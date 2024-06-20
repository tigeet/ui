import { cn } from "@bem-react/classname";
import "./group.css";
import { ReactNode, memo } from "react";
import Typography from "@/components/typography/typography";
const cnGroup = cn("group");

type Props = {
  label: string;
  children?: ReactNode;
};

const SelectGroup = ({ label, children }: Props) => {
  return (
    <>
      <div className={cnGroup()}>
        <Typography name="select-group">{label}</Typography>
      </div>
      {children}
    </>
  );
};

export default memo(SelectGroup);
