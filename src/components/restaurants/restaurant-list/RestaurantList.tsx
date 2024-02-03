import { FC } from "react";
import { type Restaurant } from "../../../types";
import { Box } from "../../common";
import { RestaurantCard } from "..";
import style from "./RestaurantList.module.css";

interface Props {
  list: Restaurant[];
}

export const RestaurantList: FC<Props> = ({ list = [] }) => {
  return (
    <Box
      maxWidth={"1200px"}
      marginTop={"60px"}
      marginBottom={"150px"}
      className={style.list}
    >
      {list.map((restaurant) => (
        <RestaurantCard key={restaurant.id} restaurant={restaurant} />
      ))}
    </Box>
  );
};
