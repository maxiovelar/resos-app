import { useState } from "react";
import { RestaurantList } from "./components/restaurants/restaurant-list/RestaurantList";
import { SearchBar } from "./components/common/search-bar/SearchBar";
import style from "./App.module.css";
import { Layout } from "./components/common/layout/Layout";
import { Alert, Box, Header, Image } from "./components/common";
import headerImg from "./assets/resos-restaurant.svg";
import { useFetchRestaurants } from "./hooks/useFetchRestaurants";

function App() {
  const [searchQuery, setSearchQuery] = useState<string>("");
  const {
    data: restaurants,
    loading,
    error,
  } = useFetchRestaurants(searchQuery);

  const isEmpty = restaurants && restaurants.length === 0;

  const handleSearch = (searchValue: string) => {
    setSearchQuery(searchValue);
  };

  return (
    <Layout>
      <Header />
      <Box display="flex" className={style["header-section"]}>
        <Image
          width={"600px"}
          src={headerImg}
          alt="restaurant image"
          className={style.image}
        />
        <SearchBar onSearch={handleSearch} />
      </Box>
      {error && <Alert severity="error">Error fetching restaurants</Alert>}
      {isEmpty && (
        <Alert severity="info">No results found for your search</Alert>
      )}
      <RestaurantList list={restaurants} />
    </Layout>
  );
}

export default App;
