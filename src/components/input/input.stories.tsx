import type { Meta, StoryObj } from "@storybook/react";

import Input, { Size, Variant } from "./input";
import React, { useCallback, useState } from "react";
const meta: Meta<typeof Input> = {
  title: "Input",
  component: Input,
};
export default meta;
type Story = StoryObj<typeof Input>;

const Component = (args: Partial<React.ComponentProps<typeof Input>>) => {
  const [value, setValue] = useState("");
  const onClear = useCallback(() => setValue(""), []);

  return (
    <Input
      {...args}
      value={args.value ? args.value : value}
      onChange={(e) => setValue(e.target.value)}
      onClear={onClear}
    />
  );
};
export const Default: Story = {
  argTypes: {
    disabled: {
      control: { type: "boolean" },
    },
    mobile: {
      control: { type: "boolean" },
    },
    rounded: {
      control: { type: "boolean" },
    },
    value: {
      control: { type: "text" },
    },
    placeholder: {
      control: { type: "text" },
    },
  },
  args: {
    disabled: false,
    mobile: false,
    value: "",
    rounded: false,
    placeholder: "Введите текст",
  },
  render: (args) => <Component {...args} />,
};

export const PlatformStory: Story = {
  argTypes: {
    disabled: {
      control: { type: "boolean" },
    },

    rounded: {
      control: { type: "boolean" },
    },
    value: {
      control: { type: "text" },
    },
    placeholder: {
      control: { type: "text" },
    },
  },
  args: {
    disabled: false,
    value: "",
    rounded: false,
    placeholder: "Введите текст",
  },
  render: (args) => (
    <div style={{ display: "flex", flexDirection: "column", gap: "8px" }}>
      <Component {...args} />
      <Component {...args} mobile />
    </div>
  ),
};

export const EmptyStory: Story = {
  argTypes: {
    disabled: {
      control: { type: "boolean" },
    },
    rounded: {
      control: { type: "boolean" },
    },

    placeholder: {
      control: { type: "text" },
    },
  },
  args: {
    disabled: false,
    rounded: false,
    placeholder: "Введите текст",
  },
  render: (args) => (
    <div style={{ display: "flex", flexDirection: "column", gap: "8px" }}>
      <Input {...args} value="" />
      <Input {...args} value="" mobile />
    </div>
  ),
};

export const CharStory: Story = {
  argTypes: {
    disabled: {
      control: { type: "boolean" },
    },
    rounded: {
      control: { type: "boolean" },
    },

    placeholder: {
      control: { type: "text" },
    },
  },
  args: {
    disabled: false,
    rounded: false,
    placeholder: "Введите текст",
  },
  render: (args) => (
    <div style={{ display: "flex", flexDirection: "column", gap: "8px" }}>
      <Input {...args} value="S" />
      <Input {...args} value="S" mobile />
    </div>
  ),
};

export const StringStory: Story = {
  argTypes: {
    disabled: {
      control: { type: "boolean" },
    },
    rounded: {
      control: { type: "boolean" },
    },

    placeholder: {
      control: { type: "text" },
    },
  },
  args: {
    disabled: false,
    rounded: false,
    placeholder: "Введите текст",
  },
  render: (args) => (
    <div style={{ display: "flex", flexDirection: "column", gap: "8px" }}>
      <Input {...args} value="Search" />
      <Input {...args} value="Search" mobile />
    </div>
  ),
};

export const RoundedStory: Story = {
  argTypes: {
    disabled: {
      control: { type: "boolean" },
    },

    placeholder: {
      control: { type: "text" },
    },
    value: { control: { type: "text" } },
  },
  args: {
    disabled: false,
    rounded: false,
    value: "S",
    placeholder: "Введите текст",
  },
  render: (args) => <Input {...args} rounded />,
};

export const DisabledStory: Story = {
  argTypes: {
    placeholder: {
      control: { type: "text" },
    },
    value: { control: { type: "text" } },
  },
  args: {
    rounded: false,
    value: "S",
    placeholder: "Введите текст",
  },
  render: (args) => <Input {...args} disabled />,
};
