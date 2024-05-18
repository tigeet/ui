import type { Meta, StoryObj } from "@storybook/react";

import React from "react";
import Icon, { iconNames, icons } from "./icon";
const meta: Meta<typeof Icon> = {
  component: Icon,
  title: "Icon",
};
export default meta;
type Story = StoryObj<typeof Icon>;

export const Default: Story = {
  argTypes: {
    size: {
      control: { type: "select" },
    },
  },
  args: {
    size: "sm",
  },
  render: (args) => (
    <>
      {iconNames.map((name) => (
        <Icon key={name} name={name} />
      ))}
    </>
  ),
};
