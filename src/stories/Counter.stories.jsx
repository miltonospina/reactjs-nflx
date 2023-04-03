import React from "react";
import Counter from "../components/Counter";

export default {
  title: "Counter",
  component: Counter,
  argTypes: {
    initial: "number",
  },
};

const Template = (args) => <Counter {...args} />;

export const Primary = Template.bind({});

Primary.args = {
  initial: 99,
};

export const Secondary = Template.bind({});

Secondary.args = {
};

export const NonValid = Template.bind({});

NonValid.args = {
  initial: 'NAN',
};

