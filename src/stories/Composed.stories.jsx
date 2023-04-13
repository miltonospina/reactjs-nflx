import React from "react";
import Dialog from "../components/Dialog";
import MovieForm from "../components/MovieForm";

export default {
  title: "Composed components",
  component: Dialog,
  argTypes: {
    initial: "text",
    onSearch: "function",
  },
};
const AddMovieDialog = ({ onSubmit }) => (
  <Dialog title="Add Movie" onClose={onSubmit}>
    <MovieForm onSubmit={onSubmit} />
  </Dialog>
);

const AddMovieDialogTemplate = (args) => <AddMovieDialog {...args} />;

export const Primary = AddMovieDialogTemplate.bind({});

Primary.args = {};

const EditMovieDialog = ({ initialMovie, onSubmit }) => (
  <Dialog title="Edit Movie" onClose={onSubmit}>
    <MovieForm initialMovie={initialMovie} onSubmit={onSubmit} />
  </Dialog>
);



const EditMovieDialogTemplate = (args) => <EditMovieDialog {...args} />;

export const Edit = EditMovieDialogTemplate.bind({});

Edit.args = {
  initialMovie: {
    title: "Inception",
    releaseYear: "2010",
    imageUrl: "https://example.com/inception.jpg",
    score: 8.8,
    duration: "148 min",
    description:
      "A thief who steals corporate secrets through the use of dream-sharing technology is given the inverse task of planting an idea into the mind of a C.E.O.",
  },
};

const DeleteMovieDialog = () =>  (<Dialog title={"Delete movie"} children={
  <><p>Are you sure you want to delete this movie?</p><button>Confirm</button></>
}/>)

const DeleteMovieDialogTemplate = (args) => <DeleteMovieDialog {...args} />;

export const Delete = DeleteMovieDialogTemplate.bind({});

