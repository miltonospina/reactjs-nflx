import React from "react";
import { GenreSelect } from "../components/GenreSelect";

export default {
  title: "GenreSelect",
  component: GenreSelect,
  argTypes: {
    genres: {
      control: "array",
    },
    selected: {
      control: "text",
    },
    onSelect: {
      action: "select",
    },
  },
};

const Template = (args) => <GenreSelect {...args} />;

export const Primary = Template.bind({});

const genres = ["AAA", "BBB", "CCC", "DDD"];
let selected = "CCC";

Primary.args = {
  genres,
  selected,
  onSelect: (genre) => console.log(`Seleccionado: ${genre}`)
};
