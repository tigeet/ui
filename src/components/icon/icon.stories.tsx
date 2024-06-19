import type { Meta, StoryObj } from "@storybook/react";

import React from "react";
import Icon, { iconNames } from "./icon";
const meta: Meta<typeof Icon> = {
  component: Icon,
  title: "Icon",
};
export default meta;
type Story = StoryObj<typeof Icon>;

export const Default: Story = {
  argTypes: {
    size: {
      control: { type: "inline-radio" },
      options: ["sm", "md", "lg"],
    },
    variant: {
      control: "inline-radio",
      options: ["primary", "secondary", "accent", "inverse"],
    },
    disabled: { control: "boolean" },
  },
  args: {
    size: "md",
    variant: "accent",
    disabled: false,
  },
  render: (args) => (
    <>
      {iconNames.map((name) => (
        <Icon {...args} key={name} name={name} />
      ))}
    </>
  ),
};
