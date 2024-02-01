import { FC, useState } from "react";
import { Button } from "..";
import style from "./SearchBar.module.css";

interface Props {
  onSearch: (value: string) => void;
}

export const SearchBar: FC<Props> = ({ onSearch }) => {
  const [inputValue, setInputValue] = useState("");

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setInputValue(e.target.value);
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    onSearch(inputValue);
  };

  return (
    <form onSubmit={handleSubmit} className={style.form}>
      <input onChange={handleChange} className={style.input} />

      <Button
        type="submit"
        variant="contained"
        size="large"
        color="secondary"
        disableElevation
      >
        Search
      </Button>
    </form>
  );
};
