import { FC, useState } from "react";
import { IconButton, InputBase, Paper } from "@mui/material";
import { useDebounce } from "../../../hooks";
import { SearchBarIcon } from "../../icons";

interface Props {
  onSearch: (value: string) => void;
  placeholder?: string;
}

export const SearchBar: FC<Props> = ({
  onSearch,
  placeholder = "Search...",
}) => {
  const [inputValue, setInputValue] = useState("");
  const debouncedInputValue = useDebounce(inputValue, 500);
  onSearch(debouncedInputValue);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setInputValue(e.target.value);
  };

  return (
    <Paper
      component="form"
      sx={{
        p: "2px 4px",
        display: "flex",
        alignItems: "center",
        width: { xs: "90%", sm: 420 },
        height: "fit-content",
      }}
    >
      <InputBase
        sx={{ ml: 1, flex: 1 }}
        placeholder={placeholder}
        inputProps={{ "aria-label": `${placeholder.toLowerCase}` }}
        onChange={handleChange}
      />
      <IconButton
        type="button"
        sx={{ p: "10px", pointerEvents: "none" }}
        aria-label="search"
      >
        <SearchBarIcon />
      </IconButton>
    </Paper>
  );
};
