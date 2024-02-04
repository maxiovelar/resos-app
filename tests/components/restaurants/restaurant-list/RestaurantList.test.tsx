import { render } from "@testing-library/react";
import { RestaurantList } from "../../../../src/components/restaurants";
import "@testing-library/jest-dom";

jest.mock(
  "../../../../src/components/restaurants/restaurant-list/RestaurantList.module.css",
  () => "style"
);

describe("RestaurantList.tsx", () => {
  test("should render a list of restaurants with their respective information", () => {
    // Arrange
    const list = [
      {
        id: "1",
        name: "Restaurant 1",
        image: "image1.jpg",
        address: "123 Main St",
        tags: ["tag1", "tag2"],
        hours: {
          open: "18:00",
          close: "23:00",
        },
      },
      {
        id: "2",
        name: "Restaurant 2",
        image: "image2.jpg",
        address: "456 Elm St",
        tags: ["tag3", "tag4"],
        hours: {
          open: "12:00",
          close: "20:00",
        },
      },
    ];
    const { getByText, getByTitle } = render(<RestaurantList list={list} />);
    // Assert
    expect(getByText("Restaurant 1")).toBeInTheDocument();
    expect(getByText("Restaurant 2")).toBeInTheDocument();
    expect(getByTitle("Restaurant 1")).toBeInTheDocument();
    expect(getByTitle("Restaurant 2")).toBeInTheDocument();
    expect(getByText("123 Main St")).toBeInTheDocument();
    expect(getByText("456 Elm St")).toBeInTheDocument();
    expect(getByText("tag1")).toBeInTheDocument();
    expect(getByText("tag2")).toBeInTheDocument();
    expect(getByText("tag3")).toBeInTheDocument();
    expect(getByText("tag4")).toBeInTheDocument();
    expect(getByText("Open from 18:00 to 23:00")).toBeInTheDocument();
    expect(getByText("Open from 12:00 to 20:00")).toBeInTheDocument();
  });
});
