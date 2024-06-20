import type { Meta, StoryObj } from "@storybook/react";

import IconButton, { Size, Variant } from "./iconButton";
import React from "react";
import { iconNames } from "../icon/icon";
const meta: Meta<typeof IconButton> = {
  title: "IconButton",
  component: IconButton,
};
export default meta;
type Story = StoryObj<typeof IconButton>;

export const Default: Story = {
  argTypes: {
    rounded: {
      control: { type: "boolean" },
    },
    strong: {
      control: { type: "boolean" },
    },
    size: {
      control: { type: "inline-radio" },
      options: ["sm", "md", "lg"],
    },
    variant: {
      control: "inline-radio",
      options: ["primary", "secondary", "accent", "inverse"],
    },
    disabled: { control: "boolean" },
    icon: {
      control: "select",
      options: iconNames,
    },
  },
  args: {
    strong: false,
    rounded: false,
    disabled: false,
    variant: "primary",
    size: "md",
    icon: "x",
  },
  render: (args) => <IconButton {...args} />,
};
