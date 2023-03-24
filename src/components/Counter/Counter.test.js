import { fireEvent, render, screen } from "@testing-library/react";
import Counter from ".";

describe("Counter", () => {
  it("should renders initial value provided in props", () => {
    const initialValue = 12;
    render(<Counter initial={initialValue} />);
    const element = screen.getByText(initialValue);
    expect(element).toBeInTheDocument();
  });

  it('should decrements the displayed value when "Decrease" button is pressed', () => {
    const initialValue = 10;
    render(<Counter initial={initialValue} />);
    const decreaseButton = screen.getByText("(-) Decrease");
    fireEvent.click(decreaseButton);

    const element = screen.getByTestId("counter").textContent;
    expect(Number(element)).toBe(initialValue - 1);
  });

  it('should increments the displayed value when "Increase" button is pressed', () => {
    const initialValue = 10;
    render(<Counter initial={initialValue} />);
    const increaseButton = screen.getByText("(+) Increase");
    fireEvent.click(increaseButton);

    const element = screen.getByTestId("counter").textContent;
    expect(Number(element)).toBe(initialValue + 1);
  });
});
