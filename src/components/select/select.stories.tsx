import type { Meta, StoryObj } from "@storybook/react";

import React, { useCallback, useState } from "react";
import { Select, SelectGroup, SelectOption } from "@/components/select";
const meta: Meta<typeof Select> = {
  title: "Select",
  component: Select,
};
export default meta;
type Story = StoryObj<typeof Select>;

const OptionsComponent = () => {
  const [value, setValue] = useState<string | undefined>(undefined);
  const handleChange = useCallback((value?: string) => {
    setValue(value);
  }, []);

  return (
    <div style={{ height: "150px" }}>
      <Select
        className="select_stories-default"
        value={value}
        onChange={handleChange}
        placeholder="Выберите значение"
      >
        <SelectOption label="Вариант 1" value="1" />
        <SelectOption label="Вариант 2" value="2" />
        <SelectOption label="Вариант 3" value="3" />
        <SelectOption label="Вариант 4" value="4" />
      </Select>
      <style>{`.select_stories-default {
        width: 300px
      }`}</style>
    </div>
  );
};

const GroupComponent = () => {
  const [value, setValue] = useState<string | undefined>(undefined);
  const handleChange = useCallback((value?: string) => {
    setValue(value);
  }, []);

  return (
    <div style={{ height: "250px" }}>
      <Select
        className="select_stories-default"
        value={value}
        onChange={handleChange}
        placeholder="Выберите значение"
      >
        <SelectGroup label="Группа 1">
          <SelectOption label="Вариант 1" value="1" />
          <SelectOption label="Вариант 2" value="2" />
        </SelectGroup>
        <SelectGroup label="Группа 2">
          <SelectOption label="Вариант 3" value="3" />
        </SelectGroup>
        <SelectGroup label="Группа 3">
          <SelectOption label="Вариант 4" value="4" />
        </SelectGroup>
      </Select>
      <style>{`.select_stories-default {
        width: 300px
      }`}</style>
    </div>
  );
};
export const Default: Story = {
  argTypes: {},
  args: {},
  render: (args) => <OptionsComponent />,
};

export const OptionStory: Story = {
  argTypes: {},
  args: {},
  render: (args) => <OptionsComponent />,
};

export const GroupStory: Story = {
  argTypes: {},
  args: {},
  render: (args) => <GroupComponent />,
};
