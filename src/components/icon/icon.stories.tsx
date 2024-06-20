import type { Meta, StoryObj } from "@storybook/react";

import React from "react";
import Icon, { IconSize, IconVariant, iconNames } from "./icon";
const meta: Meta<typeof Icon> = {
  component: Icon,
  title: "Icon",
};
export default meta;
type Story = StoryObj<typeof Icon>;

const variants: IconVariant[] = ["primary", "secondary", "accent", "inverse"];
const sizes: IconSize[] = ["sm", "md", "lg"];

export const Default: Story = {
  argTypes: {
    size: {
      control: { type: "inline-radio" },
      options: sizes,
    },
    variant: {
      control: "inline-radio",
      options: variants,
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

export const VariantStory: Story = {
  argTypes: {
    size: {
      control: { type: "inline-radio" },
      options: ["sm", "md", "lg"],
    },
    name: { control: "select", options: iconNames },
    disabled: { control: "boolean" },
  },
  args: {
    size: "md",
    name: "search",
    disabled: false,
  },
  render: (args) => (
    <div
      style={{
        background: "var(--fill-secondary-strong-default",
        padding: "8px",
      }}
    >
      {variants.map((variant) => (
        <Icon {...args} key={variant} variant={variant} />
      ))}
    </div>
  ),
};

export const SizeStory: Story = {
  argTypes: {
    variant: {
      control: "inline-radio",
      options: variants,
    },
    name: { control: "select", options: iconNames },
    disabled: { control: "boolean" },
  },
  args: {
    variant: "accent",
    name: "search",
    disabled: false,
  },
  render: (args) => (
    <div style={{ display: "flex", gap: "8px", alignItems: "center" }}>
      {sizes.map((size) => (
        <Icon {...args} key={size} size={size} />
      ))}
    </div>
  ),
};

export const DisabledStory: Story = {
  argTypes: {
    size: {
      control: { type: "inline-radio" },
      options: sizes,
    },
    name: { control: "select", options: iconNames },
  },
  args: {
    size: "md",
    variant: "accent",
    name: "search",
  },
  render: (args) => (
    <>
      {variants.map((variant) => (
        <Icon {...args} key={variant} variant={variant} disabled={true} />
      ))}
    </>
  ),
};
