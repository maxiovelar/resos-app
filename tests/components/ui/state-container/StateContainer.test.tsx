import { render } from "@testing-library/react";
import { StateContainer } from "../../../../src/components/ui";
import "@testing-library/jest-dom";

jest.mock(
  "../../../../src/components/restaurants/restaurant-list/RestaurantList.module.css",
  () => "style"
);

describe("StateContainer.tsx", () => {
  test("should render children when isLoading, isEmpty, and isError are all false", () => {
    const { getByText } = render(
      <StateContainer isLoading={false} isEmpty={false} isError={false}>
        <div>Test Children</div>
      </StateContainer>
    );

    expect(getByText("Test Children")).toBeInTheDocument();
  });

  test("should render Loader when isLoading is true", () => {
    const { getByTestId } = render(
      <StateContainer isLoading={true} isEmpty={false} isError={false}>
        <div>Test Children</div>
      </StateContainer>
    );

    expect(getByTestId("loader")).toBeInTheDocument();
  });

  test("should render error message when isError is true", () => {
    const { getByText } = render(
      <StateContainer isLoading={false} isEmpty={false} isError={true}>
        <div>Test Children</div>
      </StateContainer>
    );

    expect(getByText("Something went wrong.")).toBeInTheDocument();
  });

  test("should render info message when isEmpty is true", () => {
    const { getByText } = render(
      <StateContainer isLoading={false} isEmpty={true} isError={false}>
        <div>Test Children</div>
      </StateContainer>
    );

    expect(getByText("No results found for your search.")).toBeInTheDocument();
  });
});
