import { render, screen, waitFor } from "@testing-library/react";
import App from "../src/App";
import "@testing-library/jest-dom";

jest.mock(
  "../../../../src/components/restaurants/restaurant-card/RestaurantCard.module.css",
  () => "style"
);

describe("App.tsx", () => {
  it("should render the layout with header shape, search section, and restaurant list", async () => {
    render(<App />);

    expect(screen.getByTestId("layout")).toBeInTheDocument();
    expect(screen.getByTestId("header-shape")).toBeInTheDocument();
    expect(screen.getByTestId("search-section")).toBeInTheDocument();
    expect(
      screen.getByText("TRUSTED BY GREAT RESTAURANTS")
    ).toBeInTheDocument();
    waitFor(() =>
      expect(screen.getByTestId("restaurant-list")).toBeInTheDocument()
    );
  });
});
