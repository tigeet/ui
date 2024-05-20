import type { Meta, StoryObj } from "@storybook/react";

import Button, { Size, Variant } from "./button";
import React from "react";
import Icon from "../icon/icon";
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

    text: {
      control: { type: "text" },
    },
  },
  args: {
    text: "String",
    size: "sm",
  },
  render: (args) => <Button {...args} />,
};
const size: Size[] = ["sm", "md", "lg"];
const variant: Variant[] = ["primary", "secondary", "outline"];

export const Preview: Story = {
  argTypes: {
    size: {
      control: { type: "select" },
    },
    rounded: {
      control: { type: "boolean" },
    },
    disabled: {
      control: { type: "boolean" },
    },
  },
  args: {
    size: "sm",
    rounded: false,
    disabled: false,
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
              <Button
                {...args}
                size={size}
                variant={variant}
                text="Placeholder"
              />
              <Button
                {...args}
                size={size}
                variant={variant}
                icon={<Icon name="x" size={size} variant={variant} />}
              />
              <Button
                {...args}
                size={size}
                variant={variant}
                text="Placeholder"
                icon={<Icon name="x" size={size} variant={variant} />}
              />
            </div>
          ))}
        </div>
      ))}
    </>
  ),
};
