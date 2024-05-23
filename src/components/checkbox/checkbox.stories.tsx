import type { Meta, StoryObj } from "@storybook/react";

import React, { ChangeEvent, useCallback, useState } from "react";
import Checkbox from "./checkbox";
const meta: Meta<typeof Checkbox> = {
  component: Checkbox,
  title: "Checkbox",
};
export default meta;
type Story = StoryObj<typeof Checkbox>;

const Component = (args: React.ComponentProps<typeof Checkbox>) => {
  const [checked, setChecked] = useState(true);
  const handleChange = useCallback(
    (event: ChangeEvent<HTMLInputElement>) => setChecked(event.target.checked),
    []
  );
  return <Checkbox {...args} checked={checked} onChange={handleChange} />;
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
