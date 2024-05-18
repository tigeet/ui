import type { Meta, StoryObj } from "@storybook/react";

import Button from "./button";
import React from "react";
const meta: Meta<typeof Button> = {
  component: Button,
};
export default meta;
type Story = StoryObj<typeof Button>;

export const Default: Story = {
  argTypes: {
    size: {
      control: { type: "select" },
    },
  },
  args: {
    size: "sm",
  },
  render: (args) => <Button {...args} />,
};
const size = ["sm", "md", "lg"];
const variant = ["primary", "secondary", "outline"];

export const Preview: Story = {
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
      {size.map((size) => (
        <>
          {variant.map((variant) => (
            <>
              <Button size={size} variant={variant} text="Placeholder" />
              <Button size={size} variant={variant} icon={<Icon/>} />
              <Button size={size} variant={variant} text="Placeholder" />
            </>
          ))}
        </>
      ))}
    </>
  ),
};
