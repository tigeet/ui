import { cn } from "@bem-react/classname";
import clsx from "clsx";
import React, { ElementType, ReactNode } from "react";
import "./typography.css";
import getFont, { FontProps } from "@/utils/getFont/getFont";

type Props = FontProps & {
  as?: ElementType;
  children?: ReactNode;
  className?: string;
};
const cnTypography = cn("typography");
const Typography = ({
  children,
  className,
  as: ElementTag = "span",
  ...fontProps
}: Props) => {
  const fontClassName = getFont(fontProps);
  return (
    <ElementTag className={clsx(className, cnTypography(), fontClassName)}>
      {children}
    </ElementTag>
  );
};

export default Typography;
