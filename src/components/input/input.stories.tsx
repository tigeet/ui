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
    rounded: true,
    placeholder: "Введите текст",
  },
  render: (args) => <Component {...args} />,
};
