import type { Meta, StoryObj } from "@storybook/react";

import React, { ChangeEvent, useCallback, useState } from "react";
import Toggle from "./toggle";
const meta: Meta<typeof Toggle> = {
  component: Toggle,
  title: "Toggle",
};
export default meta;
type Story = StoryObj<typeof Toggle>;

const Component = (args: React.ComponentProps<typeof Toggle>) => {
  const [checked, setChecked] = useState(true);
  const handleChange = useCallback((event: ChangeEvent<HTMLInputElement>) => {
    setChecked(event.target.checked);
  }, []);
  return <Toggle {...args} checked={checked} onChange={handleChange} />;
};

export const Default: Story = {
  argTypes: {
    disabled: {
      type: "boolean",
    },
    label: {
      control: "text",
    },
  },
  args: {
    label: "Label",
    disabled: false,
  },
  render: (args) => <Component {...args} />,
};

export const StateStory: Story = {
  argTypes: {
    disabled: {
      type: "boolean",
    },
  },
  args: {
    disabled: false,
  },
  render: (args) => (
    <div style={{ display: "flex", gap: "8px" }}>
      <Toggle {...args} checked />
      <Toggle {...args} />
    </div>
  ),
};

export const DisabledStory: Story = {
  render: () => (
    <div style={{ display: "flex", gap: "8px" }}>
      <Toggle disabled checked />
      <Toggle disabled />
    </div>
  ),
};

export const LabelStory: Story = {
  argTypes: {
    disabled: {
      type: "boolean",
    },
    label: {
      type: "string",
    },
  },
  args: {
    disabled: false,
    label: "Toggle Label",
  },
  render: (args) => (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        width: "300px",
        gap: "16px",
      }}
    >
      <Component {...args} labelPosition="left" />
      <Component {...args} labelPosition="right" />
    </div>
  ),
};
