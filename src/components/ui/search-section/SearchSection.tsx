import { FC } from "react";
import { Image, SearchBar, Box } from "../../common";
import headerImg from "../../../assets/resos-restaurant.svg";
import style from "./SearchSection.module.css";

interface Props {
  handleSearch: (value: string) => void;
}

export const SearchSection: FC<Props> = ({ handleSearch }) => {
  return (
    <Box
      display="flex"
      justifyContent={"space-between"}
      alignItems={"center"}
      marginTop={"60px"}
      flexDirection={{ xs: "column", md: "row" }}
      gap={"50px"}
    >
      <Image
        width={"550px"}
        src={headerImg}
        alt="restaurant image"
        className={style.image}
      />
      <SearchBar
        onSearch={handleSearch}
        placeholder="Search by name or tag..."
      />
    </Box>
  );
};
