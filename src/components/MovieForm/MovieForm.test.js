import React from "react";
import { render, fireEvent, screen } from "@testing-library/react";
import MovieForm from ".";
import data from "../../data/movies.json";

describe("MovieForm component", () => {
  const initialMovie = data[1];
  delete initialMovie.genres;

  it("renders the form with correct initial values", () => {
    render(<MovieForm initialMovie={initialMovie} onSubmit={() => {}} />);

    expect(screen.getByTestId("title-input")).toHaveValue(initialMovie.title);
    expect(screen.getByTestId("release-date-input")).toHaveValue(
      initialMovie.releaseYear.toString()
    );
    expect(screen.getByTestId("movie-url-input")).toHaveValue(
      initialMovie.imageUrl
    );
    expect(screen.getByTestId("rating-input")).toHaveValue(
      initialMovie.score.toString()
    );
    expect(screen.getByTestId("runtime-input")).toHaveValue(
      initialMovie.duration
    );
    expect(screen.getByTestId("overview-input")).toHaveValue(
      initialMovie.description
    );
  });

  it("calls onSubmit with the form data when submitted", () => {
    const handleSubmit = jest.fn();
    const m = { title: "old name", rating: 0 };
    render(<MovieForm initialMovie={m} onSubmit={handleSubmit} />);

    fireEvent.change(screen.getByTestId("title-input"), {
      target: { value: "The Godfather" },
    });
    fireEvent.submit(screen.getByTestId("movie-form"));

    expect(handleSubmit).toHaveBeenCalledTimes(1);
    expect(handleSubmit).toHaveBeenCalledWith({
      title: "The Godfather",
      rating: 0,
    });
  });

});
