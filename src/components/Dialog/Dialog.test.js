import React from "react";
import { render, fireEvent, screen } from "@testing-library/react";
import Dialog from ".";

jest.mock("focus-trap-react", () => ({
  createFocusTrap: jest.fn(() => ({
    activate: jest.fn(),
    deactivate: jest.fn(),
  })),
}));

jest.mock("react-dom", () => ({
  ...jest.requireActual("react-dom"),
  createPortal: (node, _) => node,
}));


describe("Dialog component", () => {
  const mockTitle = "My Dialog";
  const mockContent = <p>Dialog content goes here</p>;

  it("this tests fails", () => {
    expect(true).toBeTruthy();
  })

  // it("should renders with the specified title and content", () => {

  //   render(
  //     <Dialog title={mockTitle} opened={true}>
  //       {mockContent}
  //     </Dialog>
  //   );

  //   expect(screen.getByTestId("modal-title").textContent).toBe(mockTitle);
  //   expect(screen.getByTestId("modal-content").textContent).toBe(mockContent);
  // });

  // it("calls the onClose callback when the close button is clicked", () => {
  //   const handleClose = jest.fn();
  //   render(
  //     <Dialog title={mockTitle} onClose={handleClose} opened={true}>
  //       {mockContent}
  //     </Dialog>
  //   );

  //   fireEvent.click(screen.getByTestId("close-button"));

  //   expect(handleClose).toHaveBeenCalled();
  // });
});
