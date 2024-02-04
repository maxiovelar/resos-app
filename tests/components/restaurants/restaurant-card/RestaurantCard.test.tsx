import { render } from "@testing-library/react";
import { RestaurantCard } from "../../../../src/components/restaurants";
import { type Restaurant } from "../../../../src/types";
import "@testing-library/jest-dom";

jest.mock("../../../../src/helpers", () => ({
  generateImageUrl: jest.fn().mockReturnValue("test-image-url"),
  isRestaurantOpen: jest.fn().mockReturnValue(true),
}));

jest.mock(
  "../../../../src/components/restaurants/restaurant-card/RestaurantCard.module.css",
  () => "style"
);

describe("RestaurantCard.tsx", () => {
  const mockRestaurant: Restaurant = {
    id: "test-id",
    name: "Test Restaurant",
    image: "test-image.jpg",
    tags: ["Italian", "Pizzeria"],
    address: "123 Test St, Test City",
    hours: {
      open: "10:00",
      close: "22:00",
    },
  };

  const { getByText, getByRole } = render(
    <RestaurantCard restaurant={mockRestaurant} />
  );

  test("renders correctly", () => {
    expect(getByText("Test Restaurant")).toBeInTheDocument();
    expect(getByText("Open")).toBeInTheDocument();
    expect(getByText("Italian")).toBeInTheDocument();
    expect(getByText("Pizzeria")).toBeInTheDocument();
    expect(getByText("Open from 10:00 to 22:00")).toBeInTheDocument();
    expect(getByText("123 Test St, Test City")).toBeInTheDocument();
    expect(getByRole("img")).toHaveAttribute("src", "test-image-url");
  });
});
