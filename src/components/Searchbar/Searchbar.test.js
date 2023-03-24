import { fireEvent, render, screen } from "@testing-library/react";
import { Searchbar } from ".";
describe("Searchbar", () => {
  it("should renders initial value provided in props", () => {
    const initialValue = "predefined";
    render(<Searchbar initial={initialValue} />);

    const value = screen.getByTestId("input").value;
    expect(value).toBe(initialValue);
  });

  it("should call onSearch with proper value after typing on the input and clicking on the submit button", () => {
    const spyCallback = jest.fn();
    const searchTerm = "Avengers";
    render(<Searchbar onSearch={spyCallback} />);
    const inputElement = screen.getByTestId("input");
    const buttonElement = screen.getByTestId("button");

    fireEvent.change(inputElement, { target: { value: searchTerm } });
    fireEvent.click(buttonElement);

    expect(spyCallback).toHaveBeenCalledWith(searchTerm);
  });

  it("should call onSearch with proper value after typing on the input and pressing enter key", () => {
    const spyCallback = jest.fn();
    const searchTerm = "Pokémon the movie";
    render(<Searchbar onSearch={spyCallback} />);
    const inputElement = screen.getByTestId("input");

    fireEvent.change(inputElement, { target: { value: searchTerm } });
    fireEvent.keyDown(inputElement, { key: "Enter", code: "Enter" });

    expect(spyCallback).toHaveBeenCalledWith(searchTerm);
  });
});
