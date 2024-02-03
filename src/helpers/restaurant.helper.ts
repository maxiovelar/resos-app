import { imagesUrl } from "../constants/constants";

interface IsRestaurantOpenProps {
  openHour: string;
  closeHour: string;
}
export const isRestaurantOpen = ({
  openHour,
  closeHour,
}: IsRestaurantOpenProps): boolean => {
  const currentHour = new Date().getHours();
  const currentMinute = new Date().getMinutes();

  const validateHourFormat = (hour: string): boolean => {
    const hourRegex = /^(0[0-9]|1[0-9]|2[0-3]):[0-5][0-9]$/;
    return hourRegex.test(hour);
  };

  if (!validateHourFormat(openHour) || !validateHourFormat(closeHour)) {
    throw new Error("Invalid hour format");
  }

  const [restaurantOpenHour, restaurantOpenMinute] = openHour
    .split(":")
    .map(Number);
  const [restaurantCloseHour, restaurantCloseMinute] = closeHour
    .split(":")
    .map(Number);

  const restaurantOpenTime = restaurantOpenHour * 60 + restaurantOpenMinute;
  const restaurantCloseTime = restaurantCloseHour * 60 + restaurantCloseMinute;
  const currentTime = currentHour * 60 + currentMinute;

  return (
    currentTime >= restaurantOpenTime && currentTime <= restaurantCloseTime
  );
};

export const generateImageUrl = (image: string) => {
  if (/^https?:\/\//i.test(image)) {
    throw new Error("Invalid image format");
  }
  const url = new URL(image, imagesUrl);
  return url.toString();
};
