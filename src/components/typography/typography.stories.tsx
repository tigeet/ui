import type { Meta, StoryObj } from "@storybook/react";
import { fonts } from "@/utils/getFont/getFont";
import React from "react";
import Typography from "./typography";
const meta: Meta<typeof Typography> = {
  component: Typography,
  title: "Typography",
};
export default meta;
type Story = StoryObj<typeof Typography>;

export const Default: Story = {
  argTypes: {
    children: {
      type: "string",
    },
    name: {
      options: fonts,
      control: "select",
    },
  },
  args: {
    children: "Typograhy",
    name: "button-sm",
  },
  render: (args) => <Typography {...args}>{args.children}</Typography>,
};
