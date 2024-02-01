import { FC } from "react";
import { type Restaurant } from "../../../types";
import { isRestaurantOpen } from "../../../helpers";
import style from "./RestaurantCard.module.css";
import { Tag } from "../../common";

interface Props {
  restaurant: Restaurant;
}

export const RestaurantCard: FC<Props> = ({ restaurant }) => {
  const openHour = restaurant.hours.open;
  const closeHour = restaurant.hours.close;
  const isOpen = isRestaurantOpen({ openHour, closeHour });

  return (
    <div className={style.card}>
      <section className={style["title-container"]}>
        <h1 className={style.title}>{restaurant.name}</h1>
        <span className={isOpen ? style.open : style.close}>
          {isOpen ? "Open" : "Closed"}
        </span>
      </section>
      <div className={style["tag-container"]}>
        {restaurant.tags.map((tag) => (
          <Tag key={tag}>{tag}</Tag>
        ))}
      </div>
      <span>
        Open from {restaurant.hours.open} to {restaurant.hours.close}
      </span>
      <span>{restaurant.address}</span>
    </div>
  );
};
