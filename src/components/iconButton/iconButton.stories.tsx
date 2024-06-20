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

const variants = ["primary", "secondary", "accent", "inverse"] as const;
const sizes = ["sm", "md", "lg"] as const;
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
      options: sizes,
    },
    variant: {
      control: "inline-radio",
      options: variants,
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

export const SizeStory: Story = {
  args: {
    rounded: false,
    disabled: false,
    icon: "search",
  },
  render: (args) => (
    <div style={{ display: "flex", gap: "8px", alignItems: "center" }}>
      {sizes.map((size) => (
        <IconButton key={size} {...args} size={size} />
      ))}
    </div>
  ),
};

export const VariantStory: Story = {
  args: {
    rounded: false,
    disabled: false,
    icon: "search",
  },
  render: (args) => (
    <div
      style={{
        display: "flex",
        gap: "8px",
        alignItems: "center",
      }}
    >
      {variants.map((variants) => (
        <IconButton key={variants} {...args} variant={variants} />
      ))}
    </div>
  ),
};

export const RoundedStory: Story = {
  args: {
    disabled: false,
    size: "md",
    icon: "search",
  },
  render: (args) => (
    <div
      style={{
        display: "flex",
        gap: "8px",
        alignItems: "center",
      }}
    >
      {variants.map((variants) => (
        <IconButton key={variants} {...args} rounded variant={variants} />
      ))}
    </div>
  ),
};

export const DisabledStory: Story = {
  args: {
    rounded: false,
    icon: "search",
  },
  render: (args) => (
    <div
      style={{
        display: "flex",
        gap: "8px",
        alignItems: "center",
      }}
    >
      {variants.map((variants) => (
        <IconButton key={variants} {...args} disabled variant={variants} />
      ))}
    </div>
  ),
};

export const StrongStory: Story = {
  args: {
    rounded: false,
    disabled: false,
    icon: "search",
  },
  render: (args) => (
    <div
      style={{
        display: "flex",
        gap: "8px",
        alignItems: "center",
      }}
    >
      {variants.map((variants) => (
        <IconButton key={variants} {...args} variant={variants} strong />
      ))}
    </div>
  ),
};
