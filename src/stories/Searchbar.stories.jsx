import React from "react";
import { Searchbar } from "../components/Searchbar";

export default {
  title: "Searchbar",
  component: Searchbar,
  argTypes: {
    initial: "text",
    onSearch: "function",
  },
};

const Template = (args) => <Searchbar {...args} />;

export const Primary = Template.bind({});

Primary.args = {
  initial: "initial text",
  onSearch: (v) => console.log(v)
};

export const Secondary = Template.bind({});

Secondary.args = {};
