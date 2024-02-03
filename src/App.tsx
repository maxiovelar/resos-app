import { useState } from "react";
import { RestaurantList } from "./components/restaurants";
import { useFetchRestaurants } from "./hooks";
import {
  HeaderShape,
  Layout,
  SearchSection,
  StateContainer,
} from "./components/ui";
import style from "./App.module.css";
import { Typography } from "./components/common";

function App() {
  const [searchQuery, setSearchQuery] = useState<string>("");
  const {
    data: restaurants,
    loading,
    isEmpty,
    isError,
  } = useFetchRestaurants(searchQuery);

  const handleSearch = (searchValue: string) => {
    setSearchQuery(searchValue);
  };

  return (
    <Layout>
      <HeaderShape />
      <SearchSection handleSearch={handleSearch} />
      <Typography
        variant="h1"
        color={"white"}
        fontSize={"18px"}
        fontWeight={"bold"}
        letterSpacing={"3px"}
        textAlign={"center"}
        marginY={"60px"}
        className={style.title}
      >
        TRUSTED BY GREAT RESTAURANTS
      </Typography>
      <StateContainer isLoading={loading} isError={isError} isEmpty={isEmpty}>
        <RestaurantList list={restaurants} />
      </StateContainer>
    </Layout>
  );
}

export default App;
