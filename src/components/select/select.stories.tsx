import type { Meta, StoryObj } from "@storybook/react";

import Select from "./select";
import React, { useCallback, useState } from "react";
import { TOption } from "./types";
import Option from "./option/option";
import Group from "./group/group";
const meta: Meta<typeof Select> = {
  title: "Select",
  component: Select,
};
export default meta;
type Story = StoryObj<typeof Select>;

const Component = () => {
  const [value, setValue] = useState<string | undefined>(undefined);
  const handleChange = useCallback((value?: string) => {
    setValue(value);
  }, []);
  return (
    <>
      <Select
        className="select_stories-default"
        value={value}
        onChange={handleChange}
        placeholder="Выберите значение"
      >
        <Group label="Россия">
          <Option label="Санкт-Петербург" value="spb" />
          <Option label="Москва" value="moscow" />
        </Group>
        <Group label="Франция">
          <Option label="Париж" value="paris" />
        </Group>
        <Group label="Италия">
          <Option label="Рим" value="rome" />
        </Group>
      </Select>
      <style>{`.select_stories-default {
        width: 300px
      }`}</style>
    </>
  );
};
export const Default: Story = {
  argTypes: {},
  args: {},
  render: (args) => <Component />,
};
