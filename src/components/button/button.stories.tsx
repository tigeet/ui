import type { Meta, StoryObj } from "@storybook/react";

import Button, { Size, Variant } from "./button";
import React from "react";
const meta: Meta<typeof Button> = {
  title: "Button",
  component: Button,
};
export default meta;
type Story = StoryObj<typeof Button>;

const sizes: Size[] = ["sm", "md", "lg"];
const variants: Variant[] = ["primary", "secondary", "outline"];

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
      {sizes.map((size) => (
        <div
          key={size}
          style={{ display: "flex", gap: "12px", flexDirection: "column" }}
        >
          {variants.map((variant) => (
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

export const SizeStory: Story = {
  args: {
    rounded: false,
    disabled: false,
    text: "Button",
  },
  render: (args) => (
    <div style={{ display: "flex", gap: "8px", alignItems: "center" }}>
      {sizes.map((size) => (
        <Button key={size} {...args} size={size} />
      ))}
    </div>
  ),
};

export const VariantStory: Story = {
  args: {
    rounded: false,
    disabled: false,
    text: "Button",
  },
  render: (args) => (
    <div style={{ display: "flex", gap: "8px", alignItems: "center" }}>
      {variants.map((variants) => (
        <Button key={variants} {...args} variant={variants} />
      ))}
    </div>
  ),
};

export const RoundedStory: Story = {
  args: {
    disabled: false,
    size: "md",
    text: "Button",
  },
  render: (args) => (
    <div style={{ display: "flex", gap: "8px", alignItems: "center" }}>
      {variants.map((variants) => (
        <Button key={variants} {...args} rounded variant={variants} />
      ))}
    </div>
  ),
};

export const DisabledStory: Story = {
  args: {
    rounded: false,
    text: "Button",
  },
  render: (args) => (
    <div style={{ display: "flex", gap: "8px", alignItems: "center" }}>
      {variants.map((variants) => (
        <Button key={variants} {...args} disabled variant={variants} />
      ))}
    </div>
  ),
};

export const IconStory: Story = {
  args: {
    disabled: false,
    rounded: false,
    text: "Button",
  },
  render: (args) => (
    <div style={{ display: "flex", gap: "8px", alignItems: "center" }}>
      {variants.map((variants) => (
        <>
          <Button
            key={variants}
            {...args}
            text=""
            variant={variants}
            icon="search"
          />
          <Button key={variants} {...args} variant={variants} icon="search" />
        </>
      ))}
    </div>
  ),
};
