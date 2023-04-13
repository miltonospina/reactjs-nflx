import React from "react";
import MovieForm from "../components/MovieForm";
import data from "../data/movies.json";

export default {
  title: "MovieForm",
  component: MovieForm,
};

const Template = (args) => <MovieForm {...args} />;

export const Primary = Template.bind({});

Primary.args = {};

export const Secondary = Template.bind({});

Secondary.args = {
  initialMovie: data[7]
};
