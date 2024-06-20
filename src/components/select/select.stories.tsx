import type { Meta, StoryObj } from "@storybook/react";

import Select, { Option } from "./select";
import React, { useCallback, useState } from "react";
const meta: Meta<typeof Select> = {
  title: "Select",
  component: Select,
};
export default meta;
type Story = StoryObj<typeof Select>;

const options: Option<number>[] = [
  { label: "Рим", value: 1 },
  { label: "Санкт-Петербург", value: 2 },
  { label: "Париж", value: 3 },
];
const Component = () => {
  const [value, setValue] = useState<number | undefined>(undefined);
  const handleChange = useCallback((value?: number) => {
    setValue(value);
  }, []);
  return (
    <Select
      options={options}
      value={value}
      onChange={handleChange}
      placeholder="Выберите значение"
    />
  );
};
export const Default: Story = {
  argTypes: {},
  args: {},
  render: (args) => <Component />,
};
