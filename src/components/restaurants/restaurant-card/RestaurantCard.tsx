import { FC } from "react";
import { type Restaurant } from "../../../types";
import { isRestaurantOpen } from "../../../helpers";
import { Box, Tag, Typography } from "../../common";
import { imagesUrl } from "../../../constants/constants";
import style from "./RestaurantCard.module.css";

import { CardContent, Card, CardMedia } from "@mui/material";

interface Props {
  restaurant: Restaurant;
}

export const RestaurantCard: FC<Props> = ({ restaurant }) => {
  const openHour = restaurant.hours.open;
  const closeHour = restaurant.hours.close;
  const isOpen = isRestaurantOpen({ openHour, closeHour });
  const cardImageUrl = `${imagesUrl}/${restaurant.image}`;

  return (
    <Card sx={{ maxWidth: 345 }}>
      <CardMedia
        sx={{ height: 180 }}
        image={cardImageUrl}
        title={`${restaurant.name}`}
      />
      <CardContent>
        <Typography
          variant="h2"
          color={"primary"}
          fontSize={"20px"}
          fontWeight={"bold"}
          textTransform={"uppercase"}
          marginTop={0}
        >
          {restaurant.name}
          <Typography
            display={"inline"}
            fontWeight={"bold"}
            variant="body2"
            marginLeft={1}
            className={isOpen ? style.open : style.close}
          >
            {isOpen ? "Open" : "Closed"}
          </Typography>
        </Typography>
        <Box display={"flex"} gap={"6px"} marginTop={"4px"}>
          {restaurant.tags.map((tag) => (
            <Tag key={tag}>{tag}</Tag>
          ))}
        </Box>
        <Box marginTop={2}>
          <Typography variant="body2" color="text.secondary">
            Open from {restaurant.hours.open} to {restaurant.hours.close}
          </Typography>
          <Typography variant="body2" color="text.secondary">
            {restaurant.address}
          </Typography>
        </Box>
      </CardContent>
    </Card>
  );
};
