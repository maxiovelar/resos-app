import { imagesUrl } from "../../src/constants/constants";
import {
  generateImageUrl,
  isRestaurantOpen,
} from "../../src/helpers/restaurant.helper";
describe("restaurant.helper.ts/isRestaurantOpen", () => {
  beforeEach(() => {
    // Mock the current time to be 2024-02-03T14:00:00Z (January 1, 2024, 2:00:00 PM)
    jest.useFakeTimers();
    jest.setSystemTime(new Date("2024-01-01T14:00:00"));
  });
  test("isRestaurant Open should return true when current time is within restaurant opening hours", () => {
    const openHour = "10:00";
    const closeHour = "20:00";
    const result = isRestaurantOpen({ openHour, closeHour });

    expect(result).toBe(true);
  });

  test("isRestaurantOpen should return false when current time is before restaurant opening hours", () => {
    const openHour = "15:00";
    const closeHour = "20:00";
    const result = isRestaurantOpen({ openHour, closeHour });

    expect(result).toBe(false);
  });

  test("isRestaurantOpen should return false when current time is after restaurant closing hours", () => {
    const openHour = "08:00";
    const closeHour = "13:00";
    const result = isRestaurantOpen({ openHour, closeHour });
    expect(result).toBe(false);
  });

  test("isRestaurantOpen should throw an error when openHour has invalid format", () => {
    const openHour = "8:00";
    const closeHour = "20:00";
    expect(() => {
      isRestaurantOpen({ openHour, closeHour });
    }).toThrow("Invalid hour format");
  });

  test("isRestaurantOpen should throw an error when closeHour has invalid format", () => {
    const openHour = "08:00";
    const closeHour = "8:00";
    expect(() => {
      isRestaurantOpen({ openHour, closeHour });
    }).toThrow("Invalid hour format");
  });

  test("isRestaurantOpen should return false when openHour and closeHour are the same", () => {
    const openHour = "08:00";
    const closeHour = "08:00";
    const result = isRestaurantOpen({ openHour, closeHour });
    expect(result).toBe(false);
  });

  afterEach(() => {
    jest.useRealTimers();
  });
});

describe("restaurants.helper.test.ts/generateImageUrl", () => {
  test("generateImageUrl should return a URL string with the correct format when given a valid image path", () => {
    const image = "image.jpg";
    const expectedUrl = `${imagesUrl}image.jpg`;
    expect(generateImageUrl(image)).toBe(expectedUrl);
  });

  test("generateImageUrl should throw an error when given an image path with a protocol", () => {
    const image = "http://example.com/image.jpg";
    expect(() => generateImageUrl(image)).toThrow();
  });
});
