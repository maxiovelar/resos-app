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
      // justifyContent={"space-between"}
      alignItems={"center"}
      marginTop={"30px"}
      flexDirection={{ xs: "column", md: "row" }}
      gap={{ xs: "50px", md: "90px" }}
    >
      <Image
        width={"510px"}
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
