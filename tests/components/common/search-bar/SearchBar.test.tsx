import { render, screen, waitFor } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { SearchBar } from "../../../../src/components/common";
import "@testing-library/jest-dom";

jest.mock(
  "../../../../src/components/common/search-bar/SearchBar.module.css",
  () => "style"
);

describe("SearchBar.tsx", () => {
  test("should render the SearchBar component without errors", () => {
    render(<SearchBar onSearch={() => {}} />);
  });

  test("should update the placeholder text when the placeholder prop changes", () => {
    render(<SearchBar onSearch={() => {}} placeholder="New Placeholder" />);
    const inputElement = screen.getByPlaceholderText("New Placeholder");

    expect(inputElement).toBeInTheDocument();
  });

  test("should render the SearchBar component without errors when placeholder prop is not provided", () => {
    render(<SearchBar onSearch={() => {}} />);
  });
});

test("should call the onSearch function with the input value after a delay", async () => {
  const onSearchMock = jest.fn();

  render(<SearchBar onSearch={onSearchMock} />);
  const inputElement = screen.getByTestId("search-bar-input");

  userEvent.type(inputElement, "test");

  waitFor(() => expect(onSearchMock).toHaveBeenCalledWith("test"));
});
