import { fireEvent, render, screen } from "@testing-library/react";
import { GenreSelect } from ".";

describe("GenreSelect", () => {
  it("should render all genders passed as props", () => {
            const mockGenres = ["AAA", "BBB", "CCC"];
    render(<GenreSelect genres={mockGenres} />);

    const genreList = screen.getAllByTestId("genre").map((e) => e.textContent);
    expect(JSON.stringify(mockGenres)).toBe(JSON.stringify(genreList));
  });

  it("should highlights a selected genre passed in props", () => {
    const mockGenres = ["AAA", "BBB", "CCC"];
    render(<GenreSelect genres={mockGenres} selected={mockGenres[1]} />);

    const highlightedGenre = screen
      .getAllByTestId("genre")
      .find((e) => e.classList.contains("selected")).textContent;
    expect(highlightedGenre).toBe(mockGenres[1]);
  });

  it('after a click event on a genre button component calls "onChange" callback and passes correct genre in arguments', () => {
    const mockGenres = ["AAA", "BBB", "CCC"];
    const spy = jest.fn();
    render(
      <GenreSelect
        genres={mockGenres}
        selected={mockGenres[1]}
        onSelect={spy}
      />
    );
    const genresElements = screen.getAllByTestId("genre");
    fireEvent.click(genresElements[2]);
    expect(spy).toBeCalledWith(mockGenres[2]);
  });
});
