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
  },
  args: {
    disabled: false,
  },
  render: (args) => <Component {...args} />,
};
