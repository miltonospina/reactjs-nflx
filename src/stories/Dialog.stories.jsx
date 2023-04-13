import React from "react";
import Dialog from "../components/Dialog";

export default {
  title: "Dialog",
  component: Dialog,
  argTypes: {
    initial: "text",
    onSearch: "function",
  },
};

const Template = (args) => <Dialog {...args} />;

export const Primary = Template.bind({});

Primary.args = {
  title: "Dialog title",
  children: <p>Some content here</p>,
  onClose: () => console.log,
  opened: true,

};

export const Secondary = Template.bind({});

Secondary.args = {};
