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

  const [restaurantOpenHour, restaurantOpenMinute] = openHour
    .split(":")
    .map(Number);
  const [restaurantCloseHour, restaurantCloseMinute] = closeHour
    .split(":")
    .map(Number);

  const restaurantOpenTime = restaurantOpenHour * 60 + restaurantOpenMinute;
  const restaurantCloseTime = restaurantCloseHour * 60 + restaurantCloseMinute;
  const currentTime = currentHour * 60 + currentMinute;

  return currentTime >= restaurantOpenTime && currentTime <= restaurantCloseTime
    ? true
    : false;
};
