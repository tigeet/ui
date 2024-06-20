import { cn } from "@bem-react/classname";
import clsx from "clsx";
import "./fonts.css";
export const fonts = [
  "age-tag",
  "bubble-text",
  "button-sm",
  "button-md",
  "button-lg",
  "button-promo-24",
  "button-promo-32",
  "button-promo-40",
  "category-tag",
  "category-tag-number",
  "category-tag-page",
  "checkbox-label",
  "game-tag",
  "guard-description",
  "guard-tag",
  "headline",
  "input-text",
  "link-m-m",
  "link-m-r",
  "link-s-m",
  "link-s-r",
  "link-xs-r",
  "profile-description",
  "subscription",
  "tag",
  "tag-list",
  "tag-page",
  "text-area",
  "select-value",
  "select-option",
] as const;
export type Font = (typeof fonts)[number];

export type FontProps = {
  name: Font;
  nowrap?: boolean;
};

const cnFont = cn("font");
const getFont = ({ name, nowrap = true }: FontProps) => {
  return clsx(`font_${name}`, cnFont({ nowrap }));
};

export default getFont;
