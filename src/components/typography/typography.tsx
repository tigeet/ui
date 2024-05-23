import { cn } from "@bem-react/classname";
import clsx from "clsx";
import React, { ReactNode } from "react";
import "./typography.css";
import getFont, { FontProps } from "@/utils/getFont/getFont";

type Props = FontProps & { children?: ReactNode; className?: string };
const cnTypography = cn("typography");
const Typography = ({ children, className, ...fontProps }: Props) => {
  const fontClassName = getFont(fontProps);
  return (
    <span className={clsx(className, cnTypography(), fontClassName)}>
      {children}
    </span>
  );
};

export default Typography;
