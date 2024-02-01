import { FC } from "react";

import { type Restaurant } from "../../../types";
import { RestaurantCard } from "../restaurant-card/RestaurantCard";
import style from "./RestaurantList.module.css";
import { Box, Typography } from "../../common";

interface Props {
  list: Restaurant[];
}

export const RestaurantList: FC<Props> = ({ list }) => {
  return (
    <main className={style.container}>
      <Typography variant="h1" className={style.title}>
        TRUSTED BY GREAT RESTAURANTS
      </Typography>
      <Box className={style.list}>
        {list &&
          list.map((restaurant) => (
            <RestaurantCard key={restaurant.id} restaurant={restaurant} />
          ))}
      </Box>
    </main>
  );
};
