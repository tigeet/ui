import type { Meta, StoryObj } from "@storybook/react";

import Button, { Size, Variant } from "./button";
import React from "react";
const meta: Meta<typeof Button> = {
  title: "Button",
  component: Button,
};
export default meta;
type Story = StoryObj<typeof Button>;

const size: Size[] = ["sm", "md", "lg"];
const variant: Variant[] = ["primary", "secondary", "outline"];

export const Default: Story = {
  argTypes: {
    rounded: {
      control: { type: "boolean" },
    },
    disabled: {
      control: { type: "boolean" },
    },
    text: {
      control: { type: "text" },
    },
  },
  args: {
    rounded: false,
    disabled: false,
    text: "Button",
  },
  render: (args) => (
    <>
      {size.map((size) => (
        <div
          key={size}
          style={{ display: "flex", gap: "12px", flexDirection: "column" }}
        >
          {variant.map((variant) => (
            <div key={size + variant} style={{ display: "flex", gap: "8px" }}>
              <Button {...args} size={size} variant={variant} />
              <Button {...args} size={size} variant={variant} icon="x" />
              <Button {...args} size={size} variant={variant} icon="x" />
            </div>
          ))}
        </div>
      ))}
    </>
  ),
};
